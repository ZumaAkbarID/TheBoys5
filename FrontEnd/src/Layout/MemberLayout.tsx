import { NavLink, Outlet } from "react-router-dom";

const list = [
    {
        to: "/member/index",
        title: "Home",
        icon: "bx-home",
        iconAfter: "bxs-home",
    },
    {
        to: "/member/kas",
        title: "Kas",
        icon: "bx-credit-card",
        iconAfter: "bxs-credit-card",
    },
    {
        to: "/member/talangan",
        title: "Talangan",
        icon: "bx-group",
        iconAfter: "bxs-group",
    },
    {
        to: "/member/profile",
        title: "Profile",
        icon: "bx-user",
        iconAfter: "bxs-user",
    },
];

const MemberLayout = () => {
    const navList = list;
    const classNames = (...classes: any) => {
        return classes.filter(Boolean).join(``);
    };

    return (
        <>
            {/* HEADER */}
            <div className="flex justify-center items-center fixed w-full z-50 xl:px-7 lg:py-2">
                <div className="flex justify-between py-4 px-3 items-center w-full z-50 backdrop-blur-sm rounded-b-xl md:bg-gray-800 lg:bg-white xl:bg-pink-500 lg:mx-3 lg:top-2 lg:rounded-2xl lg:shadow-md xl:w-full xl:mx-0">
                    <div className="hidden lg:flex">
                        <NavLink
                            className="flex items-center justify-center gap-2"
                            to={"/member/index"}
                        >
                            <h1 className="font-semibold text-xl">THE BOYS</h1>
                        </NavLink>
                    </div>
                    {/* END LOGO */}

                    {/* USER */}
                    <div className="flex gap-2 text-white items-center lg:text-black">
                        <NavLink
                            className="w-14 h-14 rounded-full shadow-sm overflow-hidden flex items-center justify-center lg:w-10 lg:h-10 lg:order-2"
                            to={"/member/profile"}
                        >
                            <img
                                src="https://i.pinimg.com/236x/d7/68/42/d76842da733b7e4a2c679c0a6d0ba75e.jpg"
                                alt=""
                            />
                        </NavLink>
                        <span className="flex items-start justify-center flex-col lg:flex-row lg:items-center lg:gap-2">
                            <h1 className="font-semibold">Hazz</h1>
                            <span className="lg:w-[3px] lg:h-8 lg:bg-black lg:rounded-full"></span>
                            <small className="text-gray-300 lg:hidden">
                                Hazz
                            </small>
                        </span>
                    </div>
                    {/* END USER */}

                    {/* CALENDER */}
                    <span className="roudend-xl w-20 bg-gray-200 rounded-full flex items-center justify-between text-black px-2 py-1 lg:hidden">
                        <button>
                            <i className="bx bx-chevron-left"></i>
                        </button>
                        <small>MAY</small>
                        <button>
                            <i className="bx bx-chevron-right"></i>
                        </button>
                    </span>
                    {/* END CALENDER */}
                </div>
            </div>
            {/* END HEADER */}

            <Outlet />

            {/* NAV */}
            <div className="fixed bottom-0 w-full lg:left-3 lg:top-24 lg:w-[10rem] xl:left-7">
                <div className="relative bg-white flex justify-center items-center py-1 gap-12 rounded-t-3xl shadow-inner md:justify-around md:py-3 lg:flex-col lg:justify-normal lg:rounded-xl lg:px-3 lg:gap-5 lg:shadow-md">
                    {navList.map((nav, index) => (
                        <NavLink
                            to={nav.to}
                            className={({ isActive }) =>
                                classNames(
                                    isActive
                                        ? `flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group text-purple-600 bx ${nav.iconAfter} text-2xl lg:flex-row lg:gap-2 lg:justify-start lg:w-full lg:px-4 lg:bg-purple-300 lg:text-white`
                                        : `flex items-center justify-center px-2 py-1 rounded-xl hover:text-purple-600 transition ease-in-out duration-300 cursor-pointer flex-col group bx ${nav.icon} text-2xl lg:flex-row lg:gap-2 lg:justify-start lg:w-full lg:px-4`
                                )
                            }
                            key={index}
                        >
                            <small className="text-sm">{nav.title}</small>
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* <button className="relative w-5">
                        <span className="flex items-center justify-center px-5 py-4 border bg-black text-white rounded-full hover:bg-purple-600 transition ease-in-out duration-300 cursor-pointer absolute -top-16 -left-5 outline outline-8 outline-gray-100 shadow-md">
                            <i className="bx bx-plus text-3xl font-bold"></i>
                        </span>
                    </button> */}
            {/* END NAV */}
        </>
    );
};

export default MemberLayout;
