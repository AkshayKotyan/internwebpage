import React from "react";
import { Route , Switch , Redirect} from "react-router";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Navbar from "./Navbar";
import SingUp from "./SingUp";
// import img1 from "./images/illustration1.jpg";

const Main = () => {
    return (
        <>
        <header>
            <Navbar />
            <hr/>
            <switch>
                <Route exact path="/" />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SingUp} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Redirect to="/" />
            </switch>
            <section>
                {/* <img src={img1} alternate="img1"/> */}
            </section>
        </header>
        </>
    );
};


export default Main;
