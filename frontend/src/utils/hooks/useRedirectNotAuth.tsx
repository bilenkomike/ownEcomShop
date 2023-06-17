import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "store/hooks";

const useRedirectNotAuth = () => {
  const navigate = useNavigate();
  const token = useTypedSelector((state) => state.authSlice).token;
  useEffect(() => {
    if (token.length <= 0) {
      navigate("/");
    }
  }, [token, navigate]);
};

export default useRedirectNotAuth;
