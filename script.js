calendar = document.querySelector(".calendar")


for (let i = 0; i < 5; i++){
    let week = document.createElement("div");
    week.className = "week";
        for (let j = 0; j < 7; j++) {
            let day = document.createElement("div");
            day.className = "day"
            week.appendChild(day);    
        }
    calendar.appendChild(week);
}