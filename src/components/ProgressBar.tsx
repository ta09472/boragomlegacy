import { Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/system';

interface Props {
  rate: number;
}

function ProgressBar({ rate }: Props) {
  return (
    <Box sx={style}>
      <LinearProgress variant="determinate" value={rate} />
      <Typography
        color="text.secondary"
        variant="caption"
      >{`${rate}%`}</Typography>
    </Box>
  );
}

const style = {
  width: '40vw',
};

export default ProgressBar;
