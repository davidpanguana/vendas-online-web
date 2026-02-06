import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import type { JSX } from "react";
import { useAuth } from "../../login/types/AuthContext";
import { Spin } from "antd";
import { getAuthorizationToken } from "../../../shared/functions/connections/auth";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user} = useGlobalContext();
  const token = getAuthorizationToken();

  
  if(!token) return <Navigate to="/login" />
  
  if (!user) return <Spin />;

  return children;
};