const DebitCard = () => {
    return (
        <>
            {/* DANA CARD */}
            <div className="py-3 px-5 border shadow-md w-[20rem] h-[10rem] flex flex-col justify-between rounded-xl bg-gradient-to-bl from-black to-gray-700 relative overflow-hidden lg:mx-10">
                <span className="w-12 h-9 rounded-md bg-yellow-400 mt-4 flex items-center">
                    <div className="w-1/4 border-r-2 rounded-xl h-full border-yellow-500"></div>
                    <span className="flex flex-col w-1/2 gap-2">
                        <div className="w-full border-t-2 border-yellow-500"></div>
                        <div className="w-full border-t-2 border-yellow-500"></div>
                    </span>
                    <div className="w-1/4 border-l-2 rounded-xl h-full border-yellow-500"></div>
                </span>
                <span className="flex justify-between items-center">
                    <div>
                        <h1 className="font-semibold text-white">
                            0895800715580
                        </h1>
                        <small className="text-gray-500 font-semibold">
                            Wahid Hasim Santoso
                        </small>
                    </div>
                    <div className="relative flex w-1/4 justify-end">
                        <div className="w-7 h-7 rounded-full bg-orange-300"></div>
                        <div className="w-7 h-7 rounded-full bg-orange-500 absolute right-5"></div>
                    </div>
                </span>
                {/* CIRCLE */}
                <div className="absolute h-20 w-20 rounded-bl-full bg-gradient-to-bl from-orange-300 to-orange-400 top-0 right-0"></div>
                {/* END CIRCLE */}
            </div>
            {/* END DANA CARD */}
        </>
    );
};

export default DebitCard;
