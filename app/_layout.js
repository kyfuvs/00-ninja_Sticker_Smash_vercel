// Project/app/_layout.js
import { ThemeProvider } from '../dark_mode/context/themeContext';
import AppProvider from '../app/appContext/globalContext'
import Layout_stack from './layout_stack';

export default function RootLayout() {
  return (
    
      <ThemeProvider>
        <AppProvider>
          <Layout_stack />
        </AppProvider>
      </ThemeProvider>
 
  );
}
