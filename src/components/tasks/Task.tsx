import React, { useState } from 'react';
import { useDeleteTaskMutation } from '../../graphql/deleteTask.generated';
import { useNavigate } from 'react-router-dom';

interface TaskItem {
  id: string;
  title: string;
  description: string;
  __typename?: string;
}

interface TaskProps {
  tasks: TaskItem[];
  refetchTasks: () => void;
}

const Task: React.FC<TaskProps> = ({ tasks, refetchTasks }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const [deleteTask] = useDeleteTaskMutation();

  const handleAccordionToggle = (taskId: string) => {
    setOpenAccordion(openAccordion === taskId ? null : taskId);
  };

  const handleDeleteClick = async  (taskId: string) => {
    const selectedTask = tasks.find(task => task.id === taskId);
  if (selectedTask) {
    setId(taskId);
    setTitle(selectedTask.title);
    console.log("Task deleted!, taskid: " ,id, "title:", title, "description:", description);
    setShowDeleteModal(true);
  }
    setShowDeleteModal(true);
  };

  const handleUpdateClick = async (taskId: string) => {
    const selectedTask = tasks.find(task => task.id === taskId);
    if (selectedTask) {
      setId(taskId);
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      navigate(`/updateTask/${taskId}`,{state: { title: selectedTask.title, description: selectedTask.description }},
      );
    }
  };
  

  const handleDeleteConfirm = async () => {
    try{
      await deleteTask({input:{id,title}});
      console.log("Task deleted!, .id: ",id," title:", title);
      refetchTasks();
    }catch(error){
      console.error("Error deleting task:", error);
    }
    setShowDeleteModal(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <div>
    {tasks.map((task) => (
    <div key={task.id}>
      
        <div className="rounded-md px-2 flex py-2 mx-[150px] my-2 bg-slate-50" >
          <div className="flex justify-between w-full">
            <div className="flex justify-start">
              <input type="checkbox" className="h-5 w-5 my-auto border-none" />
              <p className="px-5 my-auto">{task.title}</p>
            </div>
            <div>
              
              <button className="w-auto p-2 px-5 mx-2 rounded-md bg-[#7F7F7F]  hover:bg-[#525252] text-white font-medium" onClick={()=>  handleUpdateClick(task.id)}>
                Update
              </button>
              <button className="w-auto p-2 px-5 mx-2 rounded-md bg-[#373737]   hover:bg-[#000000] text-white font-medium" onClick={() => handleDeleteClick(task.id)}>
                Delete
              </button>
              <button className="w-auto p-2 px-5 mx-2 font-medium">
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 rotate-[${openAccordion === task.id ? '0' : '180'}] shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                  onClick={() => handleAccordionToggle(task.id)}
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </div>
          </div>
          
        </div>
        {openAccordion === task.id && (
            <div className="rounded-md px-2 flex py-2 mx-[150px] my-2 bg-slate-50 border-solid border-gray-900">
              <p className="mb-2 text-gray-800">{task.description}</p>
            </div>
          )} 
          </div>
      ))}
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-screen bg-gray-700 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Delete Confirmation</h2>
            <p className="text-gray-700 mb-4">Are you sure you want to delete this task?</p>
            <div className="flex justify-end">
              <button
                className="text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg mr-2"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
              <button
                className="text-gray-700 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
                onClick={handleDeleteCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      </div>
    
  );
};

export default Task;