import React from 'react';
import './dashboard.css'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchCard } from '../actions/cards';
import { sendAnswer } from '../actions/answer';

export class Dashboard extends React.Component {

    componentDidMount() {
        this.getNextCard();
    }

    getNextCard() {
        this.props.dispatch(fetchCard());
    }

    submitGuess(e) {
        e.preventDefault();
        console.log(this.input.value)
        this.props.dispatch(sendAnswer(this.input.value))
    }

    renderCard() {
    if(this.props.card !== undefined) {
        return (
        <div className="visible-card">
            <img className="card-image" src={this.props.card}/>
        </div>
        )}
    }

    showResult() {
        return (
            <div className="result">
                {this.props.result}
                {this.props.answer}
            </div>
        )}

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
                    <button 
                        className="answer-button" type="submit"
                        >Submit</button>
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
        card: state.cards.card,
        answer: state.answer.answer,
        result: state.answer.result
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
