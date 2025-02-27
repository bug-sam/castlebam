"use client"

import { submitVenue } from '@/app/actions/venue'
import { useForm, Controller } from 'react-hook-form'
import { Dropdown } from '../ui/Dropdown'
import { venueTypes } from '@/lib/db/models/Venue'

export const SubmitVenueForm = () => {
    const { control } = useForm({
        defaultValues: {
            name: "",
            instagram: "",
            location: "",
            isAllAges: true,
            isDefunct: false,
            venueType: "",
            description: "",
        }
    })

    return (
        <form action={submitVenue}>
            <div>
                <label htmlFor="name">Venue Name</label>
                <input id="name" name="name" placeholder="" />
            </div>
            <div>
                <label htmlFor="instagram">Instagram</label>
                <input id="instagram" name="instagram" type="" />
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input id="location" name="location" type="" />
            </div>
            <div>
                <label htmlFor="isAllAges">Is this venue an all ages venue?</label>
                <input id="isAllAges" name="isAllAges" type="" />
            </div>
            <div>
                <label htmlFor="isDefunct">Is this venue defunct?</label>
                <input id="isDefunct" name="isDefunct" type="" />
            </div>
            <Controller
                control={control}
                name="venueType"
                render={({field: { onChange }}) => (
                    <Dropdown
                        label="What kind of Venue is this?"
                        options={venueTypes}
                        onSelect={onChange}
                    />
                )}
            />
            <div>
                <label htmlFor="description">Write a short description for this venue:</label>
                <input id="description" name="description" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
