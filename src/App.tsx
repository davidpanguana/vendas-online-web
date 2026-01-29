import { Routes, Route } from "react-router-dom";
import { LoginRoute } from "./modules/login/Routes";
import type {JSX} from "react";
import { useNotification } from "./shared/hooks/useNotification";


export function MainRoutes(): JSX.Element {
  return (
    <>
      <Route index element={<h1>Hello world!</h1>} />
      <Route path="*" element={<h1>Page not found!</h1>} />
    </>
  );
}

export const root = document.getElementById("root")!;
function App() {
  const {contextHolder} = useNotification();
  return (
    <>
      {contextHolder}
      <Routes>
        {LoginRoute()}
        {MainRoutes()}
      </Routes>
    </>
  )
}

export default App
