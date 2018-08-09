import React from 'react';
import './dashboard.css'
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { fetchCard } from '../actions/cards';
import { sendAnswer, clearAnswer } from '../actions/answer';

export class Dashboard extends React.Component {

    componentDidMount() {
        this.getNextCard();
    }

    getNextCard() {
        this.props.dispatch(fetchCard());
        this.props.dispatch(clearAnswer());
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
            <img className="card-image" 
            src={this.props.card} 
            alt={this.props.card.imageUrls}/>
        </div>
        )}
    }

    showUI() {
        if (this.props.result !== '' && this.props.answer) { 
            console.log(this.props)
            return (
            <div className="result ">
                {this.showResult()}
                </div>
            )
        } else {
            return (
                <form 
                className="submit-form" 
                onSubmit={e => this.submitGuess(e)}
                aria-label="enter guess">
                <input 
                    type="text"
                    className="location-input"
                    required="required"
                    placeholder="location"
                    aria-label="submit button"
                    ref={input => (this.input = input)}
                    autoFocus
                />
                <button 
                    className="answer-button" type="submit"
                    >Submit</button>
                </form>
            )
        }
    }

    showResult() {
        console.log(this.props.answer)
        let answer = this.props.answer.charAt(0).toUpperCase()
            + this.props.answer.slice(1);

        if(this.props.result === false) {
            return (
                <div className="result incorrect">
                    {console.log(this.props.result)}
                    The correct answer is {answer}
                    <button onClick={e => this.getNextCard()}>Next</button>
                </div>
            )
        } else {
            return (
                <div className="result correct">
                    {answer} is correct!
                    <button onClick={e => this.getNextCard()}>Next</button>
                </div>
            )
        }
    }

    render() {
        return (
            <main className="dashboard" role="main">
                <div className="dashboard-username">
                    Welcome {this.props.username}!
                </div>
                <div className="card">
                    {this.renderCard()}
                </div>
                <div className="ui">
                    {this.showUI()}
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    // const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        card: state.cards.card,
        answer: state.answer.answer,
        result: state.answer.result
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
