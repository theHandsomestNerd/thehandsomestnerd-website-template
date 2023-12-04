const capitalizeArray = (theString: string[]) => {
    const place = theString.map((aString) => {

        const lower = aString.toLowerCase()
        const upper = aString.toUpperCase()

        return `"${upper[0] + lower.slice(1)}"`
    })

    // console.log("the capitalized array",place)
    return place
}
export default capitalizeArray