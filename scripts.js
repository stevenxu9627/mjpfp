const today = new Date();
const thismonth = today.getMonth();
const thisyear = today.getFullYear();


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'];

const MonthAndYear = document.getElementById('MonthAndYear');
showCalendar(thismonth, thisyear);