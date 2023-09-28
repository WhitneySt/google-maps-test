import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { signInWithPopup } from 'firebase/auth'
import { auth, facebook } from './firebase/firebaseConfig'
import Maps from './maps'
import StreetViewMap from './steethViewMap'



function App() {
  const [count, setCount] = useState(0);



  const loginFacebook = async () => {
    console.log('Inicio de sesión con Facebook');


    try {
      const response = await signInWithPopup(auth, facebook);
      console.log(response);
      alert('Inicio de sesión exitoso', user.displayName);
    } catch (error) {
      alert('Hubo un error', error);
      console.log(error);
    }
  }



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Maps />
      <StreetViewMap />

      {/* <img style={{ width: 50, height: 50, cursor: 'pointer' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="facebook"
        onClick={loginFacebook}
      /> */}
    </>
  )
}

export default App
