import { BrowserRouter } from "react-router-dom";
import App, { root } from "./App";
import { createRoot } from "react-dom/client";
import { GlobalProvider } from "./shared/hooks/useGlobalContext";



createRoot(root).render(
  <BrowserRouter>
  <GlobalProvider>
    <App />
  </GlobalProvider>
  </BrowserRouter>,
);