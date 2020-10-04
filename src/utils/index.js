import React from 'react'

const useThemeState = (defaultValue, key) => {
  const [value, setValue] = React.useState(() => {
    const theme = window.localStorage.getItem(key)

    return theme !== null ? JSON.parse(theme) : defaultValue
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export { useThemeState }
