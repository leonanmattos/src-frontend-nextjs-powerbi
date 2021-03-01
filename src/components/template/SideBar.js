import React from "react";
import Link from 'next/link'

export default function SideBar() {

  const [collapseShow, setCollapseShow] = React.useState("hidden");

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
              className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              type="button"
              onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}>
            <i className="fas fa-bars"></i>
          </button>
          <Link
            href="/"
          >
            <div className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0 cursor-pointer">
            Sistema de Relatórios
            </div>

          </Link>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              {/* <NotificationDropdown /> */}
            </li>
            <li className="inline-block relative">
              {/* <UserDropdown /> */}
            </li>
          </ul>
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                <li className="items-center">
                  <Link
                    href="/home"
                  >
                    <div className="text-pink-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block cursor-pointer">
                      <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> Dashboard
                    </div>
                  </Link>
                </li>
                <li className="items-center">
                  <Link
                    href="/home"
                  >
                    <div className="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block cursor-pointer">
                      <i className="fas fa-tv opacity-75 mr-2 text-sm"></i> Relatórios
                    </div>
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}