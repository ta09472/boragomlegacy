import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { Task } from '../App';
import { useState } from 'react';

interface Props {
  onBlur: () => void;
  onSubmit: (value: Task) => void;
}

function TaskForm({ onBlur, onSubmit }: Props) {
  const [input, setInput] = useState<Task>({
    title: 'falsea',
    desc: 'sad',
    isDone: false,
  });

  const handleInputChange = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <Box component="form" sx={style}>
      <TextField
        onChange={(e) => handleInputChange(e)}
        required
        autoFocus
        placeholder="Title"
        variant="standard"
        name="title"
      />
      <TextField
        onChange={(e) => handleInputChange(e)}
        placeholder="Description"
        variant="standard"
        name="desc"
      />
      <Button onSubmit={() => onSubmit(input)}>add</Button>
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
