"use client";

import { FieldError, SubmitHandler, useForm } from 'react-hook-form'
import { Dropdown } from '../ui/Dropdown'
import { TextInput } from '../ui/TextInput';
import { RadioSelect } from '../ui/RadioSelect';
import { submitShow } from '@/app/actions/show';
import { Show } from '@/lib/db/models/Show';

import "../../styles/forms.css"
import FileUpload from '../ui/FileUpload';



export const SubmitVenueForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Show>();

    const onSubmit: SubmitHandler<Show> = (data) => {
        submitShow(data);
    }

    const _register = (name: keyof Show) => ({
        ...register(
            name,
            { required: {value: true, message: `${name} is required!`}}
        ),
        error: errors[name] as FieldError,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput label='SHOW DATE' {..._register("date")} />
            <TextInput label='SHOW TIME' {..._register("time")} />
            <TextInput label='HOW MUCH DOES THIS SHOW COST' {..._register("cost")} />
            <RadioSelect
                label='IS THIS SHOW NOTAFLOF?'
                options={[{name: "yes", value: "true"}, {name: "no", value: "false"}]}
                setValue={setValue}
                {..._register("notaflof")}
            />
            <Dropdown
                label="WHAT VENUE IS THIS SHOW HAPPENING AT?"
                options={venues}
                {..._register("venue")}
            />
            <FileUpload label='UPLOAD A FLYER FOR THIS SHOW' {..._register("flyer")} />
            <button type="submit">Submit</button>
        </form>
    );
};
