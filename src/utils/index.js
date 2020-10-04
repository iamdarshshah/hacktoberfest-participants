import React from 'react'

const useThemeState = (defaultValue, key) => {
  const [value, setValue] = React.useState(() => {
    let theme = defaultValue
    if (typeof window !== 'undefined') {
      theme = localStorage.getItem(key)
      return theme ? JSON.parse(theme) : defaultValue
    }
    return
  })

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value, setValue]
}

export { useThemeState }
