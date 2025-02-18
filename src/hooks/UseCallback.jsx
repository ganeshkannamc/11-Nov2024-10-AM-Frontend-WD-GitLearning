import { memo } from "react";

const UseCallback = ({ value,count,manageCount }) => {
  console.log("UseCallback - loading");

  return (
    <div>
      <p>UseCallback - {value}</p>
      <button onClick={manageCount}>Incre - {count}</button>
    </div>
  );
};

export default memo(UseCallback);
