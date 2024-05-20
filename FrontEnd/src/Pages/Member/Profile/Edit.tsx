import Modal from "../../../Fragments/Modal";
import { useStateContext } from "../../../Context/ContextProvider";
import Button from "../../../Fragments/Button";
import Input from "../../../Components/Input";
import { useState } from "react";
import axiosClient from "../../../axios";

type Props = {
    isEdit: any;
    setIsEdit: any;
};

const ProfileEdit = (props: Props) => {
    const { isEdit, setIsEdit } = props;
    const { currentUser, setCurrentUser }: any = useStateContext();

    // EDIT PROFILE
    const [fullName, setFullName] = useState("");
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [nim, setNim] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ _html: "" });

    const handleDataSubmit = async (ev: any) => {
        ev.preventDefault();
        setError({ _html: "" });

        await axiosClient
            .put(`user/${currentUser.id}/edit`, {
                fullName,
                city,
                number,
                nim,
            })
            .then(({ data }) => {
                // console.log(data);
                setCurrentUser(data);
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
        <Modal
            show={isEdit}
            onClose={() => setIsEdit(false)}
            closeable={true}
            maxWidth="xl"
        >
            <div className="bg-white w-full">
                <h1 className="text-center font-bold text-lg mb-3 pt-3 md:text-xl lg:text-2xl lg:pt-5 lg:mb-5 text-black">
                    Edit Profile
                </h1>
                <hr />

                {/* DATA DISPLAY*/}
                <form
                    className="flex flex-col px-5 pb-7 w-full lg:px-10"
                    action="#"
                    onSubmit={handleDataSubmit}
                >
                    <Input
                        type="text"
                        name="full name"
                        value={currentUser.fullName}
                        onChange={(ev: any) => setFullName(ev.target.value)}
                    />
                    <Input
                        type="text"
                        name="nim"
                        value={currentUser.nim}
                        onChange={(ev: any) => setNim(ev.target.value)}
                    />
                    <Input
                        type="text"
                        name="City"
                        value={currentUser.address}
                        onChange={(ev: any) => setCity(ev.target.value)}
                    />
                    <Input
                        type="text"
                        name="number"
                        value={currentUser.number}
                        onChange={(ev: any) => setNumber(ev.target.value)}
                    />
                    <Input
                        type="email"
                        name="email"
                        disable
                        value={currentUser.email}
                    />
                    <Input
                        type="password"
                        name="password"
                        disable
                        value={currentUser.password}
                    />

                    <span className="mt-5">
                        <Button text="Save" />
                    </span>
                </form>
                {/* END DATA DISPLAY*/}
            </div>
        </Modal>
    );
};

export default ProfileEdit;
