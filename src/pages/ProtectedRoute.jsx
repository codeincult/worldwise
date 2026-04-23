import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return children;
}
export default ProtectedRoute;
