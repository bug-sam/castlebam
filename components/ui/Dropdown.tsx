import React, { ChangeEvent } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface DropdownInputProps {
    name: string;
    label: string;
    options: string[];
    error?: FieldError;
    initialValue?: string;
    onSelect?: (option: string) => void;
    onChange?: (e: ChangeEvent) => void;
}

export const Dropdown = React.forwardRef<
    HTMLSelectElement,
    DropdownInputProps & ReturnType<UseFormRegister<any>>
>(
    (
        {
            name,
            label,
            options,
            error,
            initialValue,
            onSelect,
            onChange,
        }: DropdownInputProps,
        ref
    ) => (
        <div>
            <label htmlFor="isAllAges">{label}</label>
            <select
                name={name}
                defaultValue={initialValue || ""}
                onChange={onChange}
                ref={ref}
            >
                {initialValue || (
                    <option
                        value=""
                        onClick={(e) =>
                            onSelect && onSelect(e.currentTarget.value)
                        }
                    >
                        select...
                    </option>
                )}
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                        onClick={(e) =>
                            onSelect && onSelect(e.currentTarget.value)
                        }
                    >
                        {option}
                    </option>
                ))}
            </select>
            {error && <span className="form-error">{error.message}</span>}
        </div>
    )
);
