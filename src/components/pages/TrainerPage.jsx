import { useEffect, useState } from "react";
import { useParams } from "react-router";

function TrainerPage() {

    const [trainer, setTrainer] = useState({
        id: null,
        name: "",
        age: null,
        specialty: ""
    });

    const { id } = useParams();

    useEffect(() => {
        const fetchTrainer = async () => {
            try {
                const res = await fetch(`http://localhost:8080/trainers/${id}`);
                const json = await res.json();
                setTrainer(json);
            } catch (error) {
                console.error("Error fetching trainer:", error);
            }
        };
        fetchTrainer();
    }, [id]);


    return (
        <>
            <h2>Trainer Page</h2>
            <div>
                <p>ID: {trainer.id}</p>
                <p>Name: {trainer.name}</p>
                <p>Age: {trainer.age}</p>
                <p>Specialty: {trainer.specialty}</p>
            </div>
        </>
    );
}

export default TrainerPage;