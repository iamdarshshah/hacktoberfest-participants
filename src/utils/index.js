import React from 'react'

const useThemeState = (defaultValue, key) => {
  const [value, setValue] = React.useState(() => {
    const theme = localStorage.getItem(key)

    return theme !== null ? JSON.parse(theme) : defaultValue
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export { useThemeState }
