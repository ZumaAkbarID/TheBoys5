import { useState } from "react";
import Button from "../../../Fragments/Button";
import { useStateContext } from "../../../Context/ContextProvider";
import Modal from "../../../Fragments/Modal";
import Input from "../../../Components/Input";

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
    const { currentUser }: any = useStateContext();

    const [contents, setContents] = useState<any>(initialize);
    const [onSelected, setOnSelected] = useState<any>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // EDIT PROFILE
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ _html: "" });
    // END EDIT PROFILE

    // console.log(onSelected);
    console.log(currentUser);

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
                        <span className="flex items-center justify-center z-50">
                            <button className="h-32 w-32 rounded-full bg-black outline-8 outline outline-gray-100 overflow-hidden lg:outline-none">
                                <img
                                    src="https://i.pinimg.com/236x/d7/68/42/d76842da733b7e4a2c679c0a6d0ba75e.jpg"
                                    alt=""
                                />
                            </button>
                        </span>
                        {/* END PROFILE IMG */}

                        {/* SIMPLE DATA */}
                        <div className="flex flex-col items-center justify-center mb-10">
                            <small className="text-gray-500 font-semibold">
                                {currentUser.name}
                            </small>
                            <h1>Wahid Hasim S - 22.11.4878</h1>
                            <span className="flex gap-1 justify-center items-center mb-2">
                                <i className="bx bx-location-plus"></i>
                                <p>{currentUser.address}</p>
                                <p>Kebumen</p>
                            </span>
                            <span className="flex items-center justify-center w-1/4">
                                <Button
                                    text="Edit Data"
                                    className="bg-purple-600"
                                    click={() => {
                                        setIsEdit(true);
                                    }}
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
                <Modal
                    show={isEdit}
                    onClose={() => setIsEdit(false)}
                    closeable={true}
                    maxWidth="xl"
                >
                    <div className="bg-white">
                        <h1 className="text-center font-bold text-lg mb-3 pt-3 md:text-xl lg:text-2xl lg:pt-5 lg:mb-5 text-black">
                            Edit Profile
                        </h1>
                        <hr />

                        {/* DATA DISPLAY*/}
                        <span className="flex flex-col items-center px-5 lg:px-0 lg:justify-center">
                            <Input
                                type="text"
                                name="username"
                                value={currentUser.name}
                                onChange={(ev: any) =>
                                    setUserName(ev.target.value)
                                }
                            />
                            <Input
                                type="text"
                                name="alamat"
                                value={currentUser.address}
                                onChange={(ev: any) =>
                                    setUserName(ev.target.value)
                                }
                            />
                            <Input
                                type="text"
                                name="number"
                                value={currentUser.number}
                                onChange={(ev: any) =>
                                    setUserName(ev.target.value)
                                }
                            />
                        </span>
                        {/* END DATA DISPLAY*/}
                    </div>
                </Modal>
            )}
            {/* END MODAL EDIT DATA */}
        </div>
    );
};

export default Profile;
