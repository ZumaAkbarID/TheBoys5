import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";

const GuestLayout = () => {
    const { currentTokenUser }: any = useStateContext();

    if (currentTokenUser) {
        return <Navigate to={"/"} />;
    }

    return (
        <main className="w-full flex items-center justify-center h-screen px-10 ">
            <div className="flex flex-col gap-2 border shadow-lg rounded-xl justify-start py-10 px-5 w-full">
                <h1 className="text-center text-3xl font-bold">The Boys 5</h1>
                <div>
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default GuestLayout;
