"use client"

import { submitVenue } from '@/app/actions/venue'
import { useForm } from 'react-hook-form'
import { Dropdown } from '../ui/Dropdown'
import { Venue, locations, venueTypes } from '@/lib/db/models/Venue'

export const SubmitVenueForm = () => {
    const { register } = useForm({
        defaultValues: {
            name: "",
            type: "DIY Space",
            location: "South Philly",
            instagram: "",
            allAges: true,
            defunct: false,
            description: "",
        } as Venue
    })

    return (
        <form action={submitVenue}>
            <div>
                <label htmlFor="name">What is the name of the Venue?</label>
                <input id="name" name="name" placeholder="" />
            </div>
            <div>
                <label htmlFor="instagram">What is the venue's instagram?</label>
                <input id="instagram" name="instagram" type="" />
            </div>
            <Dropdown
                label="What kind of Venue is this?"
                options={venueTypes}
                {...register("type")}
            />
            <Dropdown
                label="Where is this venue located?"
                options={locations}
                {...register("location")}
            />
            <div>
                <label htmlFor="description">Write a short description for this venue:</label>
                <input id="description" name="description" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
