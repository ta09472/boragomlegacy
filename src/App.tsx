import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import BasicButton from './components/BasicButton';
import ProgressBar from './components/ProgressBar';
import TaskList from './components/TaskList';
import getDoneRate from './util/getDoneRate';

export interface Task {
  title: string;
  desc: string;
  isDone: boolean;
}

const data: Task[] = [
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
  // rate가 꼭 state로 존재해야 하는가?
  const [rate, setRate] = useState(0);
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState(data);

  useEffect(() => {
    setRate(Math.ceil((getDoneRate(tasks) / tasks.length) * 100));
  }, []);

  const handleClick = () => {
    setVisible(() => !visible);
  };

  const addTask = (newTask: Task) => {
    console.log(newTask);
    setTasks(() => [...tasks, newTask]);
  };

  return (
    <Box sx={style}>
      <ProgressBar rate={rate} />
      <BasicButton textContent="hello" onClick={handleClick} />
      <TaskList visible={visible} tasks={tasks} addTask={addTask} />
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
