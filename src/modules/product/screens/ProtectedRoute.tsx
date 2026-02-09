import type { JSX } from "react";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import { Spin } from "antd";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useGlobalContext();

  if (loading) return <Spin />;

  if (!user) return <Navigate to="/login" />;

  return children;
};
