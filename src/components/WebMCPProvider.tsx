"use client";

import { useEffect, useRef } from "react";
import { initializeMisfitzWebMCP } from "@/lib/webmcp";

export default function WebMCPProvider() {
const initialized = useRef(false);

useEffect(() => {
if (initialized.current) {
return;
}

initialized.current = true;

initializeMisfitzWebMCP();

}, []);

return null;
}
