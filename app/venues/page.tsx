"use client";

// This is the page that shows a list of all venues that have been accepted to the site!! :)
// users can also submit their venues that they think should be added to the list
// admins will have access to the list of submissions and they can accept them if they feel that they should be added to the site

import { SubmitVenueForm } from "@/components/forms/VenueForm";
import { useEffect, useState } from "react";

const fetchVenues = async () => {
    const response = await fetch("/api/venues");
    return await response.json();
};

const Venues = () => {
    // Replace API call with dummy venue data
    const venues = [
        {
            id: 1,
            name: "Ortliebs",
            location: "Philly",
            instagram: "@ortliebsbar",
            isAllAges: false,
            isDefunct: false,
            venueType: "bar",
            description: "Twin Peaks-esq bar in No Libs",
        },
        {
            id: 2,
            name: "Silver Age Hq",
            location: "philly",
            instagram: "@silverAgeHq",
            isAllAges: true,
            isDefunct: false,
            venueType: "basement",
            description: "disney",
        },
        {
            id: 3,
            name: "lovely place",
            location: "philly",
            instagram: "@castlebam",
            isAllAges: true,
            isDefunct: true,
            venueType: "house",
            description: "Used to be incredible. RIP 2018-2023.",
        },
    ];

    const [openVenueId, setOpenVenueId] = useState<number | null>(null);

    const toggleVenue = (id: number) => {
        setOpenVenueId((prev) => (prev === id ? null : id));
    };

    useEffect(() => {
        console.log(venues);
    }, [venues]);

    return (
        <div className="p-4 flex gap-12">
            <div className="w-1/2 min-h-[300px] max-w-xl">
                <SubmitVenueForm />
            </div>

            {/* Rocks */}
            <div className="w-1/2 grid grid-cols-2 gap-6">
                {venues?.map((venue: any) => (
                    <div key={venue.id} className="flex flex-col items-center">
                        {/* Rock Image Button */}
                        <button
                            className="rock-button"
                            onClick={() => toggleVenue(venue.id)}
                        >
                            <img src="rock.png" />
                        </button>

                        {/* Venue Details */}
                        {openVenueId === venue.id && (
                            <div className="venue-details">
                                <p>
                                    <strong>Name:</strong> {venue.name}
                                </p>
                                <p>
                                    <strong>Location:</strong> {venue.location}
                                </p>
                                <p>
                                    <strong>Instagram:</strong>{" "}
                                    {venue.instagram}
                                </p>
                                <p>
                                    <strong>Type:</strong> {venue.venueType}
                                </p>
                                <p>
                                    <strong>All Ages:</strong>{" "}
                                    {venue.isAllAges ? "Yes" : "No"}
                                </p>
                                <p>
                                    <strong>Defunct:</strong>{" "}
                                    {venue.isDefunct ? "Yes" : "No"}
                                </p>
                                <p>
                                    <strong>Description:</strong>{" "}
                                    {venue.description}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Venues;
