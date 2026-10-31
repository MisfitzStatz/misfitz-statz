import { Suspense } from "react";
import StreamerOverlayClient from "./OverlayClient";

export default function StreamerOverlayPage() {
  return <Suspense fallback={null}><StreamerOverlayClient /></Suspense>;
}
