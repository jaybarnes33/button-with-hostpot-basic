import styles from "./Hotspot.module.css";
import PulsingCircle from "./PulsingCircle";

const Hotspot = ({ x, y, onClick }) => {
  return (
    <>
      <div className={`hotspot`}>
        <PulsingCircle onClick={onClick} />
      </div>
      <style jsx>{`
        .hotspot {
          position: absolute;
          top: ${y}%;
          right: ${x}%;

          z-index: 1;
        }
      `}</style>
    </>
  );
};

export default Hotspot;
