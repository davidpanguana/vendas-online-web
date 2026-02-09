import { useEffect, useState, type JSX } from "react";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import { getAuthorizationToken, unsetAuthorizationToken } from "../../../shared/functions/connections/auth";
import { connectAPIGET } from "../../../shared/functions/connections/connection.API";
import type { UserType } from "../../login/types/userType";
import { USER_URL } from "../../../shared/constants/url";
import { Navigate } from "react-router-dom";
import { Spin } from "antd";


export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, setUser } = useGlobalContext();
  const token = getAuthorizationToken();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      if (!user) {
        try {
          const response = await connectAPIGET<UserType>(USER_URL);
          setUser(response);
        } catch {
          unsetAuthorizationToken();
        }
      }

      setLoading(false);
    };

    fetchUser();
  }, []);

  if (!token) return <Navigate to="/login" />;

  if (loading) return <Spin />;

  return children;
};
