// Purpose: Stores a mutable reference that persists across renders without causing re-renders.

// Use Case: Accessing DOM elements, persisting values without re-render.

import React, { useState } from 'react'

function useRef() {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current && inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} ref={inputRef} />
        </div>
    )
}

export default useRef;