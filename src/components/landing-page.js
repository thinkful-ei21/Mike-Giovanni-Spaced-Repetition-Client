import React from 'react';
import './landing-page.css'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home" role="complementary" aria-live="polite" aria-atomic="true">
        <p>A spaced-repetition app for associating famous monuments with the countries they are in and for inspiring future travel. <br /><br />Match the correct country name to each image. Countries you identify accurately show up less often.</p>
        <LoginForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
