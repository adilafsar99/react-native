import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppRouter from './config/Router'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Rampart One',
      'cursive',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme} >
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
