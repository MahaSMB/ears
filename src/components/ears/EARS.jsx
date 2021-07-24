import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
//import AuthenticationService from './AuthenticationService.jsx'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListApplicantsComponent from './ListApplicantsComponent.jsx'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'

class EARS extends Component {
    render() {
        return (
            <div className="EARS">
                <Router>
                    <>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/listApplicants" component={ListApplicantsComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent />
                    </>
                </Router>
                {/*<LoginComponent />
                <WelcomeComponent />*/}
            </div>
        )
    }
}

export default EARS