import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' //이게 가능하려면 app,.jsxㅔㅇ서 export가 되어있어야함. 
// import './index.css'
import './helloworld.css'
createRoot(document.getElementById('root')).render(

    <App />

)
