import { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleTrainer() {
    const [trainer, setTrainer] = useState({
        name: "",
        age: 0,
        specialty: ""
    })

    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8080/trainers/${id}`)
            .then(response => response.json())
            .then(data => setTrainer(data))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <>
            <h2>Trainer Page</h2>
            <p>Name: {trainer.name}</p>
            <p>Age: {trainer.age}</p>
            <p>Specialty: {trainer.specialty}</p>
        </>
    );
}

export default SingleTrainer;