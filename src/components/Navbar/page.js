"use client";

import { Fragment } from "react";

const isAdminView = true;
const isAuthUser = true;
const user={
  role:"admin",
}

function Navitem(){
  return (
    <div className="item-center justify-between w-full md:flex md:w-auto" id="nav-items">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black">
hh
    </ul>

    </div>
  )
}

export default function Navbar() {
  return (
    <>
      <nav className="bg-black fixed w-full z-20 top-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center cursor-pointer">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              gg-store
            </span>
          </div>
          <div className="flex md:order-2 gap-2">
            {isAdminView && isAuthUser ? (
              <Fragment>
                <button>Account</button>
                <button>Cart</button>
              </Fragment>
            ) : null}

            {
              user.role==="admin" ? (
                isAdminView? <button> client view</button> : <button>Admin view</button>
              ):null
            }
            {
              isAuthUser? <button> logout</button>: <button>login</button>
            }
          </div>
        </div>
      </nav>
    </>
  );
}
