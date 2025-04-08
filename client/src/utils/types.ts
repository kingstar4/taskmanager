
export type Priority = "Urgent" | "High" | "Medium";
export type StatusType = "To Do" | "Work In Progress" | "Under Review" | "Completed"; 

export interface MyProjectStatus{
  id:number;
  text: StatusType;
  color: string;
}

export const priorityColor: Record<Priority, { bgColor: string; textColor: string }> = {
  Urgent: { bgColor: "bg-red-300", textColor: "text-red-700" },
  High: { bgColor: "bg-yellow-300", textColor: "text-yellow-700" },
  Medium: { bgColor: "bg-green-300", textColor: "text-green-700" },
}


export interface PriorityLabelProp {
  priority: Priority;
}

export interface ImgComponentProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    imgClass: string;
}

export interface TaskBoxProps {
    id: string;
    description?: string;
    startDate: string;
    endDate: string;
    taskNumber: string;
    priority: Priority;
    src?: string;
    status: StatusType;
    assignedTo?: string;
    tasklabel: string;
    tasklabel2?: string;
  }
  
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
