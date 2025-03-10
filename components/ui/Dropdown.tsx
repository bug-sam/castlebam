import { ChangeEvent, Ref } from "react"
import { FieldValues } from "react-hook-form";
interface DropdownInputProps {
    label: string,
    options: string[],
    initialValue?: string,
    onSelect?: (option: string) => void
    onChange?: (e: ChangeEvent) => void,
    ref: Ref<HTMLSelectElement>
}

export const Dropdown = ({ label, options, initialValue, onSelect, onChange, ref}: DropdownInputProps) => {
    return (
        <div>
            <label htmlFor="isAllAges">{label}</label>
            <select defaultValue={initialValue || ""} onChange={onChange} ref={ref}>
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
    )
};
