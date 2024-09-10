import { ThemeProvider } from './ThemeContext';


export const Wrapper = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Wrapper
