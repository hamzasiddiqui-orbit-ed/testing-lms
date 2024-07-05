// src/hooks/useLogin.js
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useAuth } from "../contexts/AuthContext";

const useLogin = () => {
  const navigate = useNavigate();
  const { dispatch } = useAuth();

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      dispatch({ type: 'SET_CREDENTIALS', payload: data });
      navigateBasedOnUserType(data.user_type);
    },
    onError: (error) => {
      return error.response?.data?.message || 'An error occurred';
    },
  });

  const navigateBasedOnUserType = (userType) => {
    switch (userType) {
      case "Root":
      case "Admin":
        navigate("/admin_dashboard");
        break;
      case "Manager":
        navigate("/manager_dashboard");
        break;
      case "Learner":
        navigate("/learner_dashboard");
        break;
      default:
        navigate("/");
    }
  };

  const login = (username, password) => {
    if (!username || !password) {
      return Promise.reject("Username and Password fields should not be empty.");
    }
    return loginMutation.mutateAsync({ username, password });
  };

  return { login, isLoading: loginMutation.isLoading };
};

export default useLogin;