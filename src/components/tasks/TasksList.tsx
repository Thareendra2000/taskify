import React from "react";
import { useGetAllTasksQuery } from "./../../graphql/getAllTasks.generated";
import Task from "./Task";
import Loading from "../loading/Loading";
import { useNavigate } from "react-router-dom";

const TasksList: React.FC = () => {
  const { data: tasks, isLoading, isError, refetch } = useGetAllTasksQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }
  console.log(tasks);

  if (isError || !tasks) {
    return <div>Error fetching tasks.</div>;
  }

  return (
    <div className="h-full mb-12">
      <div className="flex justify-end">
        <button
          className="p-2 px-5 my-5 mr-[150px] w-auto rounded-md bg-gray-900 text-white font-medium "
          onClick={() => navigate("createTask")}
        >
          Add Task
        </button>
      </div>
      <div className="h-[70vh] flex flex-col">
        <div className="flex-grow overflow-y-auto">
          <Task tasks={tasks?.getAllTasks || []} refetchTasks={refetch} />
        </div>
      </div>
    </div>
  );
};

export default TasksList;
