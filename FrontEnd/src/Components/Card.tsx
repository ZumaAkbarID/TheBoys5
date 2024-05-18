type Props = {
    title: string;
    icon: string;
    saldo: number;
    text?: string;
};

const Card = (props: Props) => {
    const { title, icon, saldo, text } = props;

    return (
        <div className="bg-white shadow-md w-[17rem] h-[10rem] rounded-2xl flex flex-col p-5 gap-2">
            <div className="flex items-center justify-start gap-2 w-[17rem] ">
                <i className={`bx ${icon} text-xl`}></i>
                <h1 className="text-xl font-semibold">{title}</h1>
            </div>
            <h1 className="text-3xl font-bold text-center">RP {saldo}</h1>
            <span className="w-full text-center">
                <small className="">{text}</small>
            </span>
        </div>
    );
};

export default Card;
