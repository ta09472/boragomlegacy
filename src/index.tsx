import { ThemeProvider } from '@mui/system';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import theme from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
