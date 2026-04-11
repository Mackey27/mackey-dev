import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft, HiOutlineFolderOpen } from "react-icons/hi";
import { projects } from "../constants/projects";

const AllProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto mt-6 lg:mt-8 pb-8 xl:px-16">
      <div className="page-load page-load-delay-1 border-b border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-md font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
            <HiOutlineFolderOpen className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            All Projects
          </h3>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-sm text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 flex items-center gap-1 transition-colors"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all cursor-pointer bg-white dark:bg-gray-800"
            >
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
                {project.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                {project.description}
              </p>
              <span className="inline-block mt-2 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs rounded text-gray-700 dark:text-gray-300">
                {project.domainName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectsPage;
