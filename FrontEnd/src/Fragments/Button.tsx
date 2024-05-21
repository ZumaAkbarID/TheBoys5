type Props = {
    className?: string;
    text: string;
    action?: () => {};
    click?: any;
    disable?: any;
};

const Button = (props: Props) => {
    const { className, action, click, text, disable = false } = props;

    return (
        <button
            onClick={click}
            disabled={disable}
            className={`bg-purple-600 py-2 text-white font-bold rounded-lg w-full shadow-md ${className} `}
        >
            <p className="text-sm">{text}</p>
        </button>
    );
};

export default Button;
