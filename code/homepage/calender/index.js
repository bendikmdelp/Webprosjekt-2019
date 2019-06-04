let monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let today = new Date();
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();

let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let monthAndYear = document.getElementById("monthAndYear");

let tasks=[
    {
        id: 1,
        name: "Creating a simple webapp",
        dueDate: "2019-06-05",
        description: "We need to create a simple webapp that fulfills the criteria"
    },
    {
        id: 2,
        name: "Finish app",
        dueDate: "2019-06-05",
        description: "We need to finish the app by the deadline"
    },
    {
        id: 3,
        name: "Creating cards",
        dueDate: "2019-06-01",
        description: "Need to create the card needed in the app"

    },
    {
        id:4,
        name: "Download tools",
        dueDate: "2019-05-29",
        description: "Download the tools needed to complete the assignment"
    }
];

renderCalender(thisMonth, thisYear);

function previousMonth() {
    thisYear = (thisMonth === 0) ? thisYear - 1 : thisYear;
    thisMonth = (thisMonth === 0) ? 11 : thisMonth - 1;
    renderCalender(thisMonth, thisYear);
}

function nextMonth() {
    thisYear = (thisMonth === 11) ? thisYear + 1 : thisYear;
    thisMonth = (thisMonth + 1) % 12;
    renderCalender(thisMonth, thisYear);
}

function changeDate() {
    thisYear = parseInt(selectYear.value);
    thisMonth = parseInt(selectMonth.value);
    renderCalender(thisMonth, thisYear);
}

function renderCalender(month, year) {

    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let firstDay = (new Date(year, month)).getDay();
    let body = document.getElementById("calendar-body"); //body
    //deletes old grid grids.
    body.innerHTML = "";

    //sets the heading to current month and year
    monthAndYear.innerHTML = monthsArray[month] + " " + year;
    selectMonth.value = month;
    selectYear.value = year;

    let date = 1;
    for (let i = 1; i < 7; i++) {
        // creates row
        let row = document.createElement("tr");
        //filing grid with dates
        for (let x = 1; x < 8; x++) {
            if (i === 0 && x < firstDay) {
                let gridText = document.createTextNode("");
                let grid = document.createElement("td");
                grid.appendChild(gridText); //sets each grid to empty
                row.appendChild(grid); //appends td to each row
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let grid = document.createElement("td");
                let gridText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {}
                grid.appendChild(gridText);
                // SKRIV IFFENE HER
                if(year === 2019 && month === 5 && date === 5){
                    let taskElement = document.createElement("div");
                    taskElement.classList.add("calendarTask")
                    taskElement.innerHTML = tasks[0].name;
                    grid.appendChild(taskElement)
                    console.log(year + " " + month + " " + date)
                }
                if(year === 2019 && month === 5 && date === 5){
                    let taskElement = document.createElement("div");
                    taskElement.classList.add("calendarTask")
                    taskElement.innerHTML = tasks[0].name;
                    grid.appendChild(taskElement)
                    console.log(year + " " + month + " " + date)
                }
                if(year === 2019 && month === 5 && date === 5){
                    let taskElement = document.createElement("div");
                    taskElement.classList.add("calendarTask")
                    taskElement.innerHTML = tasks[0].name;
                    grid.appendChild(taskElement)
                    console.log(year + " " + month + " " + date)
                }
                if(year === 2019 && month === 5 && date === 5){
                    let taskElement = document.createElement("div");
                    taskElement.classList.add("calendarTask")
                    taskElement.innerHTML = tasks[0].name;
                    grid.appendChild(taskElement)
                    console.log(year + " " + month + " " + date)
                }
                row.appendChild(grid);
                date++;
            }


        }

        body.appendChild(row); // appending every row to the body.


    }

}