import Table from "./Table";

type Props = {
    title: string;
};

const Leaderboard = (props: Props) => {
    const { title } = props;

    return (
        <div className="flex flex-col gap-3 w-full">
            <h1 className="px-2 text-xl font-semibold">{title}</h1>
            <span className="w-full rounded-lg overflow-y-scroll h-[35rem] border">
                <Table
                    titles={["No", "Name", "Date", "Transaction"]}
                    contents={0}
                    height={"35rem"}
                />
            </span>
        </div>
    );
};

export default Leaderboard;
