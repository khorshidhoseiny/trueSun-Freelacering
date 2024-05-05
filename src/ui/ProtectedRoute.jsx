import React, { useEffect } from "react";
import useAuthorize from "../features/athentication/useAuthorize";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1 load the authenticated user
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize();

  // 2 check this is Authenticated & Athurise or not ?
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) {
      navigate("/not-access", { replace: true });
    }
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  //3- while Loading
  if (isLoading)
    return (
      <div className="flex justify-center h-screen items-center bg-secondary-100">
        <Loading />
      </div>
    );

  //4 if user [Authenticated & Athorize]
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
