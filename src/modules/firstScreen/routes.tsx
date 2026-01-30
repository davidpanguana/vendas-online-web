import { Route } from "react-router-dom";
import type {JSX} from "react";
import FirstScreen from "../firstScreen/screens/firstScreen";


export function firstScreenRoute(): JSX.Element {
  return (
  <>
    <Route index element={<FirstScreen />} />
  </>
  );
}
