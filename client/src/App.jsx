import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/Main"
import { AuthProvider } from "./context/AuthProvider"
import './App.css'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header/>
          <Main/>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
