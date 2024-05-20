"use client";
import { useUpdateATaskMutation } from "@/redux/features/allApis/tasksApi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdateTaskModal = ({ isEditModalOpen, onClose, task }) => {
  const { _id } = task;
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [updateATask] = useUpdateATaskMutation();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await updateATask({
        id: _id,
        data: data,
      });

      if (result.data.modifiedCount > 0) {
        Swal.fire({
          title: "Task Updated Successfully!",
          text: "Press OK to continue",
          icon: "success",
          confirmButtonText: "OK",
        });
        setLoading(false);
        onClose();
      }
    } catch (error) {
      Swal.fire({
        title: "An unexpected error occurred",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "OK",
      });
      setLoading(false);
    }
  };

  return (
    <dialog open={isEditModalOpen} id="my_modal_1" className="modal">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="modal-box bg-gray-200 border border-gray-500"
      >
        {/* modal content */}
        <div>
          <div className="text-black flex flex-col gap-4">
            <div className="form-control">
              <label htmlFor="taskTitle" className="mb-1">
                Task Title: <span className="text-red-500">*</span>{" "}
                {errors.taskTitle && (
                  <small className="text-red-500 text-xs font-medium">
                    Task Title is Required.
                  </small>
                )}
              </label>

              <input
                type="text"
                name="taskTitle"
                {...register("taskTitle", { required: true })}
                defaultValue={task?.taskTitle}
                placeholder="Task Title"
                className="w-full border border-gray-500 rounded-lg py-3 px-5 outline-none bg-white"
              />
            </div>

            <div className="form-control">
              <label htmlFor="taskDescription" className="mb-1">
                Task Description: <span className="text-red-500">*</span>{" "}
                {errors.taskDescription && (
                  <small className="text-red-500 text-xs font-medium">
                    Task Description is Required.
                  </small>
                )}
              </label>
              <textarea
                name="taskDescription"
                {...register("taskDescription", { required: true })}
                defaultValue={task?.taskDescription}
                placeholder="Task Description"
                rows="4"
                className="w-full border border-gray-500 rounded-lg py-3 px-5 outline-none bg-white"
              />
            </div>

            <div className="form-control">
              <label htmlFor="date" className="mb-1">
                Date: <span className="text-red-500">*</span>{" "}
                {errors.date && (
                  <small className="text-red-500 text-xs font-medium">
                    Date is Required.
                  </small>
                )}
              </label>
              <input
                type="date"
                name="date"
                {...register("date", { required: true })}
                defaultValue={task?.date}
                className="w-full border border-gray-500 rounded-lg py-3 px-5 outline-none bg-white"
              />
            </div>

            <div className="form-control">
              <label htmlFor="assignTo" className="mb-1">
                Assign To: <span className="text-red-500">*</span>{" "}
                {errors.assignTo && (
                  <small className="text-red-500 text-xs font-medium">
                    Assign To is Required.
                  </small>
                )}
              </label>

              <select
                name="assignTo"
                {...register("assignTo", { required: true })}
                defaultValue={task?.assignTo}
                className="w-full border border-gray-500 rounded-lg py-3 px-5 outline-none bg-white"
              >
                <option value="">Select One</option>
                <option value="vismo">Vismo Dev</option>
                <option value="tonmoy">Tonmoy Roy</option>
                <option value="shipan">Shipan Mallik</option>
                <option value="sabbir">Sabbir Ahmed</option>
                <option value="subroto">Subroto Shan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-action">
          <button type="submit" className="btn btn-primary text-white">
            {loading ? "Loading..." : "Update Task"}
          </button>
          <div>
            <button className="btn text-white" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </form>
    </dialog>
  );
};

export default UpdateTaskModal;
