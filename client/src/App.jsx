import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import Main from "./components/Main"
import "./styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Main/>
    </BrowserRouter>
    </>
  )
}

export default App
