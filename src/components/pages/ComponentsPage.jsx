import Input from "../Input";
import Trainer from "../Trainer";

function Components() {
    return (
        <div>
            <h2>Components</h2>
            <input type="text" minLength={1} maxLength={10} />
            <br />
            <Input />
            <br />
            <Input />
            <br />
            <Input />
            <br />
            <Trainer name="JH" age={32} specialty={"Java".toUpperCase()} />
            <Trainer name="CG" age={33} specialty="Web" />
            <Trainer name="PB" age={28} />
            <p>1 + 1</p>
            <p>{1 + 1}</p>
        </div>
    );
}

export default Components;