function requiredReading(pageNumber, pagesOnHour, days) {
    let totalTime = pageNumber / pagesOnHour;
    let requiredHours = totalTime / days;

    console.log(requiredHours);
}