import {
  Card,
  Button,
  Typography,
  CardContent,
  CardActions,
} from '@mui/material';

interface Props<T> {
  task: T;
}

function Task<T>({ task }: Props<T>) {
  const handleClick = () => {};

  return (
    <Card sx={{ minWidth: '10vw' }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          color={task.isDone ? '#00e676' : '#bdbdbd'}
        >
          {task.title}
        </Typography>
        <Typography variant="body2">{task.desc}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={handleClick}
          variant={task.isDone ? 'contained' : 'outlined'}
          size="small"
        >
          {task.isDone ? 'already done' : 'not done'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Task;
