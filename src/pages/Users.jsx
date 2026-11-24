import { useState } from "react";

const Users = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const [savedUser, setSavedUser] = useState(null);

    const handleSave = (e) => {
        e.preventDefault();
        setSavedUser({ name, email, age });
    }

    const handleReset = () => {
        setName("");
        setEmail("");
        setAge("");
        setSavedUser(null);
    }

    // update object
    const [obj, setObj] = useState({
        name: "x",
        email: "x@gmail.com"
    })

    const handleObjUpdate = () => {
        setObj((prev) => ({
            ...prev,
            name: "y"
        }))
    }

    //update array
    const [arr, setArr] = useState(["js", "c++", "tailwind"])

    const handleArr = () => {
        setArr((prev) => [...prev, "python"])
    }

    return (
        <div className="px-20 py-5">
            <h2 className="border-b-2 min-w-fit text-2xl">User Form</h2>
            <form onSubmit={handleSave} className="m-2">
                <label>
                    Name:
                    <input
                        name="name"
                        value={name}
                        type="text"
                        className="border-2 rounded-lg m-1"
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        value={email}
                        type="email"
                        className="border-2 rounded-lg m-1"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Age:
                    <input
                        name="age"
                        value={age}
                        type="number"
                        className="border-2 rounded-lg m-1"
                        onChange={(e) => setAge(e.target.value)}

                    />
                </label>

                <button type="submit"
                    className="border-2 rounded-lg bg-amber-500 p-1">
                    Save
                </button>

                <button type="button" onClick={handleReset} className="border-2 rounded-lg bg-amber-500 p-1">
                    Reset
                </button>
            </form>
            {savedUser && (
                <div>
                    <p>Name: {savedUser.name}</p>
                    <p>Email: {savedUser.email}</p>
                    <p>Age: {savedUser.age}</p>
                </div>
            )}


            {/* //task-5 */}

            <div className="border-t-2 pt-2.5">
                <h2 className="text-2xl">Object State</h2>
                <p>Name: {obj.name}</p>
                <p>Email: {obj.email}</p>
                <button onClick={handleObjUpdate} className="border-2 rounded-lg bg-amber-500 px-2">Update</button>
            </div>

            <div className="border-t-2 pt-2.5">
                <h2 className="text-2xl">Array State</h2>
                <ul className="list-disc pl-5">
                    {arr.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
                <button onClick={handleArr} className="border-2 rounded-lg bg-amber-500 px-2">Add array</button>
            </div>
        </div>
    )
}

export default Users; 