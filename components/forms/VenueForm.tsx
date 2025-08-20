"use client";

import { submitVenue } from '@/app/actions/venue'
import { FieldError, FieldErrors, SubmitHandler, useForm } from 'react-hook-form'
import { Dropdown } from '../ui/Dropdown'
import { locations, Venue, venueTypes } from '@/lib/db/models/Venue'
import { TextInput } from '../ui/TextInput';
import { RadioSelect } from '../ui/RadioSelect';

import "../../styles/forms.css"

export const SubmitVenueForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Venue>();

    const onSubmit: SubmitHandler<Venue> = (data) => {
        submitVenue(data);
    }

    const _register = (name: keyof Venue) => ({
        ...register(
            name,
            { required: {value: true, message: `${name} is required!`}}
        ),
        error: errors[name] as FieldError,
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput label='VENUE NAME' {..._register("name")} />
            <TextInput label='INSTAGRAM' {..._register("instagram")} />
            <Dropdown label='LOCATION' options={locations} {..._register("location")} />
            <RadioSelect
                label='IS THIS VENUE ALL AGES'
                options={[{name: "yes", value: true}, {name: "no", value: false}]}
                setValue={setValue}
                {..._register("allAges")}
            />
            <RadioSelect
                label='IS THIS VENUE DEFUNCT'
                options={[{name: "yes", value: true}, {name: "no", value: false}]}
                setValue={setValue}
                {..._register("defunct")}
            />
            <Dropdown
                label="TYPE OF VENUE?"
                options={venueTypes}
                {..._register("type")}
            />
            <TextInput label='WRITE A SHORT DESCRIPTION OF THE VENUE' {..._register("description")} />
            <button type="submit">Submit</button>
        </form>
    );
};
