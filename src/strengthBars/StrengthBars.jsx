import styles from "./StrengthBars.module.css";
function StrengthBars({ strength }) {
  let strengthClass;
  switch (strength) {
    case "strong":
      strengthClass = styles.strong;
      break;
    case "medium":
      strengthClass = styles.medium;
      break;
    case "weak":
      strengthClass = styles.weak;
      break;
    case "veryWeak":
      strengthClass = styles.veryWeak;
      break;
    default:
      strengthClass = null;
  }
  return (
    <div className={`${styles.strengthBars}`}>
      <div className={strengthClass}></div>
      <div className={strengthClass}></div>
      <div className={strengthClass}></div>
      <div className={strengthClass}></div>
    </div>
  );
}

export default StrengthBars;
