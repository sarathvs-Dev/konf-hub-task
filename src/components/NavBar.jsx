import React from "react";

import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className={` bg-white dark:bg-gray-900 duration-20`}>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <p
                href="#"
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <img
                  src="https://media.konfhub.com/konfhub-logo-purple.svg"
                  alt="Epic Designers"
                  className="w-28 m-10"
                />
              </p>
            </div>
            <div className="flex items-center gap-4">
              <ul>
                <li>
                  <a
                    href="https://dev-accounts.konfhub.com/login"
                    className="inline-block py-4 px-4 m-10 hover:text-primary"
                  >
                    <FaRegUser />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
