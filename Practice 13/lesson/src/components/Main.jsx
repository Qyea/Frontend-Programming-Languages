import React from "react";
import EditForm, { Form } from "./Form";

export const Main = () => {
  const handleSubmit = (user) => {
    console.log("Create user", user);
  };
  return (
    <main>
      <Form onSubmit={handleSubmit} />
      <EditForm onSubmit={handleSubmit} />
    </main>
  );
};
