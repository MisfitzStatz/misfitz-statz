"use client";

import { API_URL } from "@/lib/api";

export interface ApiResponseLog {
  id: string;
  time: string;
  method: string;
  url: string;
  status: number;
  ok: boolean;
  durationMs: number;
  body: string;
}

const EVENT_NAME = "misfitz:api-response";
const MAX_BODY_CHARS = 80_000;
let installed = false;
let monitoringEnabled = false;

export function setApiResponseMonitoringEnabled(enabled: boolean) {
  monitoringEnabled = enabled;
}

function isApiUrl(rawUrl: string): boolean {
  try {
    const url = new URL(rawUrl, window.location.href);
    const apiOrigin = new URL(API_URL).origin;
    return url.origin === apiOrigin;
  } catch {
    return false;
  }
}

function redact(value: unknown, depth = 0): unknown {
  if (depth > 12) return "[Depth limit]";
  if (Array.isArray(value)) return value.map((item) => redact(item, depth + 1));
  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
      if (/token|secret|password|authorization|cookie|api.?key|client.?secret/i.test(key)) {
        result[key] = "[REDACTED]";
      } else {
        result[key] = redact(item, depth + 1);
      }
    }
    return result;
  }
  return value;
}

function safeUrl(rawUrl: string): string {
  try {
    const url = new URL(rawUrl, window.location.href);
    for (const key of [...url.searchParams.keys()]) {
      if (/token|secret|password|key|code|auth/i.test(key)) {
        url.searchParams.set(key, "[REDACTED]");
      }
    }
    return `${url.pathname}${url.search}`;
  } catch {
    return rawUrl.slice(0, 1000);
  }
}

export function installApiResponseMonitor() {
  if (typeof window === "undefined" || installed) return;
  installed = true;

  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
    const request = input instanceof Request ? input : null;
    const rawUrl = typeof input === "string"
      ? input
      : input instanceof URL
        ? input.toString()
        : input.url;
    const method = (init?.method || request?.method || "GET").toUpperCase();
    const track = monitoringEnabled && isApiUrl(rawUrl);
    const startedAt = performance.now();

    try {
      const response = await originalFetch(input, init);
      if (track) {
        let body = "[Response body unavailable]";
        try {
          const text = await response.clone().text();
          try {
            const json = JSON.parse(text) as unknown;
            body = JSON.stringify(redact(json), null, 2);
          } catch {
            body = text;
          }
          if (body.length > MAX_BODY_CHARS) {
            body = `${body.slice(0, MAX_BODY_CHARS)}\n… response truncated …`;
          }
        } catch {
          // Some streaming or opaque responses cannot be cloned/read safely.
        }

        const entry: ApiResponseLog = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          time: new Date().toLocaleTimeString(),
          method,
          url: safeUrl(rawUrl),
          status: response.status,
          ok: response.ok,
          durationMs: Math.round(performance.now() - startedAt),
          body,
        };
        window.dispatchEvent(new CustomEvent<ApiResponseLog>(EVENT_NAME, { detail: entry }));
      }
      return response;
    } catch (error) {
      if (track) {
        const entry: ApiResponseLog = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
          time: new Date().toLocaleTimeString(),
          method,
          url: safeUrl(rawUrl),
          status: 0,
          ok: false,
          durationMs: Math.round(performance.now() - startedAt),
          body: error instanceof Error ? error.message : "Network request failed",
        };
        window.dispatchEvent(new CustomEvent<ApiResponseLog>(EVENT_NAME, { detail: entry }));
      }
      throw error;
    }
  };
}

export function onApiResponse(callback: (entry: ApiResponseLog) => void) {
  const handler = (event: Event) => {
    callback((event as CustomEvent<ApiResponseLog>).detail);
  };
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
}
