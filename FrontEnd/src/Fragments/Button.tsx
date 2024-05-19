type Props = {
    className?: string;
    text: string;
    action?: () => {};
    click?: any;
};

const Button = (props: Props) => {
    const { className, action, click, text } = props;

    return (
        <button
            onClick={click}
            className={`bg-purple-600 py-2 text-white font-bold rounded-lg w-full shadow-md ${className}`}
        >
            <p className="text-sm">{text}</p>
        </button>
    );
};

export default Button;
