import { normalizeForSearch } from "./string";

const normalizeAndCheck = (
    value: string | number,
    searchValue: string
): boolean => {
    return normalizeForSearch(String(value)).includes(searchValue);
};

const filterArrayBySearch = <T>(
    data: T[],
    searchValue: string | number,
    searchKeys?: string[]
): T[] => {
    const normalizedSearchValue =
        typeof searchValue === "string"
            ? normalizeForSearch(searchValue)
            : normalizeForSearch(String(searchValue));

    return data.filter((item) => {
        if (
            typeof item === "string" &&
            normalizeAndCheck(item, normalizedSearchValue)
        )
            return true;

        if (
            typeof item === "number" &&
            normalizeAndCheck(item, normalizedSearchValue)
        )
            return true;

        // If the item is an array, recursively search its elements
        if (Array.isArray(item)) {
            if (filterArrayBySearch(item, searchValue, searchKeys).length > 0)
                return true;
        }

        // If the item is an object (not null), recursively search its values
        if (typeof item === "object" && item != null) {
            for (const key in item) {
                // Skip the keys that are not accepted if searchKeys is defined
                if (searchKeys && !searchKeys.includes(key)) {
                    continue;
                }

                const value = item[key];

                // If the value is an array, search the array elements
                if (
                    Array.isArray(value) &&
                    filterArrayBySearch(value, searchValue, searchKeys).length >
                        0
                )
                    return true; // Found a match in the nested array

                // If the value is a string or number, normalize and check if it contains the search value
                if (
                    (typeof value === "string" || typeof value === "number") &&
                    normalizeAndCheck(value, normalizedSearchValue)
                )
                    return true; // Found a match in the string or number property

                // If the value is an object, search it recursively
                if (typeof value === "object" && value != null) {
                    if (
                        filterArrayBySearch([value], searchValue, searchKeys)
                            .length > 0
                    )
                        return true; // Found a match in the nested object
                }
            }
        }

        return false; // No match found
    });
};

export { filterArrayBySearch };
