"use client"

// This is the page that shows a list of all venues that have been accepted to the site!! :)
// users can also submit their venues that they think should be added to the list
// admins will have access to the list of submissions and they can accept them if they feel that they should be added to the site

import { SubmitVenueForm } from "@/components/forms/VenueForm";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchVenues = async () => {
    const response = await fetch("/api/venues");
    return await response.json();
};

const Venues = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["shows-route-handler"],
        queryFn: fetchVenues,
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <div>Venues :)

            <p>test</p>


            </div>
            <SubmitVenueForm></SubmitVenueForm>
        </div>
    )
}

export default Venues;
