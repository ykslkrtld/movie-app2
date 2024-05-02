import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Switch from "./Switch";
import { useAuthContext } from "../context/AuthProvider";
import avatar from "../assets/icons/avatar.png";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const { currentUser, logOut } = useAuthContext();
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-neutral-100 dark:bg-gray-900 py-3 dark:text-white fixed w-full top-0 z-20"
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
              <a className="dark:text-white text-dark" href="/">
                Movies
              </a>
            </div>
            <div>
              <NavLink className="mr-8" to={"/"}>Movies</NavLink>
              <NavLink to={"/series"}>Series</NavLink>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <p className="capitalize me-2 dark:text-white">
                {currentUser?.displayName}
              </p>
              <Switch />
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={currentUser?.photoURL || avatar}
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {!currentUser && (
                      <>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to={"/register"}
                              className="active:bg-gray-100                               block px-4 py-2 text-sm text-gray-700"
                            >
                              Register
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to={"/login"}
                              className="active:bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                            >
                              Log In
                            </Link>
                          )}
                        </Menu.Item>
                      </>
                    )}
                    {currentUser && (
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            onClick={logOut}
                            className="
                              active:bg-gray-100 block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          >
                            Log out
                          </p>
                        )}
                      </Menu.Item>
                    )}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
      <div className="h-[3.5rem] dark:bg-gray-dark-main mt-10"></div>
    </>
  );
}
