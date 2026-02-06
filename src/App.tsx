import { Routes, Route } from "react-router-dom";
import { LoginRoute } from "./modules/login/routes";
import type {JSX} from "react";
import { useNotification } from "./shared/hooks/useNotification";
import { firstScreenRoute } from "./modules/firstScreen/routes";
import { ProductRoute } from "./modules/product/screens/routes";
import PageNotFound from "./modules/firstScreen/screens/pageNotFound";


export function MainRoutes(): JSX.Element {
  return (
    <>
      <Route path="*" element={PageNotFound()}/>
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
        {firstScreenRoute()}
        {ProductRoute()}
        {MainRoutes()}
      </Routes>
    </>
  )
}

export default App
