import LeftSideBar from "./lsidebar/LeftSideBar"
import Products from "./products"
// import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (  
    <>
    <div className="flex bg-black ">
   
      <LeftSideBar/>
      <Products/>
    </div>
    </>
)
}


export default App  