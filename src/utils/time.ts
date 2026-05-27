export const getTimeSinceString = (pastDate: Date): string => {
    const now = new Date();
    const past = new Date(pastDate);

    let years = now.getFullYear() - past.getFullYear();
    let months = now.getMonth() - past.getMonth();
    let days = now.getDate() - past.getDate();

    if (days < 0) {
        months--;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years === 0 && months === 0) {
        return "Just now";
    }

    if (years > 0 && months > 0) {
        return `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'}`;
    }

    if (years > 0) {
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    }

    return `${months} ${months === 1 ? 'month' : 'months'}`;
};