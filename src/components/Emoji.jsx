import { useEffect, useRef } from "react";
import twemoji from "twemoji";

export default function Emoji({ value, className = "emoji" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!value) {
      return;
    }

    if (ref.current) {
      twemoji.parse(ref.current, {
        folder: "svg",
        ext: ".svg",
      });
    }
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
