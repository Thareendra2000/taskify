import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useUpdateTaskMutation } from '../../graphql/updateTask.generated';
import { useGetAllTasksQuery } from '../../graphql/getAllTasks.generated';

const UpdateTask: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { refetch } = useGetAllTasksQuery();
    
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    console.log("title: ", title, "description: ", description);
  
    useEffect(() => {
      const { state } = location;
      if (state?.title && state?.description) {
        setTitle(state.title);
        setDescription(state.description);
      }
    }, [location]);
  
    const [updateTask, { isLoading }] = useUpdateTaskMutation();
  
    const handleUpdateTask = async () => {
        console.log(" Before Update: id: ", id, "title: ", title, "description: ", description);
      try {
        const input ={
            id:id!,
            title: title!,
            description: description || undefined,
        
        }
        console.log("input: ", input);
        await updateTask( {input});
        console.log("id: ", id, "title: ", title, "description: ", description);
        console.log("Task updated successfully!");
        navigate('/');
        refetch();
      } catch (error) {
        console.error("Error updating task:", error);
      }
    };
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg mt-[120px]">
      <h2 className="text-2xl font-semibold mb-4">Update Task</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={title}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-600 mb-2">
          Description
        </label>
        <textarea
          id="description"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={handleUpdateTask}
          disabled={isLoading}
        >
          {isLoading ? "Updating Task..." : "Update Task"}
        </button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300" onClick={() => navigate('/')}>
          Discard
        </button>
      </div>
    </div>
  );
};

export default UpdateTask;
