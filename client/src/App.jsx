import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header/>
          <Main/>
          <Footer/>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
