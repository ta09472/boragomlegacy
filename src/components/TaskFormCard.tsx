import { Card, Button } from '@mui/material';
import TaskForm from './Form';
import AddOutlined from '@mui/icons-material/AddOutlined';
import { TaskType } from '../interface/task';

interface Props {
  isActive: boolean;
  onClick: () => void;
  onSubmit: (value: TaskType) => void;
}

function TaskFormCard({ onSubmit, isActive, onClick }: Props) {
  if (!isActive)
    return (
      <Card sx={cardStyle}>
        <Button onClick={onClick} sx={buttonStyle}>
          <AddOutlined />
        </Button>
      </Card>
    );

  return (
    <Card sx={cardStyle}>
      <TaskForm onSubmit={onSubmit} />
    </Card>
  );
}

export default TaskFormCard;

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '12.5vh',
};

const cardStyle = { minWidth: '10vw', minHeight: '100%' };
