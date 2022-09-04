import Button from "@mui/material/Button";

interface Props {
  textContent: string;
}

function BasicButton({ textContent }: Props) {
  return <Button>{textContent}</Button>;
}

export default BasicButton;
