import React, { PureComponent } from 'react';
import './NewNetworkStatus.css';
import { Detector } from 'react-detect-offline';

class NewNetworkStatus extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            previousState: window.navigator.onLine,
            isOnline: window.navigator.onLine
        }
        this.handleNetworkChange = this.handleNetworkChange.bind(this);
    }

    handleNetworkChange(online) {
        
        if (online) {
            this.setState({
                previousState: false,
                isOnline: true
            });
        } else {
            this.setState({
                previousState: true,
                isOnline: false
            });
        }
    }

    render() {
    
        return (
            <Detector
                polling={
                    {
                        enabled: true,
                        url: "https://ipv4.icanhazip.com",
                        interval: 3000,
                        timeout: 3000
                    }
                }
                onChange={this.handleNetworkChange}
                render={() => (
                    this.state.isOnline === this.state.previousState 
                        ? " " 
                        : this.state.isOnline 
                            ?  <div className="online base-class">You are currently online</div>
                            : <div className="offline base-class">You are currently offline</div>
                )}
            />
        );
    }
}

export default NewNetworkStatus;