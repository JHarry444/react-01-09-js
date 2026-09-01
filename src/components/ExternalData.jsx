import trainers from '../data/trainers.json';
import Trainer from './Trainer';
import { v4 } from "uuid";
function ExternalData() {
    return (
        <>
            <h2>External Data</h2>
            {
                trainers.map(({ name, age, specialty: specialism }) =>
                    <Trainer key={v4()} name={name} age={age} specialty={specialism} />)
            }
        </>
    );
}

export default ExternalData;