

import * as React from "react";

function Customized(props) {
  return (
    <svg id="prefix__Layer_1" viewBox="0 0 512 512" {...props}>
      <style>{".prefix__st0{fill:#0b72b9}"}</style>
      <circle className="prefix__st0" cx={144} cy={368} r={42} />
      <path
        className="prefix__st0"
        d="M367.5 272h-223C91.2 272 48 315.2 48 368.5S91.2 464 144.5 464h223c53.3 0 96.5-42.2 96.5-95.5S420.8 272 367.5 272zM144 432c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"
      />
      <circle className="prefix__st0" cx={368} cy={144} r={42} />
      <path
        className="prefix__st0"
        d="M144.5 240h223c53.3 0 96.5-42.2 96.5-95.5S420.8 48 367.5 48h-223C91.2 48 48 91.2 48 144.5S91.2 240 144.5 240zM368 80c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z"
      />
    </svg>
  );
}

const MemoCustomized = React.memo(Customized);
export default MemoCustomized;
