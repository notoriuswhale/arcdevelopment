
import * as React from "react";

function Iphone(props) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M335.7 32H177.1C158.8 32 144 46.6 144 64.9v381c0 18.4 14.8 34.1 33.1 34.1h158.5c18.3 0 32.3-15.7 32.3-34.1v-381C368 46.6 354 32 335.7 32zM241 55h30c2.2 0 4 1.8 4 4s-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4s1.8-4 4-4zm15.5 410c-9.6 0-17.4-7.8-17.4-17.4s7.8-17.4 17.4-17.4c9.6 0 17.4 7.8 17.4 17.4s-7.8 17.4-17.4 17.4zm93.5-49H162c-1.1 0-2-.9-2-2V85c0-1.1.9-2 2-2h188c1.1 0 2 .9 2 2v329c0 1.1-.9 2-2 2z"
        fill="#0b72b9"
      />
    </svg>
  );
}

const MemoIphone = React.memo(Iphone);
export default MemoIphone;