// import myPic from "./assets/me.jpg"
// <> is a React fragment, used to group multiple elements without adding extra nodes to the DOM.

import { useContext } from "react";
import { themeContext } from "../context";

const Trainer = ({ name, age, specialty }) => {
    // debugger;
    console.log("hello");


    const { theme } = useContext(themeContext)
    return (
        <div className={theme}>
            <p>{`Name: ${name}`}</p>
            {age > 0 && <p>{`Age: ${age}`}</p>}
            {specialty && <p>{`Specialty: ${specialty}`}</p>}
            {/* <img src="https://avatars.githubusercontent.com/u/41322826?v=4" />
            <img src={myPic} alt="" /> */}
        </div>
    );



}

export default Trainer;