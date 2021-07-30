import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.jsx'
import {withRouter} from 'react-router'
import Dropdown from './Dropdown'


class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        // const [click, setClick] = useState(false)
        // const [dropdown, setDropdown] = useState(false);


        // const handleClick = () => setClick(!click)
        // const closeMobileMenu = () => setClick(false)
        //console.log(isUserLoggedIn);
        return (
        <div>
          
          <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://algomau.ca/" className="navbar-brand">Algoma U</a></div>                             
                    {isUserLoggedIn &&  <Dropdown/>}
                    {/* <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/listApplicants">List of Applicants</Link></li>}
                        <select>
                            <option selected value="grapefruit">Home</option>
                            <option value="lime">List of Applicants</option>
                            <option value="coconut">Create A New Account/Register</option>
                            <option value="mango">Mango</option>
                        </select>
                    </ul> */}

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/profile" onClick={AuthenticationService.profile}>Profile</Link></li>}
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
            <div>
              
            </div>
        </div>
        )
    }
}


//export default HeaderComponent
export default withRouter(HeaderComponent);