import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)

    const job = jobs.find(job => job.bookId === idInt);

    console.log(job);


    return (
        <div>
            <h1>job details</h1>
        </div>
    );
};

export default BookDetails;