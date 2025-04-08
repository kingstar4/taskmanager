import { PriorityLabelProp, priorityColor } from "@/utils/types";


const PriorityLabel = ({ priority}: PriorityLabelProp) => {
  const colors = priorityColor[priority] || { bgColor: "bg-gray-300", textColor: "text-gray-700" };
  return (
    
      <div className={` m-2 ml-0 rounded-full px-3 py-1 ${colors.bgColor} text-center ${colors.textColor}`}>{priority}</div>
   
  );
};

export default PriorityLabel;
