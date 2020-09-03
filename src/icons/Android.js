import * as React from "react";

function Android(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M358.9 32H153.1C130.5 32 112 50.3 112 72.7v366.5c0 22.4 18.5 40.7 41.1 40.7h205.7c22.6 0 41.1-18.3 41.1-40.7V72.7c.1-22.4-18.4-40.7-41-40.7zm5.1 368H148V112h216v288z"
        fill="#0b72b9"
      />
    </svg>
  );
}

const MemoAndroid = React.memo(Android);
export default MemoAndroid;
