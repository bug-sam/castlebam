import React, { ChangeEvent } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface DropdownOption {
    name: string;
    value: string;
}
interface DropdownInputProps {
    name: string;
    label: string;
    options: DropdownOption[];
    isLoading?: boolean;
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
            isLoading,
            error,
            initialValue,
            onSelect,
            onChange,
        }: DropdownInputProps,
        ref
    ) => {
        return (
            <div>
                <label htmlFor="isAllAges">{label}</label>
                {isLoading ? (
                    <>Loading...</>
                ) : (
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
                        {options && options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                onClick={(e) =>
                                    onSelect && onSelect(e.currentTarget.value)
                                }
                            >
                                {option.name}
                            </option>
                        ))}
                    </select>
                )}
                {error && <span className="form-error">{error.message}</span>}
            </div>
        );
    }
);
