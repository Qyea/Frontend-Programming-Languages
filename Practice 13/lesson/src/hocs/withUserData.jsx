import { useEffect, useState } from "react";

export const withUserData = (Component) => (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    //..fetchData()
    const data = {
      name: "Jane",
      age: "42",
      surname: "White",
    };

    setState(data);
  }, []);

  const handleSubmit = (user) => {
    console.log("Edit user", user);
  };

  return (
    <Component
      {...props}
      initialName={state.name}
      initialAge={state.age}
      initialSurname={state.surname}
      onSubmit={handleSubmit}
    />
  );
};
