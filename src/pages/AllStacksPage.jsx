import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft, HiOutlineBeaker } from "react-icons/hi";
import {
  backEndStacks,
  frontEndStacks,
  otherStacks,
} from "../constants/stacks";

const AllStacksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto mt-6 lg:mt-8 pb-8 xl:px-16">
      <div className="border border-gray-200 dark:border-gray-700 py-5 px-5 rounded-xl bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-md font-semibold flex items-center gap-2 text-gray-900 dark:text-white">
            <HiOutlineBeaker className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            All Tech Stack
          </h3>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1"
          >
            <HiOutlineArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              {frontEndStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">
              Backend
            </h4>
            <div className="flex flex-wrap gap-2">
              {backEndStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm text-gray-800 dark:text-gray-200 font-medium mb-3">
              Developer Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {otherStacks.map((stack, index) => (
                <div
                  key={index}
                  className="text-xs py-1.5 px-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-200"
                >
                  {stack.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStacksPage;
