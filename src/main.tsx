import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import LoginScreen from './modules/login/index.ts';

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
    <Route index element={<h1>Hello world!</h1>} />
    <Route path="/login" element={<LoginScreen />} />
    <Route path="*" element={<h1>Page not found!</h1>} />
</Routes> 
  </BrowserRouter>,
);