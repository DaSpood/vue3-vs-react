import { useEffect, useState } from "react";
import DataForm from "../components/dataform/DataForm";

export default function FormView() {
    const [submitted, setSubmitted] = useState({});
    const [submissionCount, setSubmissionCount] = useState(0)

    useEffect(() => {
        if (submitted.firstname !== undefined
            && submitted.lastname !== undefined
            && submitted.age !== undefined) {
            setSubmissionCount(submissionCount + 1);
        }
    }, [submitted]);

    return (
        <>
            <h1>Formulaire:</h1>
            <DataForm onSubmit={setSubmitted} />
            <h1>Donnees soumises:</h1>
            <p>Nom: {submitted.lastname}</p>
            <p>Prenom: {submitted.firstname}</p>
            <p>Age: {submitted.age}</p>
            <p>Nombre de soumissions: {submissionCount}</p>
        </>
    );
}
