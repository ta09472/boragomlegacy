import Button from '@mui/material/Button';

interface Props {
  textContent: string;
  onClick: () => void;
}

function BasicButton({ textContent, onClick }: Props) {
  const handleClick = () => {
    onClick();
  };
  return (
    <Button onClick={handleClick} variant="contained">
      {textContent}
    </Button>
  );
}

export default BasicButton;
