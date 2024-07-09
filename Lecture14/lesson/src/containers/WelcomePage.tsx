import { useParams } from "react-router-dom";

export const WelcomePage = () => {
  const params = useParams();
  console.log(`Welcome, ${params.user}`);
  return <div>Welcome, {params.user}</div>;
};
