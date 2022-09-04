import { Paper, Grid } from '@mui/material';
import Task from './Task';

interface Props<T> {
  visible: boolean;
  tasks: T[];
}

function TaskList<T>({ visible, tasks }: Props<T>) {
  if (!visible) return <></>;

  return (
    <Paper sx={style}>
      <Grid container columnSpacing={1} rowSpacing={1}>
        {tasks.map((value, index) => (
          <Grid item key={index}>
            <Task task={value} />
          </Grid>
        ))}
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
};

export default TaskList;
