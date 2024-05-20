type Props = {
    title: string;
    children: any;
    current?: boolean;
};

const HomeCard = (props: Props) => {
    const { title, children, current = false } = props;

    return (
        <span className="w-full bg-white rounded-xl py-7 px-10 mx-auto flex flex-col shadow-md gap-5">
            <div className="lg:flex lg:justify-between lg:items-center">
                <h1 className="text-center font-bold text-lg lg:mb-3">
                    {title}
                </h1>
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:text-xl lg:gap-1 lg:mb-3">
                    {current == true && (
                        <button className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm">
                            Store +
                        </button>
                    )}
                    <i className="bx bx-info-circle"></i>
                </div>
            </div>

            <div className="flex justify-between gap-5 ">{children}</div>
        </span>
    );
};

export default HomeCard;
