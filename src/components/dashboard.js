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
        // this.showResult()
    }

    renderCard() {
    if(this.props.card !== undefined) {
        return (
        <div className="visible-card">
            <img className="card-image" 
            src={this.props.card} 
            alt={this.props.answer}/>
        </div>
        )}
    }

    showResult() {
        let answer = this.props.answer.charAt(0).toUpperCase() + this.props.answer.slice(1);

        if(this.props.result === false) {
            return (
                <div className="result">
                    {console.log(this.props.result)}
                    {answer} is incorrect. Please try again
                    {/* {this.getNextCard()} */}
                </div>
            )
        } else {
            return (
                <div className="result">
                    {console.log(this.props.result)}
                    {answer} is correct!
                    {/* {this.getNextCard()} */}
                </div>
            )
        }
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
                <div className="result">
                    {this.showResult()}
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
    // const { currentUser } = state.auth;
    return {
        username: state.auth.currentUser.username,
        card: state.cards.card,
        answer: state.answer.answer,
        result: state.answer.result
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
