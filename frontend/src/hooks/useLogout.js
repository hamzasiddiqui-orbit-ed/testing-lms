// src/hooks/useLogout.js
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth";
import { useAuth } from "../contexts/AuthContext";

export const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const logoutMutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    },
    onError: (err) => {
      console.error("Logout failed:", err);
    },
  });

  const logout = () => {
    return logoutMutation.mutateAsync();
  };

  return { logout, isLoading: logoutMutation.isLoading };
};