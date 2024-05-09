import Button from "@/components/Button";
import TaskTable from "@/components/TaskTable";

const HomePage = () => {
  return (
    <div className="bg-white h-screen p-5">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-3xl text-black font-medium">Next Js To Do App</h1>
      </div>
      <div className="flex flex-col gap-4 w-1/2 mx-auto">
        <Button />
        <TaskTable />
      </div>
    </div>
  );
};

export default HomePage;
