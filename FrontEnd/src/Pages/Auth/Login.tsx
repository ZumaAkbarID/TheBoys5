import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import Button from "../../Fragments/Button";

const Login = () => {
    const handleSubmit = () => {};

    return (
        <form action="" className="">
            <Input type="text" name="username" />
            <Input type="password" name="password" />

            <span className="flex flex-col w-full pt-5 justify-center items-center">
                <Button text="Login" />
                <small>
                    Don't have an account?{" "}
                    <Link to="/register" className="text-purple-600 underline">
                        Register Here
                    </Link>
                </small>
            </span>
        </form>
    );
};

export default Login;
