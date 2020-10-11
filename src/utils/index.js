import React from 'react';

const useThemeState = (defaultValue, key) => {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      let theme = localStorage.getItem(key);
      setValue(theme? theme :  defaultValue);
    }
  }, [key, value]);

  return [value, setValue];
};

export { useThemeState };
