import React, {Component} from 'react';
import WelcomeInfo from '../../components/WelcomeInfo/withLogo'
import {APP_STATES} from "./config";
import Button from '../../components/Button';
import {Link} from "react-router-dom";
import './style.scss'

class Details extends Component {

    state = {
        appState: APP_STATES.LOADING,
        personDetails: {},
        personId: this.props.match.params.id,
    };

    componentDidMount() {
        this.loadPerson();
    }

    loadPerson = () => {
        this.setState({
            appState: APP_STATES.LOADING
        });

        fetch('http://localhost:8000/people/' + this.state.personId)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 404) {
                    this.props.history.push('/404');
                } else {
                    throw new Error('Error!');
                }
            })
            .then(response => {
                this.setState({
                    appState: APP_STATES.RESULTS,
                    personDetails: response
                })
            })
            .catch(error => {
                this.setState({
                    appState: APP_STATES.ERROR,
                })
            })
    };
    goBack = () => {
        this.props.history.push('/people');
    };

    removePerson = () => {
        fetch('http://localhost:8000/people/' + this.state.personId, {
            method: "DELETE"
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 404) {
                    this.props.history.push('/404');
                } else {
                    throw new Error('Error!');
                }
            })
            .then(response => {
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({
                    appState: APP_STATES.ERROR,
                })
            })
    };

    render() {
        const {
            appState,
            personDetails,
            personId
        } = this.state;
        return (
            <div className="details-page background-full-screen">
                <WelcomeInfo paragraph='Person Details'/>
                {
                    appState === APP_STATES.LOADING &&
                    <p>Loading, please wait.</p>
                }
                {
                    appState === APP_STATES.ERROR &&
                    <p>Error !
                        <button onClick={this.goBack}> Return</button>
                    </p>
                }
                {
                    appState === APP_STATES.RESULTS &&
                    <div className='container'>
                        <p className="person-detail">Name: {personDetails.name}</p>
                        <p className="person-detail">Mass: {personDetails.mass}</p>
                        <p className="person-detail">Height: {personDetails.height}</p>
                        <p className="person-detail">Birth year: {personDetails.birth_year}</p>
                        <Link to={'/people/' + personId + '/edit'}
                              className="btn edit-btn">
                            Edit this person
                        </Link>

                        <Button text="delete this person" action={this.removePerson}/>
                        <Button text="return" action={this.goBack} />
                    </div>
                }
            </div>
        )
    }
}

export default Details;