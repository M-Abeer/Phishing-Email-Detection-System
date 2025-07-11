import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00b894',
    accent: '#00cec9',
    background: '#121212',
    surface: '#1e1e1e',
    text: '#ffffff',
    error: '#ff5252',
    warning: '#ffb142',
    success: '#2ed573',
    card: '#252525',
    border: '#333333',
  },
  roundness: 8,
};