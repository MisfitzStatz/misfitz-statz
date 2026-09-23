import { API_URL } from "@/lib/api";
import { notifyAuthInvalid } from "@/lib/authEvents";

export interface LinkedAccount {
  playerId: string;
  verified: boolean;
  privacy: "open" | "hidden" | "anonymous" | "private";
}

export interface Account {
  provider: string;
  discordId: string;
  linkedAccounts: LinkedAccount[];
  achievements?: unknown[];
  createdAt?: string | null;
  lastLogin?: string | null;
}

interface MeResponse {
  loggedIn: boolean;
  account?: Account;
}

export interface VerificationData {
  playerId: string;
  playerName?: string;
}

export interface VerificationResult {
  success: boolean;
  code: string;
  data?: VerificationData;
}

export async function authFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  const response = await fetch(input, {
    ...init,
    credentials: "include",
    cache: "no-store"
  });

  if (response.status === 401) {
    notifyAuthInvalid();
  }

  return response;
}

export async function getCurrentAccount(): Promise<Account | null> {
  const response = await fetch(`${API_URL}/auth/me`, {
    credentials: "include",
    cache: "no-store"
  });

  const data: MeResponse = await response.json();

  if (!data.loggedIn) {
    return null;
  }

  return data.account ?? null;
}

export async function devLogin(): Promise<void> {
  const response = await fetch(
    `${API_URL}/auth/test-login`,
    {
      credentials: "include",
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error("Development login failed.");
  }
}

export async function logout(): Promise<void> {
  const response = await fetch(
    `${API_URL}/auth/logout`,
    {
      credentials: "include",
      cache: "no-store"
    }
  );

  if (!response.ok) {
    throw new Error("Logout failed.");
  }
}

export async function startVerification(
  playerId: string
): Promise<VerificationResult> {
  const response = await authFetch(
    `${API_URL}/auth/verify/start/${encodeURIComponent(playerId)}`
  );

  return response.json();
}

export async function checkVerification(): Promise<VerificationResult> {
  const response = await authFetch(
    `${API_URL}/auth/verify/check`
  );

  return response.json();
}

export async function cancelVerification(): Promise<VerificationResult> {
  const response = await authFetch(
    `${API_URL}/auth/verify`,
    {
      method: "DELETE"
    }
  );

  return response.json();
}

export async function removePlayer(playerId: string): Promise<boolean> {
  const response = await authFetch(
    `${API_URL}/auth/player/${encodeURIComponent(playerId)}`,
    {
      method: "DELETE"
    }
  );

  if (!response.ok) {
    return false;
  }

  const data = await response.json();
  return data.success === true;
}

export async function deleteAccount(): Promise<boolean> {
  const response = await authFetch(
    `${API_URL}/auth/account`,
    {
      method: "DELETE"
    }
  );

  if (!response.ok) {
    return false;
  }

  const data = await response.json();
  return data.success === true;
}

export async function updatePrivacy(
  playerId: string,
  privacy: LinkedAccount["privacy"]
): Promise<boolean> {
  const response = await authFetch(
    `${API_URL}/auth/privacy`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        playerId,
        privacy
      })
    }
  );

  if (!response.ok) {
    return false;
  }

  const data = await response.json();

  return data.success === true;
}