import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';

interface Props {
  onSubmit: () => void;
}

function TaskForm({ onSubmit }: Props) {
  const stopBubbling = (e: any) => {
    e.stopPropagation();
  };
  return (
    <Box component="form" sx={style}>
      <TextField
        required
        placeholder="Title"
        variant="standard"
        onClick={stopBubbling}
      />
      <TextField
        required
        placeholder="Description"
        variant="standard"
        onClick={stopBubbling}
      />
      <Button onSubmit={onSubmit}>add</Button>
    </Box>
  );
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
};

export default TaskForm;
