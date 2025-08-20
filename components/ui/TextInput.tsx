import React, { ChangeEvent } from "react"
import { UseFormRegister } from "react-hook-form"
interface TextInputProps {
    name: string;
    label: string;
    placeHolder?: string;
    onChange?: (e: ChangeEvent) => void;
}

export const TextInput = React.forwardRef<
    HTMLInputElement,
    TextInputProps & ReturnType<UseFormRegister<any>>
>(({ name, placeHolder, onChange, label}: TextInputProps, ref) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input name={name} placeholder={placeHolder} ref={ref} onChange={onChange} />
    </div>
));
