"use client";

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
                <label htmlFor="name">VENUE NAME</label>
                <input id="name" name="name" placeholder="" />
            </div>
            <div>
                <label htmlFor="instagram">INSTAGRAM</label>
                <input id="instagram" name="instagram" type="" />
            </div>
            <div>
                <label htmlFor="location">LOCATION</label>
                <input id="location" name="location" type="" />
            </div>
            <div>
                <label htmlFor="isAllAges">
                    IS THIS VENUE AN ALL AGES VENUE?
                </label>
                <input id="isAllAges" name="isAllAges" type="" />
            </div>
            <div>
                <label htmlFor="isDefunct">IS THIS VENUE DEFUNCT?</label>
                <input id="isDefunct" name="isDefunct" type="" />
            </div>
            <Controller
                control={control}
                name="venueType"
                render={({ field: { onChange } }) => (
                    <Dropdown
                        label="TYPE OF VENUE?"
                        options={venueTypes}
                        onSelect={onChange}
                    />
                )}
            />
            <div>
                <label htmlFor="description">
                    WRITE A SHORT DESCRIPTION OF THE VENUE:
                </label>
                <input id="description" name="description" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
