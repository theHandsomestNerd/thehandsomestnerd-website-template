const capitalizeArray = (theString: string[]) => {
    const place = theString.map((aString) => {

        const lower = aString.toLowerCase()
        const upper = aString.toUpperCase()

        return `"${upper[0] + lower.slice(1)}"`
    })

    // console.log("the capitalized array",place)
    return place
}

const sortByTitle = (array: any[])=>{
    if(!array)
        return undefined
    return array.sort((skillA, skillB) => {
        if (skillA.title === skillB.title)
            return 0
        return (skillA.title ?? "") < (skillB.title ?? "") ? -1 : 1
    })
}
export default {capitalizeArray, sortByTitle}