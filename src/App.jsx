import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import Login from './login.jsx';
import Body from './Body.jsx';
import Profile from './Profile.jsx';
function App() {

  return (
    <>  
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />}>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

      </Route>
    

    </Routes>
    </BrowserRouter>   


    </>
  )
}

export default App
