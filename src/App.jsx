
import './App.css'
import { Outlet } from 'react-router-dom'
import Login from './pages/Login'


function App() {

  return (
    <>
      <Login>
        <main>
          <Outlet />
        </main>
      </Login>
      
      {/* <Dashboard/> */}
    </>
  )
}

export default App
