setInterval(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000);

let schedule = localStorage.getItem("schedule");
if (schedule) {
  schedule = JSON.parse(schedule);
} else {
  schedule = {};
}

const currentHour = parseInt(moment().format("H"));
$(".time-block").each(function () {
  const hour = parseInt($(this).attr("id").replace("hour-", ""));
  if (hour < currentHour) {
    $(this).addClass("past");
  } else if (currentHour === hour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

for (id in schedule) {
  $("#" + id)
    .children("textarea")
    .val(schedule[id]);
}

$(".saveBtn").on("click", function () {
  const val = $(this).siblings("textarea")[0].value.trim();
  const id = $(this).parent().attr("id");
  schedule[id] = val;
  localStorage.setItem("schedule", JSON.stringify(schedule));
});

