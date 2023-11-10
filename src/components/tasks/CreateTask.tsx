import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateTaskMutation } from '../../graphql/createTask.generated'
import { useGetAllTasksQuery } from '../../graphql/getAllTasks.generated'

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [createTask, { isLoading }] = useCreateTaskMutation();
  const navigate = useNavigate();
  const { refetch } = useGetAllTasksQuery();

  const handleCreateTask = async () => {
    try {
      await createTask({
        input:{title, description}
        
      });
      setTitle('');
      setDescription('');
      console.log('Task created!, title:', title, 'description:', description);
      refetch();
      navigate('/', { replace: true });
    } catch (error) {
      
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg my-[100px] mt-[100px]">
      <h2 className="text-2xl font-semibold mb-4">Create Task</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          onClick={handleCreateTask}
          disabled={isLoading}
        >
          {isLoading ? 'Creating Task...' : 'Create Task'}
        </button>
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => navigate(-1)}
        >
          Discard
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
