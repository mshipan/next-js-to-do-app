"use client";

const TaskTable = () => {
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
          {/* row 1 */}
          <tr className="border-sky-500">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>07/05/2024</td>
            <td>Mr. John</td>
            <td>incomplete</td>
            <td>
              <button className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                Complete
              </button>
            </td>
            <td>
              <div className="flex items-center justify-center gap-4">
                <button className="btn btn-accent">Edit</button>
                <button className="btn btn-error">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
