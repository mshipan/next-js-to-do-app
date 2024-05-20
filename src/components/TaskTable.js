"use client";
import { useGetAllTasksQuery } from "@/redux/features/allApis/tasksApi";
import { useState } from "react";
import UpdateTaskModal from "./UpdateTaskModal";
import TaskTr from "./TaskTr";

const TaskTable = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const { data: allTasks } = useGetAllTasksQuery();

  const openEditModal = (task) => {
    setCurrentTask(task);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentTask(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table border border-sky-500">
        {/* head */}
        <thead className="bg-sky-500 text-black text-xl">
          <tr className="border-b-sky-500">
            <th>#</th>
            <th>Task Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Assign To</th>
            <th>Status</th>
            <th>Change Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-black">
          {allTasks?.map((task, i) => (
            <TaskTr
              key={task?._id}
              task={task}
              i={i}
              isEditModalOpen={isEditModalOpen}
              openEditModal={openEditModal}
              onClose={closeEditModal}
            />
          ))}
        </tbody>
      </table>
      {currentTask && (
        <UpdateTaskModal
          isEditModalOpen={isEditModalOpen}
          onClose={closeEditModal}
          task={currentTask}
        />
      )}
    </div>
  );
};

export default TaskTable;
