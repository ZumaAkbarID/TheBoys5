import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import Button from "../../Fragments/Button";
import { useState } from "react";
import axiosClient from "../../axios";
import { useStateContext } from "../../Context/ContextProvider";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ _html: "" });

    const { setCurrentUser, setUserToken }: any = useStateContext();

    const onSubmit = async (ev: any) => {
        ev.preventDefault();
        setError({ _html: "" });

        await axiosClient
            .post("/register", {
                username: userName,
                email,
                password,
                password_confirmation: passwordConfirmation,
                number,
            })
            .then(({ data }) => {
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    const finnalErrors: any = Object.values(
                        error.response.data.errors
                    ).reduce(
                        (accum: any, next: any) => [...accum, ...next],
                        []
                    );
                    console.log(finnalErrors);
                    setError({ _html: finnalErrors.join("<br />") });
                }
                console.log(error);
            });
    };

    return (
        <>
            {error._html && (
                <p
                    className="bg-red-500 text-center py-2 px-3 text-white rounded-lg"
                    dangerouslySetInnerHTML={{ __html: error._html }}
                ></p>
            )}
            {/* {userName} */}
            <form action="" onSubmit={onSubmit} className={""}>
                <Input
                    type="text"
                    name="username"
                    onChange={(ev: any) => setUserName(ev.target.value)}
                />
                <Input
                    type="email"
                    name="email"
                    onChange={(ev: any) => setEmail(ev.target.value)}
                />
                <Input
                    type="number"
                    name="number"
                    onChange={(ev: any) => setNumber(ev.target.value)}
                />
                <Input
                    type="password"
                    name="password"
                    onChange={(ev: any) => setPassword(ev.target.value)}
                />
                <Input
                    type="password"
                    name="confirm password"
                    onChange={(ev: any) =>
                        setPasswordConfirmation(ev.target.value)
                    }
                />

                <span className="flex flex-col w-ful items-center justify-center pt-5">
                    <Button text="Register" />
                    <small>
                        Already have an account?{" "}
                        <Link to="/login" className="text-purple-600 underline">
                            Sign in Here
                        </Link>
                    </small>
                </span>
            </form>
        </>
    );
};

export default Register;
