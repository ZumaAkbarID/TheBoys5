import { useState } from "react";
import Input from "../../../Components/Input";
import Button from "../../../Fragments/Button";

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
    const [contents, setContents] = useState<any>(initialize);
    const [onSelected, setOnSelected] = useState<any>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    console.log(onSelected);

    return (
        <div className="bg-gray-100 h-screen relative pt-16">
            <div className="bg-purple-600 h-56 rounded-b-3xl flex justify-center items-center top-0 w-full absolute"></div>

            {/* BACKGROUND  */}
            <div className="flex rounded-lg flex-col gap-3 w-full">
                <h1 className=" text-center z-50 font-bold text-2xl text-white mb-5">
                    My Profile
                </h1>
                {/* PROFILE IMG */}
                <span className="flex items-center justify-center z-50">
                    <button className="h-32 w-32 rounded-full bg-black outline-8 outline outline-gray-100 overflow-hidden">
                        <img
                            src="https://i.pinimg.com/236x/d7/68/42/d76842da733b7e4a2c679c0a6d0ba75e.jpg"
                            alt=""
                        />
                    </button>
                </span>
                {/* END PROFILE IMG */}

                {/* SIMPLE DATA */}
                <div className="flex flex-col items-center justify-center mb-10">
                    <small className="text-gray-500 font-semibold">Hazz</small>
                    <h1>Wahid Hasim S - 22.11.4878</h1>
                    <span className="flex gap-1 justify-center items-center mb-2">
                        <i className="bx bx-location-plus"></i>
                        <p>Kebumen</p>
                    </span>
                    <span className="flex items-center justify-center w-1/2">
                        <Button text="Edit Data" className="bg-purple-600" />
                    </span>
                </div>
                {/* END SIMPLE DATA */}

                {/* CONTENT */}
                <div className="grid bg-white rounded-lg py-2 px-3 gap-1 mx-3 shadow-md">
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
                {/* END CONTENT */}
            </div>
            {/* END BACKGROUND  */}
        </div>
    );
};

export default Profile;
