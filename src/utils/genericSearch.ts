export const genericSearch = <T>(object: T, property: keyof T, query: string): boolean => {
    const value = object[property];
    if (typeof value === "string" || typeof value === "number") {
        return value.toString().includes(query);
    }
    return false;
}
export default genericSearch