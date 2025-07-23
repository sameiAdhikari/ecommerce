import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterConfig from "./App";

// import App from "./App.jsx";
import * as Sentry from "@sentry/react";

if (import.meta.env.MODE === "production") {
  Sentry.init({
    dsn: "https://e20684599c265c6a7c637fd8d37a4281@o4509718957457408.ingest.de.sentry.io/4509718964600912",
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 1.0, // You can lower this if you want fewer performance traces
    sendDefaultPii: true,
    environment: "production", // optional but good for filtering in the dashboard
    tracePropagationTargets: ["localhost", "127.0.0.1"],
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterConfig />
  </StrictMode>
);
