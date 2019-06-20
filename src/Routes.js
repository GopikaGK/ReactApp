import React from "react";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Login from "./Components/Login"

export default() => {
    return(
        <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Home}/> */}
         <Route path="/" component={Login}/>
        </Switch>
        </BrowserRouter>
    )

}