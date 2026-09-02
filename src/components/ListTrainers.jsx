import Trainer from './Trainer';
import { v4 } from "uuid";

function ListTrainers({ trainers }) {
    return (
        <>
            <h3>List of Trainers</h3>
            {
                trainers.map(({ name, age, specialty }) => (
                    <Trainer key={v4()} name={name} age={age} specialty={specialty} />
                ))
            }
        </>
    );
}

export default ListTrainers;