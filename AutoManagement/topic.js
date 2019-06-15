var topic = [
    "Off White",
    "Nike X Off White",
    "No Release",
    "Palace SkateBoard",
    "Nike X Off White",
    "Supreme",
    "No Release",
    "Adidas"
];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay)
{
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    //alert('k');
}

setMonthAndDay(6, 15);
