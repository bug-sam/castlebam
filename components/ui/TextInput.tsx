import React, { ChangeEvent } from "react"
import { FieldError, UseFormRegister } from "react-hook-form"
interface TextInputProps {
    name: string;
    label: string;
    error?: FieldError;
    placeHolder?: string;
    onChange: (e: ChangeEvent) => void;
}

export const TextInput = React.forwardRef<
    HTMLInputElement,
    TextInputProps & ReturnType<UseFormRegister<any>>
>(({ name, label, placeHolder, error, onChange }: TextInputProps, ref) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input name={name} placeholder={placeHolder} ref={ref} onChange={onChange} />
        {error && <span className="form-error">{error.message}</span>}
    </div>
));
