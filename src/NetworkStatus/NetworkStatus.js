import React, { PureComponent } from "react";
import "./NetworkStatus.css";
import { Detector } from "react-detect-offline";

class NetworkStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: window.navigator.onLine ? null : window.navigator.onLine
    };
    this.handleNetworkChange = this.handleNetworkChange.bind(this);
  }

  handleNetworkChange(isOnline) {
    this.setState({
      isOnline
    });
  }

  render() {
    return (
      <Detector
        polling={{
          enabled: true,
          url: "https://ipv4.icanhazip.com",
          interval: 5000,
          timeout: 5000
        }}
        onChange={this.handleNetworkChange}
        render={() =>
          this.state.isOnline === null ? (
            " "
          ) : this.state.isOnline ? (
            <>
              <div className="offline-up baseClass">
                You are currently offline
              </div>
              <div className="online baseClass">You are currently online</div>
            </>
          ) : (
            <div className="offline-down baseClass">
              You are currently offline
            </div>
          )
        }
      />
    );
  }
}

export default NetworkStatus;
