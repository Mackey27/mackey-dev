import { IoLocationOutline, IoNewspaperOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { MdVerified, MdOutlineEmail } from "react-icons/md";
import { personalLinks } from "../constants/personal";
import profileImage from "../assets/5.jpg";
import ToggleMode from "./ToggleMode";

const Header = () => {
  return (
    <header className="w-full h-auto flex justify-between items-start gap-3 pt-8 lg:pt-12 xl:px-16">
      <div className="flex items-start gap-3 sm:gap-4 lg:gap-6 w-full min-w-0">
        <div className="shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="size-36 sm:size-40 lg:size-48 xl:size-52 aspect-square rounded-lg object-cover object-center"
          />
        </div>

        <div className="flex flex-col gap-1 w-full min-w-0">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg lg:text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
              Niño Mark Zaspa
              <MdVerified className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500" />
            </h3>
            <h5 className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <IoLocationOutline className="w-4 h-4" />
              Cebu, Philippines
            </h5>
            <h4 className="text-xs lg:text-sm font-medium text-gray-800 dark:text-gray-300 mt-1">
              Aspiring Front-end Developer \{" "}
              <span className="text-gray-400 dark:text-gray-500"></span> Web
              Developer \ Content Creator
            </h4>
          </div>
          <div className="flex flex-nowrap items-center mt-3 gap-2">
            <a
              href={personalLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="NIÑO MARK ZASPA.pdf"
              className="h-8 lg:h-9 px-3 lg:px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium text-xs lg:text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <IoNewspaperOutline className="w-3 h-3 lg:w-4 lg:h-4" />
              Resume
              <FaAngleRight className="w-3 h-3" />
            </a>
            <a
              href={personalLinks.email}
              className="h-8 lg:h-9 px-4 lg:px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium text-xs lg:text-sm rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <MdOutlineEmail className="w-4 h-4" />
              Send Email
            </a>
          </div>
        </div>
      </div>
      <div className="self-start pt-1">
        <ToggleMode />
      </div>
    </header>
  );
};

export default Header;
