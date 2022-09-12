import { Grid } from '@mui/material';
import { TaskType } from '../interface/task';
import Task from './Task';

interface Props {
  tasks: TaskType[];
}

function TaskList({ tasks }: Props) {
  return tasks.map((value, index) => (
    <Grid item key={index}>
      <Task task={value} />
    </Grid>
  ));
}

export default TaskList;
