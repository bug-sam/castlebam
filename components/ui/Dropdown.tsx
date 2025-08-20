import React, { ChangeEvent } from "react"
import { UseFormRegister } from "react-hook-form"


interface DropdownInputProps {
    name: string;
    label: string;
    options: string[];
    initialValue?: string;
    onSelect?: (option: string) => void;
    onChange?: (e: ChangeEvent) => void;
}

export const Dropdown = React.forwardRef<
    HTMLSelectElement,
    DropdownInputProps & ReturnType<UseFormRegister<any>>
>(({ name, label, options, initialValue, onSelect, onChange }: DropdownInputProps, ref) => (
    <div>
        <label htmlFor="isAllAges">{label}</label>
        <select name={name} defaultValue={initialValue || ""} onChange={onChange} ref={ref}>
            {initialValue || (
                <option
                    value=""
                    onClick={e => onSelect && onSelect(e.currentTarget.value)}
                >
                    select...
                </option>
            )}
            {options.map(option => (
                <option
                    key={option}
                    value={option}
                    onClick={e => onSelect && onSelect(e.currentTarget.value)}
                >
                    {option}
                </option>
            ))}
        </select>
    </div>
));
