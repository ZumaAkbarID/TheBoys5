import Card from "../../../Components/Card";
import Table from "../../../Components/Table";
import Button from "../../../Fragments/Button";

const Kas = () => {
    return (
        <div className="pt-44 justify-center bg-gray-100 h-screen w-full relative">
            <div className="w-full h-36 rounded-bl-full absolute top-0 bg-gradient-to-tr from-purple-800 to-purple-600 px-5 pt-20 flex justify-end">
                <h1 className="text-3xl font-semibold text-white">
                    KAS BERSAMA
                </h1>
            </div>

            {/* BACKGROUND */}
            <span className="flex items-start flex-col py-3 shadow-md bg-white rounded-lg mx-5 px-3">
                <h1 className="text-2xl font-semibold pb-2">Dana</h1>
                {/* DANA CARD */}
                <Card />
                {/* END DANA CARD */}

                {/* UPLOAD PHOTO */}
                <form action="#" className="mt-5 grid gap-2">
                    <div className="grid gap-2">
                        <label htmlFor="image" className="font-semibold">
                            Upload Photo:
                        </label>
                        <input
                            type="file"
                            name="image"
                            className="border rounded-md"
                        />
                    </div>
                    <Button text="submit" className="bg-purple-600 mb-3" />
                </form>
                {/* END UPLOAD PHOTO */}

                {/* HISTORY */}
                <h1 className="text-2xl font-semibold pb-2">History</h1>
                {/* TABLE */}
                <div className="w-full h-[19rem] border rounded-md">
                    <Table
                        titles={["No", "Name", "Month", "Status"]}
                        datas={0}
                    />
                </div>
                {/* END TABLE */}

                {/* END HISTORY */}
            </span>
            {/* END BACKGROUND */}
        </div>
    );
};

export default Kas;
