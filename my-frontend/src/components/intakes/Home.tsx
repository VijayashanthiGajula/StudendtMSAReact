import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const redirect = useNavigate();
  return (
    <div>
      <h1>Welcome to UA_College</h1>
      <Button  variant="outlined"
        color="primary"
        onClick={() => redirect("/Intakes")}
      >
        Intakes List
      </Button>
    </div>
  );
};

export default Home;
