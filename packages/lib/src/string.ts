const persianArabicDigitsToEnglish = (str: string): string => {
    // Map for Persian/Arabic digits to English digits
    const persianToEnglishMap: { [key: string]: string } = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
    };

    return str.replace(
        /[\u0660-\u0669\u06f0-\u06f9]/g,
        (char: string): string => {
            return persianToEnglishMap[char] || char;
        }
    );
};

// Remove Arabic diacritics (marks like fatḥa, kasra, etc.)
const removeArabicDiacritics = (text: string): string => {
    return text.replace(/[\u064B-\u0652\u0670]/g, "");
};

// Optionally remove or replace non-Arabic characters (punctuation, etc.)
const removeNonArabic = (text: string): string => {
    return text.replace(/[^\u0600-\u06FF\s]/g, "");
};

// Handle common word variants (e.g., "ال" + "ك" -> "الك")
const handleWordVariants = (text: string): string => {
    return text.replace(/ال\s?ك/g, "الك"); // Example: Normalize "ال" + "ك"
};

const normalizeForSearch = (str: string): string => {
    // Mapping of characters to replace (without digits)
    const replacementMap: { [key: string]: string } = {
        // Variants of "ه"
        ة: "ه", // Arabic letter "Teh Marbuta" to "Heh"

        // Variants of "و"
        ؤ: "و", // Arabic letter "Waw with Hamza" to "Waw"

        // Variants of "ا" (Alif)
        آ: "ا", // Arabic letter "Alif with Madda" to "Alif"
        أ: "ا", // Arabic letter "Alif with Hamza Above" to "Alif"
        إ: "ا", // Arabic letter "Alif with Hamza Below" to "Alif"

        // Variants of "ي" (Ya)
        ي: "ی", // Arabic letter "Yeh" to "Persian Yeh"
        ئ: "ی", // Arabic letter "Yeh with Hamza Above" to "Persian Yeh"
        ى: "ی", // Arabic letter "Alife Maqsura" to "Persian Yeh"

        // Variants of "ك" (Kaf)
        ك: "ک", // Arabic letter "Kaf" to "Persian Kaf"

        // Additional Variants (commonly used in various contexts)
        لا: "لا", // "Lam Alef" ligature remains the same but can be replaced in special cases
    };

    return persianArabicDigitsToEnglish(
        removeArabicDiacritics(
            handleWordVariants(
                str
                    .toLowerCase()
                    .replace(
                        /[ةؤآأإيئكى]/g,
                        (match) => replacementMap[match] || match
                    )
            )
        )
    );
};

export {
    persianArabicDigitsToEnglish,
    removeArabicDiacritics,
    removeNonArabic,
    handleWordVariants,
    normalizeForSearch,
};
