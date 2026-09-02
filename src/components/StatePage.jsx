import { useState } from "react";

function StatePage() {
    // useState is a hook that generates a state variable and a function to update it
    // setting the state will trigger the component to rerender
    // useState(0) -> default value of 0 for the state variable `count`
    // State MUST NOT BE MUTATED
    const [count, setCount] = useState(0);

    const [miles, setMiles] = useState(0);
    const [kilometers, setKilometers] = useState(0);

    const [trainerData, setTrainerData] = useState({
        name: "",
        age: 0,
        specialty: ""
    });

    const [error, setError] = useState("");

    const handleNameChange = (e) => {
        setTrainerData({ ...trainerData, name: e.target.value });
        if (e.target.value.trim() === "") {
            setError("Name cannot be empty");
        } else {
            setError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(trainerData);
    };
    return (
        <>
            <h2>State</h2>
            <section>
                <h3>Counter</h3>
                <button onClick={() => setCount(count - 1)}>-</button>
                <input type="number" readOnly value={count} />
                <button onClick={() => setCount(count + 1)}>+</button>
            </section>
            <section>
                <h3>Converter</h3>
                <label htmlFor="milesInput">Miles:</label>
                <input type="number" id="milesInput" value={miles} onChange={e => {
                    const newMiles = e.target.value;
                    setMiles(newMiles);
                    setKilometers(newMiles * 1.6);
                }} />
                <label htmlFor="kilometersInput">Kilometers:</label>
                <input type="number" id="kilometersInput" value={kilometers} onChange={e => {
                    const newKilometers = e.target.value;
                    setKilometers(newKilometers);
                    setMiles(newKilometers / 1.6);
                }} />
            </section>
            <section>
                <h3>Form</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="trainerName">Name:</label>
                    <input type="text" id="trainerName" name="name" value={trainerData.name} onChange={handleNameChange} />
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <br />
                    <label htmlFor="trainerAge">Age:</label>
                    <input type="text" id="trainerAge" name="age" value={trainerData.age} onChange={e => setTrainerData({ ...trainerData, age: e.target.value })} />
                    <br />
                    <label htmlFor="trainerSpecialty">Specialty:</label>
                    <input type="text" id="trainerSpecialty" name="specialty" value={trainerData.specialty} onChange={e => setTrainerData({ ...trainerData, specialty: e.target.value })} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </section>
            <footer>{new Date().toISOString()}</footer>
        </>
    );
}

export default StatePage;