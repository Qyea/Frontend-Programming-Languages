type Props = {
  text: string | number;
};

export const ListItemText = ({ text }: Props) => {
  return <p>{text}</p>;
};
