type Props = {
    className?: string;
    type: string;
    name: string;
};

const Input = (props: Props) => {
    const { className, type, name } = props;

    return (
        <div className="pt-2 flex flex-col gap-2">
            <label htmlFor={name}>
                {name.slice(0, 1).toUpperCase() + name.slice(1)}
            </label>
            <input
                name={name}
                type={type}
                className="border py-2 px-3 rounded-lg shadow-lg"
            />
        </div>
    );
};

export default Input;
