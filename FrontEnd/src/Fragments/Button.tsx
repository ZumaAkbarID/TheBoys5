type Props = {
    className?: string;
    text: string;
    action?: () => {};
    click?: () => {};
};

const Button = (props: Props) => {
    const { className, action, click, text } = props;

    return (
        <button
            className={`bg-blue-500 py-2 px-5 text-white font-bold rounded-lg w-full shadow-lg ${className}`}
            onClick={click}
        >
            {text}
        </button>
    );
};

export default Button;
