import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Login from "./Login";
import Signin from "./Signin";
//import Array from "./Array";
//import Modal from "./Modal";
//import IntegratedTL from "./IntegratedTL";
//import Tasklist from "./Tasklist";


export default function Navigation() {
    return <>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Login />}></Route> */}
                <Route path="/Signin" element={<Signin />}></Route> 
               {/* <</BrowserRouter>Route path="/Array" element={<Array />}></Route> */} 
                {/* <Route path="/Modal" element={<Modal />}></Route> */}
                {/* <Route path="/IntegratedTL" element={<IntegratedTL />}></Route>  */}
               {/* <Route path="/" element={<Tasklist />}></Route> */}


            </Routes>
        </BrowserRouter>
    </>

}