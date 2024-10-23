import { useState } from 'react'

function App() {
  const themes = ["black", "orange", "purple", "green", "blue"]
  const [theme, setTheme ] = useState(themes[0])

  return (
    <>
      <div className='theme-purple text-secondary'>hello woong</div>
    </>
  )
}

export default App
