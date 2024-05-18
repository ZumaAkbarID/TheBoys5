import Table from "./Table";

type Props = {
    title: string;
    tableTitle: Array<string>;
    contents: any;
};

const History = (props: Props) => {
    const { title, tableTitle, contents } = props;

    return (
        <span className="flex items-start flex-col py-3 shadow-md bg-white rounded-lg mx-5 px-3 md:mx-10 md:px-5 lg:w-[65rem] lg:mx-3 xl:mx-0">
            <h1 className="font-semibold text-lg xl:text-2xl pb-2">{title}</h1>
            <div className="w-full h-[19rem] border rounded-md xl:h-[23rem]">
                <Table titles={tableTitle} contents={contents} height="19rem" />
            </div>
        </span>
    );
};

export default History;
