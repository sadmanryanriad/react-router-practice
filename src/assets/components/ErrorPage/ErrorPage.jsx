import { useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className="flex items-center flex-col gap-6 justify-center h-screen">
            <h2 className="text-center text-5xl">Opps</h2>
            <p>{error.status}</p>
            <p>{error.statusText || error.message}</p>
        </div>
    );
};

export default ErrorPage;