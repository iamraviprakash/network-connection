import React, { Component } from 'react';
import './NetworkStatus.css';

class NetworkStatus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOnline: true
        }
        this.handleNetworkError = this.handleNetworkError.bind(this);
    }

    componentDidMount() {
        // Add event handler which triggers on network error
        document.addEventListener("network-error", this.handleNetworkError)
    }

    handleNetworkError() {
        this.setState({
            isOnline: false
        });

        // Reset the state after the offline notification shows up
        setTimeout(() => {
            this.setState({
                isOnline: true
            })
        }, 3000);
    }

    render() {
        if (!this.state.isOnline) {
            return (
                <div className="offline">
                    You are currently offline.
                </div>
            );
        } else {
            return null;
        }
    }
}

export default NetworkStatus;