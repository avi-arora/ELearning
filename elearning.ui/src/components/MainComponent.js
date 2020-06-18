import React, { Component } from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Register from './RegisterComponent';
import Landing from './LandingComponent';
import PrivateRoute from '../helpers/privateRoute';
import LoginHandler from './handlers/LoginHandler';



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


        const RegisterPage = () => {
            return <Register />
        }

        const LandingPage = () => {
            return <Landing />
        }

        const DashboardView = () => {
            return <></>
        }


        return (
            <>
            <Header />
            <Switch>
                <Route path="/home" component={LandingPage} />
                <Route path="/login" component={LoginHandler} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/dashboard" component={DashboardView} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
            </>
        )
    }
}
export default Main;
//export default withRouter((connect(mapStateToProps)(Main)));