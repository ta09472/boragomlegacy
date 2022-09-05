import { Paper, Card, Grid, Button } from '@mui/material';
import Task from './Task';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

interface Props<T> {
  visible: boolean;
  tasks: T[];
}

function TaskList<T>({ visible, tasks }: Props<T>) {
  const handleClick = () => {
    console.log('hello');
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
            <Button sx={buttonStyle} onClick={handleClick}>
              <AddOutlinedIcon />
            </Button>
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
