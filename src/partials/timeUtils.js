const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // Exceptions for 11th, 12th, 13th, etc.
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
}

const toHumanDateString = (dateStr) => {
    const date = new Date(dateStr);
    const month = date.toLocaleString('en-US', { month: 'long' }); 
    const day = date.getDate();

    let year = "";

    // If it isn't this year
    if (date.getFullYear() != new Date().getFullYear()) {
        year = ` ${date.getFullYear()}`
    }

    return `${month} ${day}${getOrdinalSuffix(day)}${year}`;
}

export {toHumanDateString}