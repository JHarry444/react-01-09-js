import { useNavigate } from 'react-router';
import Trainer from './Trainer';
import { v4 } from "uuid";

function ListTrainers({ trainers }) {

    const navigate = useNavigate();
    return (
        <>
            <h3>List of Trainers</h3>
            {
                trainers.map(({ id, name, age, specialty }) => (
                    <div onClick={() => navigate(`/trainer/${id}`)}>
                        <Trainer key={v4()} name={name} age={age} specialty={specialty} />
                    </div>
                ))
            }
        </>
    );
}

export default ListTrainers;