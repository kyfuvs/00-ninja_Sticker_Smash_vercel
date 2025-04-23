// Project/dark_mode/hook/useTheme.js
import { useContext } from 'react';
import {ThemeContext} from '../context/themeContext'
import {themes} from '../constant/theme'


export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const colors = themes[theme];
  
  return {
    theme,
    toggleTheme,
    colors,
  };
}