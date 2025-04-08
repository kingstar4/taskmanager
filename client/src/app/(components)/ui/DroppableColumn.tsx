import React from "react";
import { useDroppable } from "@dnd-kit/core";

const DroppableColumn: React.FC<{ status: string; children: React.ReactNode }> = ({ status, children }) => {
  const { setNodeRef } = useDroppable({ id: status });

  return (
    <div
      ref={setNodeRef}
      className="w-auto"
    >
      {children}
    </div>
  );
};

export default DroppableColumn;
