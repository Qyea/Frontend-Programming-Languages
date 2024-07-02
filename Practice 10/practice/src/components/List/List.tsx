import { PropsWithChildren } from "react";
import { ListItem } from "./ListItem";

export const List = ({ children }: PropsWithChildren) => {
  return <ul>{children}</ul>;
};

List.Item = ListItem;
