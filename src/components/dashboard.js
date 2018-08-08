import React from 'react';
import './dashboard.css'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import { fetchCard } from '../actions/cards';
// import { compareResult } from '../actions/compare-result';

export class Dashboard extends React.Component {

    componentDidMount() {
        // this.props.dispatch(fetchProtectedData());
        this.getNextCard();
    }

    getNextCard() {
        this.props.dispatch(fetchCard());
    }

    submitGuess(e) {
        e.preventDefault();
        console.log(this.input.value)
        // this.props.dispatch(compareResult(this.input.value)))
    }

    renderCard() {
    if(this.props.card !== undefined) {
        console.log(this.props.card)
        return (
        <div className="visible-card">
            <img className="card-image" src={this.props.card}/>
        </div>
        )}
    }

    render() {
        return (
            <main className="dashboard">
                <div className="dashboard-username">
                    Welcome {this.props.username}!
                </div>
                <div className="card">
                    {this.renderCard()}
                </div>
                 <form 
                    className="submit-form" 
                    onSubmit={e => this.submitGuess(e)}
                    aria-label="enter guess">
                    <input 
                        type="text"
                        placeholder="location"
                        aria-label="submit button"
                        ref={input => (this.input = input)} 
                    />
                    <button className="answer-button">Submit</button>
                </form>
            </main>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        protectedData: state.protectedData.data,
        card: state.cards.card
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
