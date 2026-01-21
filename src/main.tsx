import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { LoginRoute } from "./modules/login/routes";
import type {JSX} from "react";


export function MainRoutes(): JSX.Element {
  return (
    <>
      <Route index element={<h1>Hello world!</h1>} />
      <Route path="*" element={<h1>Page not found!</h1>} />
    </>
  );
}

const root = document.getElementById("root")!;


ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
    {LoginRoute()}
    {MainRoutes()}
</Routes> 
  </BrowserRouter>,
);