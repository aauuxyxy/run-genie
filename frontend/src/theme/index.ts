import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4CAF50', // ランニングアプリを意識したアクティブな緑
    secondary: '#03A9F4',
    background: '#F5F5F5',
  },
};
