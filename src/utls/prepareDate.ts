const prepareData = (value: string) => {
    const newDate = new Date(value);
    return {
        year: newDate.getFullYear(),
        
    }
}
export default prepareData;
