import { useRef } from "react";

function AddTrainer({ addTrainer }) {

    async function formAction(formData) {
        // Add trainer logic here
        console.log(formData);
        const newTrainer = {
            name: formData.get("name"),
            age: parseInt(formData.get("age"), 10),
            specialty: formData.get("specialty")
        };
        console.log(newTrainer);
        const res = await fetch("http://localhost:8080/trainers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTrainer)
        });

        const addedTrainer = await res.json();

        addTrainer(addedTrainer);
        nameRef.current.focus();
    }

    const nameRef = useRef();


    return (
        <div>
            <h3>Add Trainer</h3>
            <form action={formAction} id="trainerForm">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" ref={nameRef} />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" />
                <label htmlFor="specialty">Specialty:</label>
                <input type="text" id="specialty" name="specialty" />
                <button type="submit">Add Trainer</button>
            </form>
        </div>
    );
}

export default AddTrainer;