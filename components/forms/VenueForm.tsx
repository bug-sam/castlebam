"use client";

import { submitVenue } from '@/app/actions/venue'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Dropdown } from '../ui/Dropdown'
import { locations, Venue, venueTypes } from '@/lib/db/models/Venue'
import { TextInput } from '../ui/TextInput';
import { RadioSelect } from '../ui/RadioSelect';

export const SubmitVenueForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Venue>();

    const onSubmit: SubmitHandler<Venue> = (data) => {
        submitVenue(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput label='VENUE NAME' {...register("name", { required: true })} />
            <TextInput label='INSTAGRAM' {...register("instagram", { required: true })} />
            <Dropdown label='LOCATION' options={locations} {...register("location", { required: true })} />
            <RadioSelect
                label='IS THIS VENUE ALL AGES'
                options={[{name: "yes", value: true}, {name: "no", value: false}]}
                setValue={setValue}
                {...register("allAges", { required: true })}
            />
            <RadioSelect
                label='IS THIS VENUE DEFUNCT'
                options={[{name: "yes", value: true}, {name: "no", value: false}]}
                setValue={setValue}
                {...register("defunct", { required: true })}
            />
            <Dropdown
                label="TYPE OF VENUE?"
                options={venueTypes}
                {...register("type", { required: true })}
            />
            <TextInput label='WRITE A SHORT DESCRIPTION OF THE VENUE' {...register("description", { required: true })} />
            <button type="submit">Submit</button>
        </form>
    );
};
