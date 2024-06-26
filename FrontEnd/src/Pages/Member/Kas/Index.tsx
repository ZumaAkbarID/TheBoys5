import DebitCard from "../../../Components/DebitCard";
import History from "../../../Components/History";
import Button from "../../../Fragments/Button";

const Kas = () => {
    return (
        <div className="pt-44 pb-32 justify-center bg-gray-100 h-auto w-full relative flex flex-col gap-5 lg:pt-[9rem] lg:h-screen xl:h-screen xl:flex-row xl:justify-end xl:px-7 xl:pt-[6rem]">
            <div className="w-full h-36 rounded-bl-full absolute top-0 bg-gradient-to-tr from-purple-800 to-purple-600 px-5 pt-20 flex justify-end lg:hidden">
                <h1 className="text-3xl font-semibold text-white">
                    KAS BERSAMA
                </h1>
            </div>

            {/* BACKGROUND */}
            <div className="flex flex-col gap-5 lg:justify-center lg:items-end xl:flex-row xl:justify-end xl:items-start xl:w-[90%]">
                <span className="flex items-start flex-col py-3 shadow-md bg-white rounded-lg mx-5 px-3 md:mx-10 md:px-5 md:flex-row lg:w-[65rem] lg:mx-3 xl:mx-0">
                    <div className="md:grid">
                        <h1 className="text-2xl font-semibold pb-2">
                            Dana Information
                        </h1>
                        {/* DANA CARD */}
                        <DebitCard />
                        {/* END DANA CARD */}
                    </div>

                    {/* UPLOAD PHOTO */}
                    <form
                        action="#"
                        className="grid gap-2 w-full my-5 md:my-0 md:flex md:items-end md:flex-col"
                    >
                        <div className="grid gap-2 w-full">
                            <label
                                htmlFor="image"
                                className="font-semibold text-lg md:text-2xl"
                            >
                                Upload Image:{" "}
                            </label>
                            <label
                                form="dropzone-file"
                                className="flex-col w-full h-[20rem] rounded-xl flex items-center justify-center hover:bg-gray-300 bg-gray-200 group transition duration-300 ease-in-out cursor-pointer"
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {/* <ArrowUpTrayIcon className="w-8 text-gray-500 group-hover:text-gray-700" /> */}

                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                                        <span className="font-semibold">
                                            Click here for uppload image
                                        </span>
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <div className="w-1/2 ">
                            <Button text="submit" className="bg-purple-600" />
                        </div>
                    </form>
                    {/* END UPLOAD PHOTO */}
                </span>
                {/* END BACKGROUND */}

                {/* HISTORY */}
                <History
                    title="Kas History"
                    tableTitle={["No", "Name", "Month", "Status"]}
                    contents={0}
                />
                {/* END HISTORY */}
            </div>
        </div>
    );
};

export default Kas;
