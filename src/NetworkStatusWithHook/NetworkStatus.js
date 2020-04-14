import React, { useState, memo } from "react";
import "./NetworkStatus.css";
import { Detector } from "react-detect-offline";

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(
    window.navigator.onLine ? null : window.navigator.onLine
  );

  const handleNetworkChange = isOnline => {
    setIsOnline(isOnline);
  };

  return (
    <Detector
      polling={{
        enabled: true,
        url: "https://ipv4.icanhazip.com",
        interval: 5000,
        timeout: 5000
      }}
      onChange={handleNetworkChange}
      render={() =>
        isOnline === null ? (
          " "
        ) : isOnline ? (
          <div className="online-up baseClass">You are currently online</div>
        ) : (
          <div className="offline-down baseClass">
            You are currently offline
          </div>
        )
      }
    />
  );
}

export default memo(NetworkStatus);
