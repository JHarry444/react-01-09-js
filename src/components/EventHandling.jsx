function EventHandling() {
    return (
        <>
            <h2>Event Handling</h2>
            <div>
                <h3>onClick</h3>
                <button onClick={() => alert('Button clicked!')}>Click Me</button>
            </div>
            <div>
                <h3>onChange (actually onInput)</h3>
                <input type="text" onChange={(e) => console.log("TYPED", e.target.value)} />
            </div>
        </>
    );
}

export default EventHandling;