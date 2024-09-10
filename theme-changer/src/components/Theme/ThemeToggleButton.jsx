// ThemeToggleButton.js
import { useState } from 'react';
import styles from './Theme.module.scss';

const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); //! er en logisk operator, der bruges til at negere en værdi. Det betyder, at hvis en værdi er "truthy" (sand), vil ! gøre den til "falsy" (falsk), og omvendt.
    document.body.classList.toggle(styles.darkTheme, !isDarkMode);
  };

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};
//? bruges til at evaluere en betingelse og returnere én værdi, hvis betingelsen er sand, og en anden, hvis den er falsk. Eller Valgfri kædning.
export default ThemeToggleButton;
