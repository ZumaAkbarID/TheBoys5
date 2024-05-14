import { Navigate, Outlet } from "react-router-dom";

const GuestLayout = () => {
    // const {currentUser, currentTokenUser} = userStateContext();

    // if(!)
    // <Navigate to={"/dashboard"} />

    return (
        <main className="w-full flex items-center justify-center h-screen">
            <div className="flex flex-col gap-2 border shadow-lg rounded-xl items-center justify-start p-10">
                <h1 className="text-center text-3xl font-bold">The Boys 5</h1>
                <div>
                    <Outlet />
                </div>
            </div>
        </main>
    );
};

export default GuestLayout;
