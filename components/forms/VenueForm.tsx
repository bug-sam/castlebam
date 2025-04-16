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
        <div className="y2k-container">
            <form action={submitVenue} className="y2k-form">
                <h2 className="form-title">Submit a Venue</h2>
                <div>
                    <label htmlFor="name">Venue Name</label>
                    <input id="name" name="name" placeholder="" />
                </div>
                <div>
                    <label htmlFor="instagram">Instagram</label>
                    <input id="instagram" name="instagram" type="text" />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input id="location" name="location" type="text" />
                </div>
                <div>
                    <label htmlFor="isAllAges">Is this venue an all ages venue?</label>
                    <input id="isAllAges" name="isAllAges" type="checkbox" />
                </div>
                <div>
                    <label htmlFor="isDefunct">Is this venue defunct?</label>
                    <input id="isDefunct" name="isDefunct" type="checkbox" />
                </div>
                <Controller
                    control={control}
                    name="venueType"
                    render={({ field: { onChange } }) => (
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
        </div>
    );
}
