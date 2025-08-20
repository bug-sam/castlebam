import { ChangeEvent, useState } from "react"
import { FieldError, UseFormSetValue } from "react-hook-form"

interface RadioSelectProps<T> {
    name: string;
    label: string;
    options: {name: string, value: T}[];
    initialValue?: T;
    error?: FieldError;
    setValue: UseFormSetValue<any>;
    onChange: (e: ChangeEvent) => void;
}

export const RadioSelect = <T,>({ name, label, options, error, initialValue, setValue, onChange }: RadioSelectProps<T>) => {
    const [selected, setSelected] = useState(initialValue)

    const handleSelection = (e: ChangeEvent, value: T) => {
        setSelected(value);
        setValue(name, value);
        onChange(e);
    };

    return (
        <div>
            <label htmlFor="isAllAges">{label}</label>
            {options.map(option => (
                <div key={option.name} className="flex">
                    <input type="radio" checked={option.value === selected} onChange={(e) => handleSelection(e, option.value)} />
                    {option.name}
                </div>
            ))}
            {error && <span className="form-error">{error.message}</span>}
        </div>
    )
}
