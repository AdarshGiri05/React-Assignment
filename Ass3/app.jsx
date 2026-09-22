
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Render from './assirender'

function App() {
  

  return (
    <>
      {/* <Assi/> */}
      <Render/>
    </>
  )
}

export default App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)