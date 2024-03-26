import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center mt-48">
            <h3>Oops!!!</h3>
            <p>
            {error.status == "404" ? "Page not Found" : "Data not Found"}
            </p>
             <Link to="/"><button className="btn bg-[#23BE0A] text-white">Go back home</button></Link>
        </div>
    );
};

export default ErrorPage;