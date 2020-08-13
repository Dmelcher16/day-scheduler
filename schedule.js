setInterval(function(){
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
}, 1000)

$(".saveBtn").on("click", function(){
    const val = $(this).siblings("textarea")[0].value
    console.log(val)
  })