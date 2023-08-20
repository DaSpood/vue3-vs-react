import { useState } from "react";

export default function DataForm({onSubmit}) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);

    const prepareSubmit = () => {
        if (firstname.trim() === "" || lastname.trim() === "" || age < 0) {
            alert("Invalide");
            return;
        }
        onSubmit({
            firstname: firstname,
            lastname: lastname,
            age: age,
        });
        setFirstname("");
        setLastname("");
        setAge(0);
    };

    return (
        <>
            <label form="lastname-input">Nom: </label>
            <input type="text" id="lastname-input" value={lastname} onChange={e => setLastname(e.target.value)} />
            <br />
            <br />
            <label form="firstname-input">Prenom: </label>
            <input type="text" id="firstname-input" value={firstname} onChange={e => setFirstname(e.target.value)} />
            <br />
            <br />
            <label form="age-input">Age: </label>
            <input type="number" id="age-input" value={age} onChange={e => setAge((Number)(e.target.value))} />
            <br />
            <br />
            <button onClick={() => prepareSubmit()}>Envoyer</button>
        </>
    );
}
