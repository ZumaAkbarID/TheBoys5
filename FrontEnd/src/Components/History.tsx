import Table from "./Table";

type Props = {
    title: string;
    tableTitle: Array<string>;
    contents: any;
};

const History = (props: Props) => {
    const { title, tableTitle, contents } = props;

    return (
        <span className="flex items-start flex-col py-3 shadow-md bg-white rounded-lg mx-5 px-3">
            <h1 className="text-center font-semibold text-lg mb-2">{title}</h1>
            <div className="w-full h-[19rem] border rounded-md">
                <Table titles={tableTitle} contents={contents} height="19rem" />
            </div>
        </span>
    );
};

export default History;
