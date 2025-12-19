"use client";

// This is the page that shows a list of all venues that have been accepted to the site!! :)
// users can also submit their venues that they think should be added to the list
// admins will have access to the list of submissions and they can accept them if they feel that they should be added to the site

import { SubmitVenueForm } from "@/components/forms/VenueForm";
import Rock from "@/components/ui/Rock";
import { Venue } from "@/lib/db/models/Venue";
import { useState } from "react";
import useSWR from "swr";

const Venues = () => {
    const { data, error, isLoading } = useSWR("/api/venues", (url: string) => fetch(url).then((res) => res.json()));

    const [openVenueId, setOpenVenueId] = useState<number | null>(null);

    const toggleVenue = (id: number) => {
        setOpenVenueId((prev) => (prev === id ? null : id));
    };

    return (
        <div className="p-4 flex gap-12">
            <div className="w-1/2 min-h-[300px] max-w-xl">
                <SubmitVenueForm />
            </div>

            {/* Rocks */}
            <div className="w-1/2 grid grid-cols-2 gap-6">
                {isLoading ? (
                    <>loading...</>
                ) : (
                    data.map((venue: Venue) => (
                        <Rock key={venue._id} data={venue}/>
                    ))
                )}
            </div>
        </div>
    );
};

export default Venues;
