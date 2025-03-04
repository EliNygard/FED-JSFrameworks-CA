import './App.css'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Routes>
      <Route path='/'>
        <Route index></Route>
        <Route path='product:id'></Route>
        <Route path='cart'></Route>
        <Route path='checkout'></Route>
        <Route path='checkout-success'></Route>
        <Route path='contact'></Route>
        <Route path='*'></Route>
      </Route>
    </Routes>
    </>
  )
}

export default App
