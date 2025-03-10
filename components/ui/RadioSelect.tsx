import { useState } from "react"

interface RadioSelectProps<T> {
    label: string,
    options: {name: string, value: T}[]
    initialValue?: T,
    onSelect: (option: T) => void,
}

export const RadioSelect = <T,>({ label, options, initialValue, onSelect}: RadioSelectProps<T>) => {
    const [selected, setSelected] = useState(initialValue)
    return (
        <div>
            <label htmlFor="isAllAges">{label}</label>
            {options.map(option => (
                <input type="radio" checked={option.value === selected}>
                    {option.name}
                </input>
            ))}
        </div>
    )
}
