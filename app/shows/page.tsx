"use client";

import { SubmitShowForm } from "@/components/forms/ShowForm";
import Rock from "@/components/ui/Rock";
import { Show } from "@/lib/db/models/Show";
import useSWR from "swr";

const Shows = () => {
    const { data, error, isLoading } = useSWR<Show[]>("/api/shows", (url: string) =>
        fetch(url).then((res) => res.json())
    );

    return error ? (
        <div>
            Error:
            <div>
                {JSON.stringify(error)}
            </div>
        </div>
    ) : (
        <div className="p-4 flex gap-12">
            <div className="w-1/2 min-h-[300px] max-w-xl">
                <SubmitShowForm />
            </div>

            {/* Rocks */}
            <div className="w-1/2 grid grid-cols-2 gap-6">
                {isLoading ? (
                    <>loading...</>
                ) : (
                    data?.map((show) => (
                        <Rock key={show._id} data={show} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Shows;
