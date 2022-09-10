import { Paper, Card, Grid, Button } from '@mui/material';
import Task from './Task';
import { useState } from 'react';
import AddOutlined from '@mui/icons-material/AddOutlined';
import TaskForm from './Form';

interface Props<T> {
  visible: boolean;
  tasks: T[];
  addTask: () => void;
}

function TaskList<T>({ visible, tasks, addTask }: Props<T>) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(() => true);
  };

  const handleBlur = () => {
    setIsActive(() => false);
  };

  if (!visible) return <></>;

  return (
    <Paper sx={style}>
      <Grid container columnSpacing={1} rowSpacing={1}>
        {tasks.map((value, index) => (
          <Grid item key={index}>
            <Task task={value} />
          </Grid>
        ))}
        <Grid item>
          <Card sx={cardStyle}>
            {isActive ? (
              <TaskForm onBlur={handleBlur} onSubmit={addTask} />
            ) : (
              <Button onClick={handleClick} sx={buttonStyle}>
                <AddOutlined />
              </Button>
            )}
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

const cardStyle = { minWidth: '10vw', minHeight: '100%' };

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '31vw',
  padding: '0.5vw',
  marginTop: '2.5vh',
};

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '12.5vh',
};

export default TaskList;
