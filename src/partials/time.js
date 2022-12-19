
const toHumanTime = (timestamp) => { 
    let date = new Date(timestamp);

    return `${date.toDateString("en-IE")} - ${date.toLocaleTimeString("en-IE")}`
}

export { toHumanTime }