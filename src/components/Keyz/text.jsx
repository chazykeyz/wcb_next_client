import React, { useEffect, useState } from "react";
import "./custom.css";

const KeyzText = ({
  text,
  positionUp,
  trackingDown,
  positionLeft,
  scaleDown,
  scaleDownBounce,
  scaleUp,
  scaleUpBounce,
  style,
  width,
  bounce,
  state,
  delay,
  bodyStyle,
}) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setAnimate(state);
      }, delay);
    } else {
      setAnimate(state);
    }
  }, [state, delay]);

  return (
    <div className={` flex ${bodyStyle}`}>
      {positionUp &&
        [...text].map((char, index) => (
          <p
            key={index}
            className={`${style} translate-y-[20px] opacity-0 ${
              animate ? "positionUp " : ""
            }    font-bold `}
            style={{
              "--index": index,
              whiteSpace: "pre",
              "--bounce": bounce ? bounce : "-3px",
            }}
          >
            {char}
          </p>
        ))}

      {positionLeft &&
        text.split("").map((char, index) => (
          <div
            key={index}
            className={`translate-x-[100px] opacity-0 ${
              animate ? "positionLeft " : ""
            }    font-bold ${style} `}
            style={{
              "--index": index,
              whiteSpace: "pre",
              "--bounce": bounce ? bounce : "-3px",
            }}
          >
            {char}
          </div>
        ))}

      {trackingDown && (
        <div
          className={`overflow-hidden text-center   ${width} flex justify-center`}
        >
          {text.split("").map((char, index) => (
            <div
              key={index}
              className={` translate-y-[40px] tracking-[-.5em] opacity-0 ${
                animate ? "tracking " : ""
              }    font-bold ${style}`}
              style={{ "--i": index, whiteSpace: "pre" }}
            >
              {char}
            </div>
          ))}
        </div>
      )}

      {scaleDownBounce &&
        text.split("").map((char, index) => (
          <div
            key={index}
            className={`  opacity-0 ${
              animate ? "scaleDown " : ""
            }    font-bold ${style}`}
            style={{
              "--index": index,
              whiteSpace: "pre",
            }}
          >
            {char}
          </div>
        ))}
      {scaleUpBounce &&
        text.split("").map((char, index) => (
          <div
            key={index}
            className={`  opacity-0 ${
              animate ? "scaleUp " : ""
            }    font-bold ${style}`}
            style={{
              "--index": index,
              whiteSpace: "pre",
            }}
          >
            {char}
          </div>
        ))}
      {scaleDown &&
        text.split("").map((char, index) => (
          <div
            key={index}
            className={`  ${
              animate ? "scale-100 opacity-100 " : "scale-150 opacity-0"
            } transition-all duration-500 ease-in-out    font-bold ${style}  `}
            style={{ transitionDelay: `${index * 0.05}s`, whiteSpace: "pre" }}
          >
            {char}
          </div>
        ))}
      {scaleUp &&
        text.split("").map((char, index) => (
          <div
            key={index}
            className={`   ${
              animate ? "scale-100 opacity-100 " : "scale-0 opacity-0"
            } transition-all duration-500 ease-in-out    font-bold ${style} `}
            style={{ transitionDelay: `${index * 0.05}s`, whiteSpace: "pre" }}
          >
            {char}
          </div>
        ))}
    </div>
  );
};

export default KeyzText;
