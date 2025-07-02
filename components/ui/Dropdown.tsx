interface DropdownInputProps {
    label: string;
    options: string[];
    onSelect: (option: string) => void;
}

export const Dropdown = ({ label, options, onSelect }: DropdownInputProps) => {
    return (
        <div>
            <label htmlFor="isAllAges">{label}</label>
            <select>
                <option
                    value=""
                    onClick={(e) => onSelect(e.currentTarget.value)}
                >
                    select...
                </option>
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                        onClick={(e) => onSelect(e.currentTarget.value)}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
