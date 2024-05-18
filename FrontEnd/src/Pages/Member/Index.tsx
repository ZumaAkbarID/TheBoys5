import Card from "../../Components/Card";
import History from "../../Components/History";
import HomeCard from "../../Components/HomeCard";
import Leaderboard from "../../Components/Leaderboard";

const listCard = [
    {
        icon: "bx-dollar-circle",
        slado: 12000,
        title: "Saldo",
        text: "😫 Saldo tersisa dikit bruh",
    },
    {
        icon: "bx-credit-card",
        slado: 625000,
        title: "Kas",
        text: "😉 Siip lunaas semua",
    },
    {
        icon: "bx-group",
        slado: 5000,
        title: "Talangan",
        text: "❌ Belum di balikin",
    },
];

const Member = () => {
    const cardContents = listCard;

    return (
        <div className="w-full bg-purple-600 flex flex-col relative gap-32 pt-28 lg:pt-0">
            {/* TOP CONTENT */}
            <div className="flex justify-between py-4 mx-5 items-center text-gray-100 px-3 md:mx-20 lg:hidden">
                <span className="flex flex-col gap-1">
                    <h1 className="font-bold text-4xl">Rp 5.000</h1>
                    <small>Talanganmu yang blm di kembaliin </small>
                </span>
                <button className="flex items-center justify-center group px-2 py-1 rounded-full hover:bg-gray-100 hover:text-purple-600 transition-all duration-300 group">
                    <i className="bx bxs-bell text-2xl group-hover:bx bx-bell"></i>
                </button>
            </div>
            {/* END TOP CONTENT */}

            {/* CONTENT */}
            <div className="flex bg-gray-100 rounded-t-lg flex-col pt-28 px-5 gap-5 lg:h-screen lg:pt-[6rem] lg:ps-[10rem] lg:gap-0 xl:ps-[12rem] xl:pe-[2rem] xl:flex-row xl:gap-5">
                <div className="flex flex-col xl:w-[56rem] ">
                    {/* CENTER CUBE */}
                    <div className="absolute flex items-center justify-start top-64 gap-5 w-full overflow-x-scroll ps-5 pb-5 md:justify-center md:ps-0 lg:relative lg:top-0 lg:pb-5 lg:justify-start lg:mx-10">
                        {/* CUBE CONTENT  */}
                        {cardContents.map((cardContent: any, index: number) => (
                            <Card
                                title={cardContent.title}
                                icon={cardContent.icon}
                                saldo={cardContent.slado}
                                text={cardContent.text}
                                key={index}
                            />
                        ))}
                        {/* END CUBE CONTENT  */}
                    </div>
                    {/* END CENTER CUBE */}

                    <div className="flex gap-5 flex-col md:flex-row md:mx-10 lg:pb-5 lg:ms-10 lg:mx-0">
                        {/* PAPAN INFO */}
                        <HomeCard title="PAPAN INFO">
                            <span className="flex flex-col w-1/2 justify-center items-center">
                                <small className="font-semibold mb-2 lg:font-bold lg:text-gray-700">
                                    WIFI : THE BOYS
                                </small>
                                <small>ID - 12615566</small>
                                <small>Pass - 1sampai10</small>
                            </span>
                            <span className="flex flex-col  w-1/2 justify-center items-center">
                                <small className="font-semibold text-center mb-2 lg:font-bold lg:text-gray-700">
                                    LAIN
                                </small>
                                <small>PDAM - 1300038</small>
                                <small>PLN - 86030966864</small>
                            </span>
                        </HomeCard>
                        {/* END PAPAN INFO */}

                        {/* GALON */}
                        <HomeCard title="JADWAL GALON">
                            <span className="flex items-center justify-center w-full gap-2">
                                <small className="text-center bg-purple-600 text-white px-2 py-1 rounded-md lg:py-3 lg:px-5">
                                    Alex
                                </small>
                                <small className="text-center bg-gray-300 text-white px-2 py-1 rounded-md lg:py-3 lg:px-5">
                                    Zuma
                                </small>
                                <small className="text-center bg-gray-300 text-white px-2 py-1 rounded-md lg:py-3 lg:px-5">
                                    Wahid
                                </small>
                                <small className="text-center bg-gray-300 text-white px-2 py-1 rounded-md lg:py-3 lg:px-5">
                                    Bahar
                                </small>
                                <small className="text-center bg-gray-300 text-white px-2 py-1 rounded-md lg:py-3 lg:px-5">
                                    Azka
                                </small>
                            </span>
                        </HomeCard>
                        {/* END GALON */}
                    </div>
                </div>

                {/* XL CONTENT HIDDEN */}
                {/* LAST ACTIVITY */}
                <span className="w-full bg-white rounded-xl py-7 mx-auto flex flex-col shadow-md gap-5 mb-36 px-1 md:mx-10 md:w-auto lg:py-0 lg:overflow-hidden lg:px-0 lg:gap-0 xl:hidden">
                    {/* HEADER */}
                    <div className="flex justify-between items-center px-8 lg:bg-purple-600 lg:py-5 lg:text-white">
                        <h1 className="font-semibold">Last Activity</h1>
                        <button className=" flex items-center justify-center text-purple-600 lg:text-white">
                            show all{" "}
                            <i className="bx bx-chevron-right text-gray-400 lg:text-white"></i>
                        </button>
                    </div>
                    {/* END HEADER */}
                    <hr className="lg:hidden" />
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
                                <small className="text-gray-400">Today</small>
                            </span>
                            {/* END RIGHT */}
                        </li>
                    </ul>
                    {/* END CONTENT */}
                </span>
                {/* END LAST ACTIVITY */}

                {/* JUST SHOW ON XL+ WIDTH */}
                {/* TABLE LEADERBOARD */}
                <span className="hidden xl:flex xl:grow">
                    <span className="flex items-start flex-col py-5 shadow-md bg-white rounded-xl px-3 w-full h-[40rem]">
                        <Leaderboard title={"Leaderboard"} />
                    </span>
                </span>
                {/* END TABLE LEADERBOARD */}
            </div>
            {/* END CONTENT */}
        </div>
    );
};

export default Member;
