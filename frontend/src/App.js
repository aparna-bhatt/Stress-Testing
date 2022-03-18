import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Code/main";

function App() {

    return (
        <div>
           <Router>
      <Routes>
      <Route path="/" exact element={<Main />}>
      </Route>
      </Routes>
    </Router>
   
        </div>
    );
}
export default App;