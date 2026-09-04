import { useNavigate, useSearchParams } from 'react-router';
import { useState, useEffect } from 'react';
import Trainer from './Trainer';
import { v4 } from "uuid";

function FindTrainers() {

    const [trainers, setTrainers] = useState([]);


    useEffect(() => {
        fetch('http://localhost:8080/trainers')
            .then(response => response.json())
            .then(data => setTrainers(data))
            .catch(error => console.error(error));
    }, []);


    const query = useSearchParams()[0];

    console.log("QUERY:", query);

    const navigate = useNavigate();
    return (
        <>
            <h3>Find Trainers</h3>
            {
                trainers.filter(({ name }) => name.toLowerCase().includes(query.get('name')?.toLowerCase() || '')).map(({ id, name, age, specialty }) => (
                    <div onClick={() => navigate(`/trainer/${id}`)}>
                        <Trainer key={v4()} name={name} age={age} specialty={specialty} />
                    </div>
                ))
            }
        </>
    );
}

export default FindTrainers;