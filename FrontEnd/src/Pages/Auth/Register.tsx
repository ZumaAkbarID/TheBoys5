import Input from "../../Components/Input";
import Button from "../../Fragments/Button";

const Register = () => {
    return (
        <form action="" className="w-[25rem]">
            <Input type="text" name="username" />
            <Input type="email" name="email" />
            <Input type="number" name="number" />
            <Input type="password" name="password" />
            <Input type="password" name="confirm password" />

            <span className="flex flex-col w-ful items-center justify-center pt-5">
                <Button text="Register" />
                <small>
                    Already have an account?{" "}
                    <a href="login" className="text-blue-500 underline">
                        Sign in Here
                    </a>
                </small>
            </span>
        </form>
    );
};

export default Register;
