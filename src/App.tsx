import { Box } from '@mui/material';
import { useState } from 'react';
import BasicButton from './components/BasicButton';
import ProgressBar from './components/ProgressBar';
import TaskList from './components/TaskList';

interface Task {
  title: string;
  desc: string;
  isDone: boolean;
}

const tasks: Task[] = [
  {
    title: 'apple',
    desc: '사과를 먹는다.',
    isDone: true,
  },
  {
    title: 'melon',
    desc: '멜론을 먹는다.',
    isDone: false,
  },
  {
    title: 'lemon',
    desc: '레몬을 먹는다.',
    isDone: false,
  },
  {
    title: 'banana',
    desc: '바나나를 먹는다.',
    isDone: true,
  },
];

function App() {
  const [rate, setRate] = useState(10);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <Box sx={style}>
      <ProgressBar rate={rate} />
      <BasicButton textContent="hello" onClick={handleClick} />
      <TaskList visible={visible} tasks={tasks} />
    </Box>
  );
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export default App;
