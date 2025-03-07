import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary/index.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Provider store={store}>
          <ErrorBoundary
            fallback={<div>Something went wrong. Please try again.</div>}
          >
            <App />
          </ErrorBoundary>
        </Provider>
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
);
