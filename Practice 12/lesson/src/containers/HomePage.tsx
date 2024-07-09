import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/info", {
      state: {
        data: {
          name: "test",
        },
      },
    });
  };
  return (
    <div>
      HomePage
      <Link
        to="/info"
        state={{
          data: {
            name: "test",
          },
        }}
      >
        Go to Info page as well
      </Link>
      <button onClick={handleClick}>Go to Info page</button>
    </div>
  );
};
