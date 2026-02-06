import { Route } from "react-router-dom";
import type {JSX} from "react";
import FirstScreen from "../firstScreen/screens/firstScreen";

export enum FirstScreenRoutesEnum {
  FIRST_SCREEN = "/",
}

export function firstScreenRoute(): JSX.Element {
  return (
  <>
    <Route index element={<FirstScreen />} />
  </>
  );
}
