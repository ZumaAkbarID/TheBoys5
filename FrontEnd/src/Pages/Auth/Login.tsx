import { Link } from "react-router-dom";
import Input from "../../Components/Input";
import Button from "../../Fragments/Button";
import { useState } from "react";
import { useStateContext } from "../../Context/ContextProvider";
import axiosClient from "../../axios";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ _html: "" });

    const { setCurrentUser, setUserToken }: any = useStateContext();

    const onSubmit = async (ev: any) => {
        ev.preventDefault();
        setError({ _html: "" });

        await axiosClient
            .post("/login", {
                username: userName,
                password,
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
                setError({ _html: error });
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
            <form action="" className="" onSubmit={onSubmit}>
                <Input
                    type="text"
                    name="username"
                    onChange={(ev: any) => setUserName(ev.target.value)}
                />
                <Input
                    type="password"
                    name="password"
                    onChange={(ev: any) => setPassword(ev.target.value)}
                />

                <span className="flex flex-col w-full pt-5 justify-center items-center">
                    <Button text="Login" />
                    <small>
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-purple-600 underline"
                        >
                            Register Here
                        </Link>
                    </small>
                </span>
            </form>
        </>
    );
};

export default Login;
