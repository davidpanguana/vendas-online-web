import { Route } from "react-router-dom";
import LoginScreen from "./screens/loginScreen";
import type {JSX} from "react";

export enum LoginRoutesEnum {
  LOGIN = "/login",
}

export function LoginRoute(): JSX.Element {
  return (
  <>
    <Route path = {LoginRoutesEnum.LOGIN} element={<LoginScreen />} />
  </>
  );
}
