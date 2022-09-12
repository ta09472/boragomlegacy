import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { TaskType } from '../interface/task';

interface Props {
  onSubmit: (value: TaskType) => void;
}

function TaskForm({ onSubmit }: Props) {
  const [input, setInput] = useState<TaskType>({
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
