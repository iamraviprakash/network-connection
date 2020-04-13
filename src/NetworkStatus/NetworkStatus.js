import React, { Component } from 'react';
import './NetworkStatus.css';
import { Detector } from 'react-detect-offline';

class NetworkStatus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOnline: true
        }

        this.handleNetworkError = this.handleNetworkError.bind(this);
        this.handleNetworkChange = this.handleNetworkChange.bind(this);
    }

    componentDidMount() {
        // Set initial condition
        if (window.navigator.onLine) {
            this.setState({
                isOnline: true
            });
        } else {
            this.setState({
                isOnline: false
            });
        }
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

    handleNetworkChange(online) {
        if (online) {
            this.setState({
                isOnline: true
            });
        } else {
            this.setState({
                isOnline: false
            });
        }
    }

    render() {
        console.log(`Network status re render & status = ${this.state.isOnline}`);
        return (
            <Detector
                polling={false}
                onChange={this.handleNetworkChange}
                render={() => (
                    this.state.isOnline
                    ? <div></div>
                    : <div className="offline">You are currently offline.</div>
                )}
            />
        );
    }
}

export default NetworkStatus;