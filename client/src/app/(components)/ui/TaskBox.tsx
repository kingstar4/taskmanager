import { MessageSquareMore, MoreVertical } from "lucide-react";
import PriorityLabel from "@/app/(components)/ui/PriorityLabel";
import TaskLabel from "@/app/(components)/ui/TaskLabel";
import Image from "next/image";
import { TaskBoxProps } from "@/utils/types";
import ImgComponent from "@/app/(components)/ui/ImgComponent";

const TaskBox = ({
  description,
  taskNumber,
  startDate,
  endDate,
  priority,
  src,
  tasklabel,
  tasklabel2
}: TaskBoxProps) => {
  return (
    <div className="flex h-auto w-auto flex-col items-center rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-200 ease-in dark:bg-dark-secondary dark:text-white">
      {src && (
        <div className="">
          <ImgComponent
            alt="pic1"
            src={src}
            width={400}
            height={300}
            imgClass="rounded-t-lg w-full h-auto"
          />
        </div>
      )}
      <div className="flex flex-col p-5 w-full">
        {/* Priority Label, Tasklabel and Ellipse icon(More vertical) */}
        <div className="flex items-center justify-between pb-3 w-auto">
          <div className="flex flex-row flex-wrap w-auto">
              <PriorityLabel priority={priority} />
              <TaskLabel tasklabel={tasklabel} />
              {tasklabel2 && (<TaskLabel tasklabel={tasklabel2} />)}
          </div>
          <span>
            <MoreVertical className="h-5 w-5 cursor-pointer text-gray-400 hover:text-white" />
          </span>
        </div>

        {/* Task Section */}
        <div className="flex flex-col border-b-2 border-[#3f4142] pb-3">
          <span className="flex items-start">
            <h3 className="mr-1 font-bold">Task </h3>
            <h3 className="font-bold"> {taskNumber}</h3>
          </span>

          <span className="pt-3">
            <p className="text-[#3f4142]">
              {startDate} - {endDate}
            </p>
            <p className="text-[#3f4142]">{description}</p>
          </span>
        </div>

        <div className="flex w-full flex-row items-center justify-between pt-5">
          <div className="flex">
            <Image
                alt="pic1"
                src="/images/p1.jpeg"
                width={100}
                height={100}
                className="h-7 w-7 rounded-full"
            />
            <Image
                alt="pic1"
                src="/images/p2.jpeg"
                width={100}
                height={100}
                className="h-7 w-7 rounded-full"
            />
          </div>
          <div className="flex text-[#3f4142]">
            <MessageSquareMore className="ml-2 mr-2 h-5 w-5" />
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
