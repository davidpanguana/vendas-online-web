import { Route } from "react-router-dom";
import LoginScreen from "./screens/loginScreen";
import type {JSX} from "react";

export function LoginRoute(): JSX.Element {
  return <Route path="/login" element={<LoginScreen />} />
}
