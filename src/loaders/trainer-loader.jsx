const trainerLoader = async () => {
    try {
        const res = await fetch("http://localhost:8080/trainers");
        const json = await res.json();
        return { initialTrainers: json }
    } catch (error) {
        console.error("Error fetching trainers:", error);
    }
}

export default trainerLoader;