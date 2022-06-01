// current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// changing color for time of day
var currentHour = moment().hours()
var timeBlock = $('textarea')
var saveBtn = $('.saveBtn')

setColor()
function setColor() {
    timeBlock.each(function() {
        var hour = $(this).attr('id')

        if (currentHour > hour) {
            $(this).addClass("past")
        } else if(currentHour == hour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })

}

saveBtn.on('click', function(event) {
    event.preventDefault()
    var timeBlockId = $(this).attr('id')
    var task = $(this).parent('td').siblings('td').children('textarea').val()
    console.log(task);
    localStorage.setItem(timeBlockId, task)
    getTasks()
})

getTasks()

function getTasks() {
    for (var i = 9; i < 18; i++) {
        var currentTask = localStorage.getItem(i)
        $('#' + i).text(currentTask)
    }
}

// storing data in local storage

