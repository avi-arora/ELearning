import React, { Component } from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Login from './LoginComponent';
import Register from './RegisterComponent';
import Landing from './LandingComponent';


const mapStateToProps = state => {
    return {
     //write redux mapping here
    }

}


class Main extends Component {
    constructor(props){
        super(props);
    }

    render(){

        const LoginPage = () => {
            return <Login />
        }

        const RegisterPage = () => {
            return <Register />
        }

        const LandingPage = () => {
            return <Landing />
        }


        return (
            <>
            <Header />
            <Switch>
                <Route path="/index" component={LandingPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Redirect to="/index" />
            </Switch>
            <Footer />
            </>
        )
    }
}
export default Main;
//export default withRouter((connect(mapStateToProps)(Main)));