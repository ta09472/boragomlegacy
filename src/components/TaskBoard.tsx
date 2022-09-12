import { Paper, Grid } from '@mui/material';
import { useState } from 'react';
import TaskList from './TaskList';
import TaskFormCard from './TaskFormCard';

interface Props<T> {
  visible: boolean;
  tasks: T[];
  addTask: () => void;
}

function TaskBoard<T>({ visible, tasks, addTask }: Props<T>) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(() => true);
  };

  if (!visible) return <></>;

  return (
    <Paper sx={style}>
      <Grid container columnSpacing={1} rowSpacing={1}>
        <TaskList tasks={tasks} />
        <Grid item>
          <TaskFormCard
            onSubmit={addTask}
            isActive={isActive}
            onClick={handleClick}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '31vw',
  padding: '0.5vw',
  marginTop: '2.5vh',
};

export default TaskBoard;
