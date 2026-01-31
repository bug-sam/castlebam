"use client";

// This is the page that shows a list of all venues that have been accepted to the site!! :)
// users can also submit their venues that they think should be added to the list
// admins will have access to the list of submissions and they can accept them if they feel that they should be added to the site

import { SubmitVenueForm } from "@/components/forms/VenueForm";
import Rock from "@/components/ui/Rock";
import { Tabs, TabHeader, Tab, TabBody } from "@/components/ui/Tabs";
import Window from "@/components/ui/Window";
import { Venue } from "@/lib/db/models/Venue";
import useSWR from "swr";

const Venues = () => {
    const { data, error, isLoading } = useSWR("/api/venues", (url: string) =>
        fetch(url).then((res) => res.json())
    );

    return (
        <Window title="Venues">
            <Tabs>
                <Tab id="see">
                    <TabHeader>See Venues</TabHeader>
                    <TabBody>
                        {error ? (
                            <div>
                                Error:
                                <div>{JSON.stringify(error)}</div>
                            </div>
                        ) : (
                            <div className="p-4 flex gap-12">
                                {isLoading ? (
                                    <>loading...</>
                                ) : (
                                    data.map((venue: Venue) => (
                                        <Rock key={venue._id} data={venue} />
                                    ))
                                )}
                            </div>
                        )}
                    </TabBody>
                </Tab>
                <Tab id="add">
                    <TabHeader>Add a Venue</TabHeader>
                    <TabBody>
                        <div className="w-1/2 min-h-[300px] max-w-xl">
                            <SubmitVenueForm />
                        </div>
                    </TabBody>
                </Tab>
            </Tabs>
        </Window>
    );
};

export default Venues;
