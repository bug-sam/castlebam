import { z } from "zod";

export const booleanString = z
    .string()
    .refine((value) => value === "true" || value === "false", {
        message: "Value must be a string that is either 'true' or 'false'",
    })
    .transform((value) => value === "true");
