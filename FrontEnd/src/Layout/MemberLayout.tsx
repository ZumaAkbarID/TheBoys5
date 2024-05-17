import { Link, NavLink, Outlet } from "react-router-dom";

const MemberLayout = () => {
    const classNames = (...classes: any) => {
        return classes.filter(Boolean).join(" ");
    };

    return (
        <>
            {/* HEADER */}
            <div className="flex justify-between py-4 px-3 items-center fixed w-full z-50 backdrop-blur-sm rounded-b-xl">
                {/* LEFT */}
                <div className="flex gap-2 text-white">
                    <button className="w-14 h-14 rounded-full border bg-pink-400 overflow-hidden flex items-center justify-center">
                        <img
                            src="https://i.pinimg.com/236x/d7/68/42/d76842da733b7e4a2c679c0a6d0ba75e.jpg"
                            alt=""
                        />
                    </button>
                    <span className="flex items-start justify-center flex-col">
                        <h1 className="font-semibold">Hazz</h1>
                        <small className="text-gray-300">Hazz</small>
                    </span>
                </div>
                {/* END LEFT */}

                {/* RIGHT */}
                <span className="roudend-xl w-20 bg-gray-200 rounded-full flex items-center justify-between text-black px-2 py-1">
                    <button>
                        <i className="bx bx-chevron-left"></i>
                    </button>
                    <small>MAY</small>
                    <button>
                        <i className="bx bx-chevron-right"></i>
                    </button>
                </span>
                {/* END RIGHT */}
            </div>
            {/* END HEADER */}

            <Outlet />

            {/* NAV */}
            <div className="fixed bottom-0 w-full">
                <div className="relative bg-white flex justify-center items-center py-3 gap-12 rounded-t-2xl shadow-md">
                    <NavLink
                        to={"/member/index"}
                        className={({ isActive }) =>
                            classNames(
                                isActive
                                    ? "flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group text-purple-600 "
                                    : "flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group"
                            )
                        }
                    >
                        <i
                            className={` ${
                                window.location.pathname == "/member/index"
                                    ? "bx bxs-home text-2xl"
                                    : "bx bx-home text-2xl"
                            }`}
                        ></i>
                        <small>Home</small>
                    </NavLink>
                    <NavLink
                        to={"/member/kas"}
                        className={({ isActive }) =>
                            classNames(
                                isActive
                                    ? "flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group text-purple-600"
                                    : "flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group"
                            )
                        }
                    >
                        <i
                            className={` ${
                                window.location.pathname == "/member/kas"
                                    ? "bx bxs-credit-card text-2xl"
                                    : "bx bx-credit-card text-2xl"
                            }`}
                        ></i>
                        <small>Kas</small>
                    </NavLink>
                    <button className="relative w-5">
                        <span className="flex items-center justify-center px-5 py-4 border bg-black text-white rounded-full hover:bg-purple-600 transition ease-in-out duration-300 cursor-pointer absolute -top-16 -left-5 outline outline-8 outline-gray-100 shadow-md">
                            <i className="bx bx-plus text-3xl font-bold"></i>
                        </span>
                    </button>
                    <NavLink
                        to={"/member/talangan"}
                        className={({ isActive }) =>
                            classNames(
                                isActive
                                    ? "flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group text-purple-600"
                                    : "flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group"
                            )
                        }
                    >
                        <i
                            className={` ${
                                window.location.pathname == "/member/talangan"
                                    ? "bx bxs-group text-2xl"
                                    : "bx bx-group text-2xl"
                            }`}
                        ></i>
                        <small>Talangan</small>
                    </NavLink>
                    <NavLink
                        to={"/member/profile"}
                        className={({ isActive }) =>
                            classNames(
                                isActive
                                    ? "flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group text-purple-600"
                                    : "flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group"
                            )
                        }
                    >
                        <i
                            className={`bx bx-user text-2xl" ${
                                window.location.pathname === "/member/profile"
                                    ? "bx bxs-user text-2xl"
                                    : "bx bx-user text-2xl"
                            }`}
                        ></i>
                        <small>Profile</small>
                    </NavLink>
                </div>
            </div>
            {/* END NAV */}
        </>
    );
};

export default MemberLayout;
