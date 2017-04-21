import './login.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux'
import { loginSuccess, loginUser, logoutUser } from '../actions/login';


interface IAppProps extends React.Props<any> {
  session: any;
  login: () => void;
  logout: () => void;
};

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

class Login extends Component {

    render() {
        const dispatch = this.props.dispatch;

        return (
            <div className="container">
                <form className="form-signin" onSubmit={e => {
                    e.preventDefault();
                    dispatch(loginSuccess());
                    dispatch(push('/dashboard'));
                }}>
                    <h2 className="form-signin-heading"> Please sign in</h2>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                           autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"/>
                            Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>

            </div>
        )
    }
}

export default connect()(Login);
