import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";

const App = ()=>{
  return (
    <Routes>
      <Route path="/" element= {<MainLayout/>}>
        <Route path="/" element= {<Home/>}/>
        <Route path="/users" element= {<Users/>}/>
        <Route path="/about" element= {<About/>}/>
      </Route>
    </Routes>
  )
}

export default App;