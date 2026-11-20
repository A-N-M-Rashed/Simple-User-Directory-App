import { useRef, useState } from 'react';
const Home = () => {
    const inputRef = useRef(null);
    const [showVal, setOutput] = useState("");
    const handleFocus = (e) => {
        e.preventDefault();
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "green";

        setOutput(showVal);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const showVal = inputRef.current.value;
        setOutput(showVal);

    }
    return (
        <div className="px-20 py-5">
            <h2>Welcome to Simple Directory User App</h2>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col w-fit'>
                <p>Input Name: </p>
                <div className='flex gap-2'>
                    <input
                        type='text'
                        ref={inputRef}
                        className='border-2 rounded-lg'
                    />
                    <button
                        className='bg-amber-500 text-amber-50 rounded-lg p-1'
                        onClick={handleFocus}
                    >
                        Focus the input
                    </button>
                </div>
                <br />
                <button
                    type='submit'
                    className='bg-amber-900 text-amber-50 rounded-lg p-1'>
                    Submit
                </button>

            </form>
            {/* Show Input Value after submit  */}
            <p>Output: {showVal}</p>

        </div>
    )
}

export default Home; 