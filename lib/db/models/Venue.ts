export type Location = 
    "South Philly" |
    "West Philly" |
    "Temple" |
    "South Jersey" |
    "Other";

export type VenueType = 
    "Bar" |
    "DIY Space" |
    "House";

export interface Venue {
    name: string;
    location: Location;
    instagram: string;
    allAges: boolean;
    defunct: boolean;
    type: VenueType;
    description: string;
}

export const addVenue = () => {
}

export const removeVenue = () => {
}

export const updateVenue = () => {
}
