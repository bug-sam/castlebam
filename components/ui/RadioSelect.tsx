import { ChangeEvent, useEffect, useState } from "react"
import { UseFormSetValue } from "react-hook-form"

interface RadioSelectProps<T> {
    name: string;
    label: string;
    options: {name: string, value: T}[];
    initialValue?: T;
    setValue: UseFormSetValue<any>;
}

export const RadioSelect = <T,>({ name, label, options, initialValue, setValue }: RadioSelectProps<T>) => {
    const [selected, setSelected] = useState(initialValue)

    useEffect(() => {
        setValue(name, selected);
    }, [selected])

    return (
        <div>
            <label htmlFor="isAllAges">{label}</label>
            {options.map(option => (
                <div key={option.name} className="flex">
                    <input type="radio" checked={option.value === selected} onChange={() => setSelected(option.value)} />
                    {option.name}
                </div>
            ))}
        </div>
    )
}
