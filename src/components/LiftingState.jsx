import { useState } from "react";
import AddTrainer from "./AddTrainer";
import ListTrainers from "./ListTrainers";

function LiftingState() {
    const [trainers, setTrainers] = useState([
        {
            name: "JH",
            age: 32,
            specialty: "Java"
        }
    ]);
    return (
        <>
            <h2>Lifting State</h2>
            <div>
                <ListTrainers trainers={trainers} />
                <AddTrainer setTrainers={setTrainers} />
            </div>
        </>
    );
}

export default LiftingState;