"use client";

import {
  useDeleteATaskMutation,
  useUpdateTaskStatusMutation,
} from "@/redux/features/allApis/tasksApi";
import Swal from "sweetalert2";

const TaskTr = ({ task, i, openEditModal }) => {
  const [deleteATask] = useDeleteATaskMutation();
  const [updateTaskStatus] = useUpdateTaskStatusMutation();

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure to Delete it ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const result = await deleteATask({ id: _id });
          if (result.data.deletedCount > 0) {
            Swal.fire("Deleted!", "This Task has been deleted.", "success");
          }
        } catch (error) {
          Swal.fire({
            title: "An unexpected error occurred",
            text: `${error}`,
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  const handleUpdateTaskStatus = async (_id) => {
    try {
      const result = await updateTaskStatus({ id: _id, status: "completed" });

      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Task Status Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "An unexpected error occurred",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <tr key={task?._id} className="border-sky-500">
      <th>{i + 1}</th>
      <td>{task?.taskTitle}</td>
      <td>{task?.taskDescription?.slice(0, 10)}...</td>
      <td className="text-nowrap">{task?.date}</td>
      <td>{task?.assignTo}</td>
      <td>{task?.status}</td>
      <td>
        <button
          className={`inline-flex items-center justify-center px-8 py-4 font-sans font-semibold border border-blue-500 tracking-wide rounded-lg h-[60px] ${
            task?.status === "completed"
              ? "bg-white text-blue-500 disabled cursor-not-allowed"
              : "text-white bg-blue-500 "
          }`}
          onClick={() => handleUpdateTaskStatus(task?._id)}
        >
          Complete
        </button>
      </td>
      <td>
        <div className="flex items-center justify-center gap-4">
          <button
            className="btn btn-accent"
            onClick={() => openEditModal(task)}
          >
            Edit
          </button>
          <button
            className="btn btn-error"
            onClick={() => handleDelete(task?._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskTr;
