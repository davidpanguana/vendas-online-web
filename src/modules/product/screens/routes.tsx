import { Route } from "react-router-dom";
import type {JSX} from "react";
import Product from "./product";
import {ProtectedRoute} from "./ProtectedRoute";

export enum ProductRoutesEnum {
  PRODUCT = "/product",
}

export function ProductRoute(): JSX.Element {
  return (
  <>
    <Route path={ProductRoutesEnum.PRODUCT}
      element={
      <ProtectedRoute>
        <Product />
      </ProtectedRoute>
    } />
  </>
  );
}
