import { useLoaderData, useLocation } from "react-router-dom";

export const InfoPage = () => {
  const data = useLoaderData();
  const location = useLocation();
  console.log(data);
  console.log(location);
  return <div>InfoPage - {location.state?.data.name}</div>;
};
