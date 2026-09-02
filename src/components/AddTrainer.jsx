function AddTrainer({ setTrainers }) {

    function addTrainer(formData) {
        // Add trainer logic here
        console.log(formData);
        const newTrainer = {
            name: formData.get("name"),
            age: parseInt(formData.get("age"), 10),
            specialty: formData.get("specialty")
        };
        console.log(newTrainer);
        setTrainers(prevTrainers => [...prevTrainers, newTrainer]);
    }


    return (
        <>
            <h3>Add Trainer</h3>
            <form action={addTrainer}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" />
                <label htmlFor="specialty">Specialty:</label>
                <input type="text" id="specialty" name="specialty" />
                <button type="submit">Add Trainer</button>
            </form>
        </>
    );
}

export default AddTrainer;