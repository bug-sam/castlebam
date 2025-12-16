import React from "react";
import { ChangeEvent, useState } from "react";
import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface RadioSelectProps {
    name: string;
    label: string;
    options: { name: string; value: string }[];
    initialValue?: string;
    error?: FieldError;
    setValue: UseFormSetValue<any>;
    onChange: (e: ChangeEvent) => void;
}

export const RadioSelect = React.forwardRef<
    HTMLInputElement,
    RadioSelectProps & ReturnType<UseFormRegister<any>>
>(
    (
        {
            name,
            label,
            options,
            error,
            initialValue,
            setValue,
            onChange,
        }: RadioSelectProps,
        ref
    ) => {
    const [selected, setSelected] = useState(initialValue);

    const handleSelection = (e: ChangeEvent, value: string) => {
        onChange(e);
        setValue(name, value);
        setSelected(value);
    };

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            {options.map((option) => (
                <div key={option.name} className="flex">
                    <input
                        name={name}
                        value={option.value}
                        type="radio"
                        checked={option.value === selected}
                        onChange={(e) => handleSelection(e, option.value)}
                        ref={ref}
                    />
                    {option.name}
                </div>
            ))}
            {error && <span className="form-error">{error.message}</span>}
        </div>
    );
});
