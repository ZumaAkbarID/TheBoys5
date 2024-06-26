import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import axiosClient from "../axios";
import Dropdown from "../Components/Dropdown";
import { useEffect } from "react";
import Month from "../Components/Month";

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
    const { currentUser, userToken, setCurrentUser, setUserToken }: any =
        useStateContext();

    if (!userToken) {
        return <Navigate to="/login" />;
    }

    const navList = list;
    const classNames = (...classes: any) => {
        return classes.filter(Boolean).join(``);
    };
    const logout = async () => {
        await axiosClient.post("/logout").then(() => {
            setCurrentUser({});
            setUserToken(null);
        });
    };

    return (
        <>
            {/* HEADER */}
            <div className="flex justify-center items-center fixed w-full z-50 xl:px-7 lg:py-2">
                <div className="flex justify-between py-4 px-3 items-center w-full z-50 backdrop-blur-sm rounded-b-xl lg:bg-white lg:mx-3 lg:top-2 lg:rounded-2xl lg:shadow-md xl:w-full xl:mx-0">
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
                        <span className="lg:hidden">
                            <NavLink
                                className="w-14 h-14 rounded-full shadow-sm overflow-hidden flex items-center justify-center lg:w-10 lg:h-10"
                                to={"/member/profile"}
                            >
                                {currentUser.avatar === null ? (
                                    <img
                                        src="https://i.pinimg.com/236x/d7/68/42/d76842da733b7e4a2c679c0a6d0ba75e.jpg"
                                        alt=""
                                    />
                                ) : (
                                    <img src={currentUser.avater} alt="" />
                                )}
                            </NavLink>
                        </span>

                        <span className="hidden lg:flex lg:order-2">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button className="w-14 h-14 rounded-full shadow-sm overflow-hidden flex items-center justify-center lg:w-10 lg:h-10">
                                        {currentUser.avatar === null ? (
                                            <img
                                                src="https://i.pinimg.com/236x/d7/68/42/d76842da733b7e4a2c679c0a6d0ba75e.jpg"
                                                alt=""
                                            />
                                        ) : (
                                            <img
                                                src={currentUser.avater}
                                                alt=""
                                            />
                                        )}
                                    </button>
                                </Dropdown.Trigger>

                                <Dropdown.Content align={`right`}>
                                    <Dropdown.NavLink to="/member/profile">
                                        Profile
                                    </Dropdown.NavLink>
                                    <Dropdown.NavLink
                                        as="button"
                                        onClick={logout}
                                    >
                                        Log Out
                                    </Dropdown.NavLink>
                                </Dropdown.Content>
                            </Dropdown>
                        </span>

                        <span className="flex items-start justify-center flex-col lg:flex-row lg:items-center lg:gap-2">
                            <div className="flex flex-col justify-center items-end">
                                {/* XL BELL ICON */}
                                <h1 className="font-semibold">
                                    {currentUser.username}
                                </h1>
                                <button className="hidden lg:flex lg:items-center lg:justify-center xl:group">
                                    <i className="bx bx-bell"></i>
                                </button>
                                {/* END XL BELL ICON */}
                            </div>
                            <span className="lg:w-[2px] lg:h-8 lg:bg-black lg:rounded-full"></span>
                            <small className="text-gray-300 lg:hidden">
                                {currentUser.username}
                            </small>
                        </span>
                    </div>
                    {/* END USER */}

                    {/* CALENDER */}
                    <span className="roudend-xl w-20 bg-gray-200 rounded-full flex items-center justify-between text-black px-2 py-1 lg:hidden">
                        <Month />
                    </span>
                    {/* END CALENDER */}
                </div>
            </div>
            {/* END HEADER */}

            <Outlet />

            {/* NAV */}
            <div className="flex items-center justify-center">
                <div className="fixed bottom-0 w-full md:w-3/4 lg:left-3 lg:top-24 lg:w-[10rem] xl:left-7">
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
            </div>
        </>
    );
};

export default MemberLayout;
