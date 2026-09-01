// import myPic from "./assets/me.jpg"
// <> is a React fragment, used to group multiple elements without adding extra nodes to the DOM.

const Trainer = ({ name, age, specialty }) => {

    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Specialty: {specialty}</p>
            {/* <img src="https://avatars.githubusercontent.com/u/41322826?v=4" />
            <img src={myPic} alt="" /> */}
        </>
    );


}

export default Trainer;