import { useState } from "react";

export function useInputValue(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    return {
        value,
        onChange: (e) => {setValue(e.target.value)},
    };
}
