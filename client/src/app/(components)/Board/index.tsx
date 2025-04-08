"use client";
// import React, { useState } from "react";

import { closestCorners, DndContext, DragEndEvent, useSensor, useSensors, PointerSensor, TouchSensor } from "@dnd-kit/core";
import { useAppDispatch, RootState, useAppSelector } from "../../redux";
import { moveTask, setIsOpen } from "@/state";
import { StatusType } from "@/utils/types";
import ProjectStatus from "../../(components)/ui/ProjectStatus";
import DraggableTask from "../../(components)/ui/DraggableTask";
import DroppableColumn from "../../(components)/ui/DroppableColumn";
import projectStatus from "@/data/status";
import AddTask from "../ui/AddTask";


const Board = () => {
  const dispatch = useAppDispatch();
  const taskStatuses = useAppSelector((state: RootState) => state.global.tasks) || [];
  const isOpen = useAppSelector((state)=>state.global.isOpen); 
 
  const handleDrag = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    console.log("Dragged Task ID:", active.id);
    console.log("Dropped in Column ID:", over.id);

    console.log(
      "Available Statuses:",
      projectStatus.map((s) => s.text),
    );

    const newStatus = projectStatus.find((status) => status.text === over.id)
      ?.text as StatusType | undefined;

    if (newStatus) {
      console.log("New Status:", newStatus);
      dispatch(moveTask({ taskId: String(active.id), newStatus }));
    } else {
      console.log("Wrong Drop Target");
    }
  };

  

  const taskArray = (text:string) => {
    const result = taskStatuses
      .filter((task) => task.status === text) // Only tasks with matching status
      .map((task) => <DraggableTask key={task.id} task={task} />);

    console.log("I'm working", result);
    return result;
  };

  const sensor = useSensors(
    useSensor( PointerSensor, {activationConstraint: {distance: 5}}),
    useSensor(TouchSensor, {activationConstraint: {delay:250, tolerance:10}}) 
  )

  return (
    <div className="p-5 md:p-6 lg:p-8">
      <DndContext sensors={sensor} collisionDetection={closestCorners} onDragEnd={handleDrag}>
        {/* Task Status */}
        <div className="grid w-full grid-cols-1 gap-2 pt-5 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {projectStatus.map(({ id, text, color }) => (
            <DroppableColumn key={id} status={text}>
              <ProjectStatus text={text} color={color} />
              {/** FILTER TASKS BASED ON STATUS */}
              {taskStatuses.length > 0 ? (
                taskArray(text)
              ) : (
                <p className="text-gray-500">No tasks available</p>
              )}
            </DroppableColumn>
          ))}
        </div>
        
      </DndContext>

      <AddTask isOpen={isOpen} isClosed={()=>dispatch(setIsOpen(!isOpen))}/>
    </div>
  );
};

export default Board;
