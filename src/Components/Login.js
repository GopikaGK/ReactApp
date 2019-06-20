import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Panel, Button } from "react-bootstrap";
import "./login.css";
import details from "./login.json";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginDet : {}
        }
    }

    // componentDidMount() {
    //     const det = JSON.parse(details);
    //     debugger
    //     this.setState({loginDet: det})
    // }
    render() {
        return(
            <div className="login-wrapper">
            <div  className="Login">
            <Panel>
                <Panel.Body>
                    <h4 className="Header-2">
                        Sign in </h4>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large" >
                            <ControlLabel>
                               Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                placeholder = {"email"}
                               // value={this.state.email}
                               // onChange={this.handleChange}
                                style={{padding: "0px 10px",margin : "10px 10px 20px 43px" }} />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large" style={{position:"relative"}} >
                                        <ControlLabel>
                                           Password</ControlLabel>

                                        <FormControl
                                           // value={this.state.password}
                                            placeholder={"Enter password"}
                                          //  onChange={this.handleChange}
                                            type="password"
                                            style={{ padding: "0px 10px" ,margin : "20px"}}/>
                                    </FormGroup>
                                   
                                    <Button className = "LoaderButton" variant="secondary" size="lg" > Submit </Button>
                                   
                                    
                                </form>
                            </Panel.Body>
                        </Panel>
                        </div>
                        </div>
        )
    }
}
 