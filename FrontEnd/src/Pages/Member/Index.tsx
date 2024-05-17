const Member = () => {
    return (
        <div className="w-full bg-purple-600  h-auto flex flex-col justify-between relative">
            {/* CENTER CUBE */}
            <div className="absolute flex items-center justify-start top-64 gap-5 w-full overflow-x-scroll ps-5 pb-5">
                {/* CUBE CONTENT  */}
                <span className="bg-white shadow-md w-[17rem] h-[10rem] rounded-2xl flex flex-col p-5 gap-2">
                    <div className="flex items-center justify-start gap-2 w-[17rem] ">
                        <i className="bx bx-dollar-circle text-xl"></i>
                        <h1 className="text-xl font-semibold">Saldo</h1>
                    </div>
                    <h1 className="text-3xl font-bold ps-5">RP 5.000</h1>
                    <span className="w-full text-center">
                        <small className="">😥 saldo tersisa tipis bro!</small>
                    </span>
                </span>
                <span className="bg-white shadow-md w-[17rem] h-[10rem] rounded-2xl flex flex-col p-5 gap-2">
                    <div className="flex items-center justify-start gap-2 w-[17rem] ">
                        <i className="bx bx-credit-card text-xl"></i>
                        <h1 className="text-xl font-semibold">Kas</h1>
                    </div>
                    <h1 className="text-3xl font-bold ps-5">RP 625.000</h1>
                    <span className="w-full text-center">
                        <small className="">😉 Lunas semua!</small>
                    </span>
                </span>
                <span className="bg-white shadow-md w-[17rem] h-[10rem] rounded-2xl flex flex-col p-5 gap-2">
                    <div className="flex items-center justify-start gap-2 w-[17rem] ">
                        <i className="bx bx-group text-xl"></i>
                        <h1 className="text-xl font-semibold">Talangan</h1>
                    </div>
                    <h1 className="text-3xl font-bold ps-5">RP 5.000</h1>
                    <span className="w-full text-center">
                        <small className="">❌ Blm di balikin</small>
                    </span>
                </span>
                {/* END CUBE CONTENT  */}
            </div>
            {/* END CENTER CUBE */}

            {/* TOP CONTENT */}
            <div className="flex justify-between py-4 px-5 items-center h-80 w-full text-white">
                <span className="flex flex-col gap-1">
                    {/* <h1 className="font-semibold text-xl border rounded-md py-2 px-5 text-center">
                        THE BOYS
                    </h1> */}
                    <h1 className="font-bold text-4xl">Rp 5.000</h1>
                    <small>Talanganmu yang blm di kembaliin </small>
                </span>
                <button className="flex items-center justify-center group px-2 py-1 rounded-full hover:bg-gray-100 hover:text-purple-600 transition-all duration-300">
                    <i className="bx bx-bell text-2xl"></i>
                </button>
            </div>
            {/* END TOP CONTENT */}

            {/* CONTENT */}
            <div className="flex bg-gray-100 rounded-t-lg flex-col pt-28 px-5 gap-4">
                {/* PAPAN INFO */}
                <span className="w-full bg-white rounded-xl py-7 px-10 mx-auto flex flex-col shadow-md gap-5">
                    <h1 className="text-center font-bold text-lg">
                        PAPAN INFO
                    </h1>

                    <div className="flex justify-between gap-5">
                        <span className="flex flex-col w-1/2 justify-center items-center">
                            <small className="font-semibold mb-2">
                                WIFI : THE BOYS
                            </small>
                            <small>ID Pelanggan - 12615566</small>
                            <small>Pass - 1sampai10</small>
                        </span>
                        <span className="flex flex-col  w-1/2 justify-center items-center">
                            <small className="font-semibold text-center mb-2">
                                LAIN
                            </small>
                            <small>PDAM - 1300038</small>
                            <small>PLN - 86030966864</small>
                        </span>
                    </div>
                </span>
                {/* END PAPAN INFO */}

                {/* GALON */}
                <span className="w-full bg-white rounded-xl py-7 px-10 mx-auto flex flex-col shadow-md gap-5">
                    <h1 className="text-center font-bold text-lg">
                        JADWAL GALON
                    </h1>
                    <span className="w-full flex items-center justify-center gap-2">
                        <small className="text-center bg-purple-600 text-white px-2 py-1 rounded-md">
                            Alex
                        </small>
                        <small className="text-center bg-gray-300 text-black px-2 py-1 rounded-md">
                            Zuma
                        </small>
                        <small className="text-center bg-purple-600 text-white px-2 py-1 rounded-md">
                            Wahid
                        </small>
                        <small className="text-center bg-gray-300 text-black px-2 py-1 rounded-md">
                            Bahar
                        </small>
                        <small className="text-center bg-purple-600 text-white px-2 py-1 rounded-md">
                            Azka
                        </small>
                    </span>
                </span>
                {/* END GALON */}

                {/* LIST */}
                <span className="w-full bg-white rounded-xl py-7 mx-auto flex flex-col shadow-md gap-5 mb-36 px-1">
                    {/* HEADER */}
                    <div className="flex justify-between items-center px-8">
                        <h1 className="font-semibold">Pengeluaran terakhir</h1>
                        <button className=" flex items-center justify-center text-purple-600">
                            show all{" "}
                            <i className="bx bx-chevron-right text-gray-400"></i>
                        </button>
                    </div>
                    {/* END HEADER */}
                    <hr />
                    {/* CONTENT */}
                    <ul>
                        <li className="flex justify-between items-center  hover:bg-gray-300 cursor-pointer px-8 py-2 rounded-lg">
                            {/* LEFT */}
                            <span className="flex gap-1">
                                <div className="flex gap-4">
                                    <button className="w-14 h-14 rounded-full border overflow-hidden flex items-center justify-center">
                                        <img
                                            src="https://i.pinimg.com/236x/d7/68/42/d76842da733b7e4a2c679c0a6d0ba75e.jpg"
                                            alt=""
                                        />
                                    </button>
                                    <span className="flex items-start justify-center flex-col">
                                        <h1 className="font-semibold">
                                            Listrik
                                        </h1>
                                        <small className="text-gray-400">
                                            KAS
                                        </small>
                                    </span>
                                </div>
                            </span>
                            {/* END LEFT */}

                            {/* RIGHT */}
                            <span className="flex flex-col">
                                <small className="font-semibold">
                                    Rp 50.000
                                </small>
                                <small className="text-gray-400">
                                    Hari ini
                                </small>
                            </span>
                            {/* END RIGHT */}
                        </li>
                    </ul>
                    {/* END CONTENT */}
                </span>
                {/* END LIST */}
            </div>
            {/* END CONTENT */}
        </div>
    );
};

export default Member;
