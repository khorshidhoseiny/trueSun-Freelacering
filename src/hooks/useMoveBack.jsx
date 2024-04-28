import { useNavigate } from "react-router-dom";

const UseMoveBack = () => {
  const navigate = useNavigate();
  return () => navigate(-1);
};

export default UseMoveBack;
