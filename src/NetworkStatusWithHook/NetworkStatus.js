import React, { useState, memo } from "react";
import "./NetworkStatus.css";
import { Detector } from "react-detect-offline";
import classnames from "classnames";

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
          <div
            className={classnames(
              "snackbar__container--up",
              "snackbar__container"
            )}
          >
            <div className={classnames("snackbar__online", "snackbar")}>
              You are currently online
            </div>
          </div>
        ) : (
          <div
            className={classnames(
              "snackbar__container--down",
              "snackbar__container"
            )}
          >
            <div className={classnames("snackbar__offline", "snackbar")}>
              You are currently offline
            </div>
          </div>
        )
      }
    />
  );
}

export default memo(NetworkStatus);
