import { useState } from "react";
import Button from "../../../Fragments/Button";
import { useStateContext } from "../../../Context/ContextProvider";
import Modal from "../../../Fragments/Modal";
import ProfileEdit from "./Edit";
import axiosClient from "../../../axios";

const initialize = [
    {
        id: 1,
        title: "More Information",
    },
    {
        id: 2,
        title: "Activities",
    },
];

const Profile = () => {
    const { currentUser, setCurrentUser, setUserToken }: any =
        useStateContext();

    const [contents, setContents] = useState<any>(initialize);
    const [onSelected, setOnSelected] = useState<any>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isImgEdit, setIsImgEdit] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    //EDIT IMG

    const logout = async () => {
        await axiosClient.post("/logout").then(() => {
            setCurrentUser({});
            setUserToken(null);
        });
    };
    // console.log(currentUser.nim);

    return (
        <div className="bg-gray-100 h-screen relative pt-16 md:px-32 lg:ps-[11rem] lg:pe-3">
            <div className="flex items-center justify-center lg:hidden">
                <div className="bg-gradient-to-tl from-purple-800 to-purple-600 h-56 rounded-b-3xl flex justify-center items-center top-0 w-full absolute md:w-3/4"></div>
            </div>

            {/* BACKGROUND  */}
            <div className="flex rounded-lg flex-col gap-3 w-full lg:gap-5">
                {/* TOP */}
                <div className="flex items-center justify-center">
                    <div className="flex flex-col gap-3 w-full lg:bg-white rounded-lg lg:shadow-md lg:mt-8 lg:w-[40rem] lg:pt-5">
                        <h1 className=" text-center z-50 font-bold text-2xl text-white mb-5 lg:text-black">
                            My Profile
                        </h1>
                        {/* PROFILE IMG */}
                        <span className="flex items-center justify-center z-50 relative">
                            <span className="h-32 w-32 rounded-full bg-black outline-8 outline outline-gray-100 overflow-hidden lg:outline-none">
                                <img
                                    src="https://i.pinimg.com/236x/d7/68/42/d76842da733b7e4a2c679c0a6d0ba75e.jpg"
                                    alt=""
                                />

                                <button
                                    className="absolute translate-x-20 -translate-y-9 w-10 h-10 bg-white border rounded-full hover:bg-purple-400 transition-all duration-300 ease-linear hover:text-white"
                                    onClick={() => setIsImgEdit(true)}
                                >
                                    <i className="bx bxs-camera-plus"></i>
                                </button>
                            </span>
                        </span>
                        {/* END PROFILE IMG */}

                        {/* SIMPLE DATA */}
                        <div className="flex flex-col items-center justify-center mb-10">
                            <small className="text-gray-500 font-semibold">
                                {currentUser.username}
                            </small>
                            <h1>
                                {currentUser.fullName && currentUser.nim != null
                                    ? `${currentUser.fullName} - ${currentUser.nim}`
                                    : "Fill u're data first"}
                            </h1>
                            <span className="flex gap-1 justify-center items-center mb-2">
                                {currentUser.fullName != null &&
                                currentUser.nim != null ? (
                                    // <i className="bx bx-location-plus"></i>
                                    <p className="bx bx-location-plus my-1">
                                        <span className="ps-2">
                                            {currentUser.address}
                                        </span>
                                    </p>
                                ) : (
                                    ""
                                )}
                            </span>
                            <span className="flex items-center justify-center w-1/2 gap-2">
                                <Button
                                    text="Edit Data"
                                    className="bg-purple-600"
                                    click={() => {
                                        setIsEdit(true);
                                    }}
                                />
                                <Button
                                    text="Logout"
                                    className="bg-red-600 lg:hidden"
                                    click={logout}
                                />
                            </span>
                        </div>
                        {/* END SIMPLE DATA */}
                    </div>
                </div>
                {/* END TOP */}

                {/* CONTENT */}
                <div className="flex items-center justify-center">
                    <div className="grid bg-white rounded-xl py-2 px-3 gap-1 mx-3 shadow-md w-full lg:w-[40rem]">
                        {contents.map((content: any, index: number) => (
                            <button
                                className="px-2 rounded-md flex flex-col py-2 hover:bg-gray-100 transition duration-300 ease-linear"
                                onClick={() => {
                                    setOnSelected(content);
                                }}
                                key={index}
                            >
                                <span className="flex justify-between items-center w-full">
                                    <h1 className="text-lg font-semibold">
                                        {content.title}
                                    </h1>
                                    <i className="bx bx-chevron-right"></i>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
                {/* END CONTENT */}
            </div>
            {/* END BACKGROUND  */}

            {/* MODAL EDIT DATA */}
            {isEdit === true && (
                <ProfileEdit isEdit={isEdit} setIsEdit={setIsEdit} />
            )}
            {/* END MODAL EDIT DATA */}

            {/* MODAL EDIT IMG */}
            {isImgEdit === true && (
                <Modal
                    onClose={() => setIsImgEdit(false)}
                    show={isImgEdit}
                    closeable={true}
                    maxWidth="xl"
                >
                    <div className="bg-white w-full pb-7">
                        <h1 className="text-center font-bold text-lg mb-3 pt-3 md:text-xl lg:text-2xl lg:pt-5 lg:mb-5 text-black">
                            Edit Image
                        </h1>
                        <hr />
                        <form action="#" className="px-10 grid gap-0 lg:gap-3">
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col items-center justify-center w-full h-40 lg:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:border-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-5 h-5 lg:w-8 lg:h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">
                                                Click to upload
                                            </span>{" "}
                                            or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG or GIF (MAX.
                                            800x400px)
                                        </p>
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden"
                                    />
                                </label>
                            </div>

                            <span className="mt-5">
                                <Button text="save" />
                            </span>
                        </form>
                    </div>
                </Modal>
            )}
            {/* MODAL END EDIT IMG */}
        </div>
    );
};

export default Profile;
