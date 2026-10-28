"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

type ServiceStatus = "operational" | "degraded" | "outage";

interface ComponentStatus {
  id: string;
  name: string;
  status: ServiceStatus;
}

interface CategoryStatus {
  id: string;
  name: string;
  status: ServiceStatus;
  components: ComponentStatus[];
}

interface StatusResponse {
  success: boolean;
  overall: ServiceStatus;
  lastUpdated: string;
  categories: CategoryStatus[];
}

function getStatusColor(status: ServiceStatus) {
  switch (status) {
    case "operational": return "text-green-400";
    case "degraded":    return "text-yellow-400";
    case "outage":      return "text-red-400";
  }
}

function getStatusDot(status: ServiceStatus) {
  switch (status) {
    case "operational": return "bg-green-500";
    case "degraded":    return "bg-yellow-500";
    case "outage":      return "bg-red-500";
  }
}

function getStatusText(status: ServiceStatus) {
  switch (status) {
    case "operational": return "Operational";
    case "degraded":    return "Degraded";
    case "outage":      return "Outage";
  }
}

function CategoryCard({category,}:{category: CategoryStatus}) {
const [open, setOpen] = useState(false);
return (
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/30">
  <button
    onClick={() => setOpen(!open)}
    className="flex w-full items-center justify-between p-6 text-left"
  >
    <div className="flex items-center gap-4">
      <span className="text-lg">{open ? "▼" : "▶"}</span>
      <h3 className="font-semibold text-lg">{category.name}</h3>
    </div>
    <span className={`font-medium ${getStatusColor(category.status)}`}>
      {getStatusText(category.status)}
    </span>
  </button>

  {open && (
    <div className="border-t border-zinc-800 px-6 py-4">
      <div className="space-y-3">
        {category.components.map((component) => (
          <div
            key={component.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`h-2.5 w-2.5 rounded-full ${getStatusDot(component.status)}`}/>
              <span>{component.name}</span>
            </div>

            <span className={`text-sm ${getStatusColor(component.status)}`}>
              {getStatusText(component.status)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
);
}

export default function StatusPage() {
const [data, setData] = useState<StatusResponse | null>(null);
const [loading, setLoading] = useState(true);
const [backendOffline, setBackendOffline] = useState(false);

async function fetchStatus() {
  try {
    const response = await fetch(`${API_URL}/api/status`);
    const json = await response.json();

    setData(json);
    setBackendOffline(false);
  } catch (error) {
    console.error(error);
    setBackendOffline(true);
    setData(null);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  fetchStatus();
  const interval = setInterval(fetchStatus, 30000);
  return () => clearInterval(interval);
}, []);

if (loading) {
return (
  <main className="mx-auto max-w-6xl px-6 py-16">
    <h1 className="text-4xl font-bold">
      System Status
    </h1>

    <p className="mt-4 text-zinc-400">
      Loading status...
    </p>
  </main>
);
}

if (!data) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        System Status
      </h1>

      <p className="mt-4 text-red-400">
        Unable to load status information.
      </p>
    </main>
  );
}

return (
<main className="mx-auto max-w-6xl px-6 py-16">
  <div className="mb-12">
    <h1 className="mb-4 text-4xl font-bold">
      System Status
    </h1>

    <p className="text-zinc-400">
      Live service availability and infrastructure
      status for Misfitz Statz.
    </p>
  </div>

  <div className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8">
    <div className="mb-4 flex items-center gap-3">
      <div className={`h-4 w-4 rounded-full ${getStatusDot(data.overall)}`}/>
      <h2 className="text-2xl font-bold">
        {data.overall === "operational" && "All Systems Operational"}
        {data.overall === "degraded" && "Partial Service Disruption"}
        {data.overall === "outage" &&"Major Service Outage"}
      </h2>
    </div>

    <p className="text-zinc-400">
      Last Updated:{" "}
      {new Date(data.lastUpdated).toLocaleString()}
    </p>

    {backendOffline && (
      <p className="mt-4 text-red-400">
        Unable to connect to server.
      </p>
    )}
  </div>

  <div className="space-y-4">
    {data.categories.map((category) => (
      <CategoryCard
        key={category.id}
        category={category}
      />
    ))}
  </div>
</main>
);
}