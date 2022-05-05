import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";



import React from "react";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cancellation from "./components/pages/cancellationpolicy/Cancellation";
import Privacy from "./components/pages/privacy/Privacy";
import Faqs from "./components/pages/faqs/faqs";

function App() {
  return (
    <div className="App">
  <BrowserRouter  basename="parknb">
    <Routes>
      <Route path = "/login" element={<Login />} />
      <Route path="/home/*" element={<Home />}>
       <Route path="cancel" element={<Cancellation />}/>
       <Route path="privacy" element={<Privacy />}/>
       <Route path="faqs" element={<Faqs />}/>
       
      </Route>
     
      
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
