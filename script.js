const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function calculateAge() {
    const dateOfBirth = document.getElementById("date_of_birth").value;
    const givenDate = document.getElementById("given_date").value;
    
    // convert user input into date object
    let startDate = new Date(dateOfBirth);
    let endDate = new Date(givenDate);

    // extract the year, month, and date from user date input
    let stdobYear = startDate.getFullYear();
    let stdobMonth = startDate.getMonth() + 1;
    let stdobDate = startDate.getDate();

    // console.log(`${stdobYear} Year : ${stdobMonth} Months : ${stdobDate} Days: `);
    
    let givenYear = endDate.getFullYear();
    let givenMonth = endDate.getMonth() + 1;
    let givenDate1 = endDate.getDate();
    leapTest(givenYear);

    // console.log(`${givenYear} Year : ${givenMonth} Months : ${givenDate1} Days: `);

    if (
        stdobYear > givenYear || 
        (stdobMonth > givenMonth && stdobYear === givenYear) ||
        (stdobDate > givenDate1 && stdobMonth === givenMonth && 
            stdobYear === givenYear)
    ) {
        alert("Must be born");
        return;
    }


    let diffYear = givenYear - stdobYear;
    // console.log(diffYear)   
    let diffMonth, diffDate;
    if(givenMonth >= stdobMonth) {
        diffMonth = givenMonth - stdobMonth;
        // console.log(diffMonth);
    } else {
        diffYear--;
        diffMonth = 12 + givenMonth - stdobMonth;
        // console.log(diffMonth);
    }

    if (givenDate1 >= stdobDate) {
        diffDate = givenDate1 - stdobDate;
        // console.log(diffDate);
    } else {
        diffMonth--;
        let days = month[givenMonth - 2];
        diffDate = days + givenDate1 - stdobDate;

        if(diffMonth < 0) {
            diffMonth = 11;
            diffYear--;
        }
        // console.log(diffDate);
    }

showReasult(diffYear, diffMonth, diffDate)

}

const showReasult = (totalYears, totalMonths, totalDays) => {
    document.getElementById("years").textContent = `${totalYears} Year(s)`;
    document.getElementById("months").textContent = `${totalMonths} Month(s)`;
    document.getElementById("days").textContent = `${totalDays} Day(s)`;
    document.getElementById("output_box").style.display = "flex";
    document.getElementById("msg").style.display = "block";
}

// test for leap year

function leapTest(year) {
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        month[1] = 29;
        console.log("leap year");
    } else {
        month[1] = 28;
        console.log("Not leap year");
    }
}