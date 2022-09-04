import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import BasicButton from './components/BasicButton';
import ProgressBar from './components/ProgressBar';
import TaskList from './components/TaskList';
import getDoneRate from './util/getDoneRate';

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
  const [rate, setRate] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setRate(Math.ceil((getDoneRate(tasks) / tasks.length) * 100));
  }, []);

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
