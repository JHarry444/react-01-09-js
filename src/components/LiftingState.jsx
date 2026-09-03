import { useCallback, useEffect, useReducer, useState, lazy, Suspense } from "react";
import AddTrainer from "./AddTrainer";
import { useLoaderData } from "react-router";
const ListTrainers = lazy(() => import("./ListTrainers"));

function LiftingState() {
    const trainerReducer = (trainers, action) => {
        switch (action.type) {
            case "SET_TRAINERS":
                return action.payload;
            case "ADD_TRAINER":
                return [...trainers, action.payload];
            default:
                return trainers;
        }
    };

    const { initialTrainers } = useLoaderData();

    const [trainers, dispatch] = useReducer(trainerReducer, initialTrainers);
    const [filter, setFilter] = useState("");
    const fetchTrainers = async () => {
        try {
            const res = await fetch("http://localhost:8080/trainers");
            const json = await res.json();
            dispatch({ type: "SET_TRAINERS", payload: json });
        } catch (error) {
            console.error("Error fetching trainers:", error);
        }
    }
    // useEffect allows us to hook into the react lifecycle
    useEffect(() => {
        const fetchTimer = setInterval(fetchTrainers, 5_000);

        // any function you rerturn from a useEffect will be called when the component unmounts or before the effect runs again
        return () => clearInterval(fetchTimer);
    }, []);
    // [] is the dependency array, leaving it blank ensures this effect runs only once, similar to componentDidMount

    // useEffect(() => {
    //     fetchTrainers();
    // }, [filter]);
    // this useEffect will run whenever the filter changes, ensuring the trainers list is updated accordingly
    // essentially a componentWillUpdate

    const addTrainer = useCallback((newTrainer) => dispatch({ type: "ADD_TRAINER", payload: newTrainer }), [dispatch]);
    return (
        <>
            <h2>Lifting State</h2>
            <div id="liftingState">
                <div>
                    <Suspense fallback={<div>Loading trainers...</div>}>
                        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Enter trainer name here..." />
                        <ListTrainers trainers={trainers.filter(trainer => trainer.name.toLowerCase().includes(filter.toLowerCase()))} />
                    </Suspense>

                </div>
                <AddTrainer addTrainer={addTrainer} />
            </div>
        </>
    );
}

export default LiftingState;