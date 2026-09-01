// <> is a React fragment, used to group multiple elements without adding extra nodes to the DOM.

const Trainer = () => {
    const name = "JH";
    const age = 32;
    const specialty = "Java";
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Specialty: {specialty}</p>
        </>
    );


}
export default Trainer;