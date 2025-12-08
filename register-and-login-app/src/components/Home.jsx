import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const userFullName = `${user?.firstName} ${user?.lastName}`;

  const handleClick = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div>
      <h1>Hello {userFullName}</h1>
      <h2>Home Page</h2>

      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Home;
