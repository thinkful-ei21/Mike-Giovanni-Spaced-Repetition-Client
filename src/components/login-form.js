import React from 'react';
import './login-form.css'
import {Field, reduxForm, focus} from 'redux-form';
import {Link} from 'react-router-dom';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="login-form"
                aria-live="polite"
                aria-atomic="true"
                role="complementary"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <h2>Login</h2>
                {error}
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    label="Username"
                    id="username"
                    aria-label="Username"
                    aria-required="true"
                    validate={[required, nonEmpty]}
                    autoFocus
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    label="Password"
                    aria-label="Password"
                    aria-required="true"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                <br />or
                <Link to="/register" className="register-link"><h2 className="register-text">Register</h2></Link>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
