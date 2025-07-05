export const getAge = (birthDate: Date) => {
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

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