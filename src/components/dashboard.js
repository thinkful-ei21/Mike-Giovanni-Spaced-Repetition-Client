import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import { fetchCard } from '../actions/cards';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.getNextCard();
    }

    getNextCard() {
        this.props.dispatch(fetchCard());
    }

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Welcome {this.props.username}!
                </div>
                {/* <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div> */}
                <div className="card">
                    {console.log(this.props.card)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        cards: state.cards
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
