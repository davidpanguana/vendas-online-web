import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import type { JSX } from "react";
import { useAuth } from "../../login/types/AuthContext";
import { Spin } from "antd";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user,} = useGlobalContext();
  const { loading } = useAuth();

  if (loading) return <Spin />;

  if (!user) return <Navigate to="/login" />;

  return children;
};