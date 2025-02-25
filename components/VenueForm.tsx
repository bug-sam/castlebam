"use client"

import { submitVenue } from '@/app/actions/venue'

export const SignupForm = () => {
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
            <div>
                <label htmlFor="venueType">What type of venue is this?</label>
                <input id="venueType" name="venueType" type="" />
            </div>
            <div>
                <label htmlFor="description">Write a short description for this venue:</label>
                <input id="description" name="description" type="text" />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}
