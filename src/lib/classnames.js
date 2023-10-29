/**
 * Combines multiple class values into a single string using tailwind CSS class merging.
 * @param inputs Array of class values to be merged.
 * @returns Merged class value string.
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
