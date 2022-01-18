import React from "react";
import Hotspot from "../Hotspot";

const index = ({ color, hotspot, animated, action, children }) => {
  return (
    <>
      <div className="btn-wrapper">
        <button onClick={() => alert("hello")}>{children}</button>

        {hotspot && <Hotspot x={0} y={0} onClick={action} />}
      </div>
      <style jsx>{`
        .btn-wrapper {
          position: relative;
        }

        button {
          position: relative;
          background-color: #007bff;
          border-radius: 5px;
          border: #007bff;
          padding: 5px 25px;
          color: #f4f4f4;
          transition: transform ease-in 5s;
          cursor: pointer;
        }

        button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};

export default index;
