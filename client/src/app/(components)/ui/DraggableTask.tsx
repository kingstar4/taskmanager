import React from "react";
import { useDraggable } from "@dnd-kit/core";
import TaskBox from "@/app/(components)/ui/TaskBox";
import { TaskBoxProps} from "@/utils/types";

const DraggableTask: React.FC<{ task: TaskBoxProps }> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
      }}
      className="cursor-grab pb-5 w-auto"
    >
      <TaskBox {...task} />
    </div>
  );
};

export default DraggableTask;
