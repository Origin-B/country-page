import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import CountriesContextProvider from "./context/CountriesContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CountriesContextProvider>
        <App />
      </CountriesContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
