type Props = {
    className?: string;
    type: string;
    name: string;
    disable?: boolean;
    value?: string;
    onChange?: any;
};

const Input = (props: Props) => {
    const { className, type, name, disable = false, onChange, value } = props;

    return (
        <div className="pt-2 flex flex-col gap-2">
            <label htmlFor={name} className={className}>
                {name.slice(0, 1).toUpperCase() + name.slice(1)}
            </label>
            <input
                name={name}
                type={type}
                disabled={disable}
                required
                value={value}
                className="border py-1 px-3 rounded-lg shadow-md"
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
