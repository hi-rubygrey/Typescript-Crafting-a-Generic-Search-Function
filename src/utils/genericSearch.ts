// if any of the specified properties contain the query string return true
// otherwise return false.
export const genericSearch = <T>(object: T, properties: Array<keyof T>, query: string,shouldBeCaseSensitive: boolean = false): boolean => {
    if (query === "") {
        return true;
    }
    return properties.some((property)=>{
        const value = object[property];
        if (typeof value === "string" || typeof value === "number") {
            if (shouldBeCaseSensitive) {
                return value.toString().includes(query)
            }
            return value.toString().toLowerCase().includes(query.toLowerCase());
        }
        return false;
    })
}
export default genericSearch