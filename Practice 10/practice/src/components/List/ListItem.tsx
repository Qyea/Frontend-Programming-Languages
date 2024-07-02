import { PropsWithChildren } from "react";
import { ListItemText } from "./ListItemText";

export const ListItem = ({ children }: PropsWithChildren) => {
  return <li>{children}</li>;
};

ListItem.Text = ListItemText;
