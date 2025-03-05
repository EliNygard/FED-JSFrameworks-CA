import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ErrorBoundary
          fallback={<div>Something went wrong. Please try again.</div>}
        >
          <App />
        </ErrorBoundary>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
