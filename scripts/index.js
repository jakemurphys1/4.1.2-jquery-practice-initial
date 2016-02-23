var $ = require("jquery");
$(document).ready(function() {


    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });

//calender stuff
var curmonth="February";
var curyear=2016;
var thisdate=0;
var firstoflast=30;
var firstdayofweek="Monday";

function fillcalender(){
  $("#Calender").append("<div id='calheader'><span class='leftarrow'>LEFT</span><span>" + curmonth + "</span><div class='dot'></div><span id='year'>" + curyear + "</span><span class='rightarrow'>RIGHT</span></div>"+
  "<div class='daysofweek'><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>");

$("#Calender").append("<div id='1' class='daysofweek'></div>");
switch (firstdayofweek) {
  case "Monday":
    thisdate=0;
  for(var p =1;p<8;p++){
    thisdate+=1;
$("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
  }
    break;
    case "Tuesday":
      thisdate=firstoflast;
        $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
        thisdate=0;
    for(var p =2;p<8;p++){
      thisdate+=1;
  $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
    }
      break;
      case "Wednesday":
        thisdate=firstoflast;
        for(var i =1;i<3;i++){
            $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
            thisdate+=1;
        }
          thisdate=0;
      for(var p =3;p<8;p++){
        thisdate+=1;
      $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
      }
        break;
        case "Thursday":
          thisdate=firstoflast;
          for(var i =1;i<4;i++){
              $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
              thisdate+=1;
          }
            thisdate=0;
        for(var p =4;p<8;p++){
          thisdate+=1;
        $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
        }
          break;
          case "Friday":
            thisdate=firstoflast;
            for(var i =1;i<5;i++){
                $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
                thisdate+=1;
            }
              thisdate=0;
          for(var p =5;p<8;p++){
            thisdate+=1;
          $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
          }
            break;
            case "Saturday":
              thisdate=firstoflast;
              for(var i =1;i<6;i++){
                  $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
                  thisdate+=1;
              }
                thisdate=0;
            for(var p =6;p<8;p++){
              thisdate+=1;
            $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
            }
              break;
              case "Sunday":
                thisdate=firstoflast;
                for(var i =1;i<7;i++){
                    $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
                    thisdate+=1;
                }
                  thisdate=0;
              for(var p =7;p<8;p++){
                thisdate+=1;
              $("#1").append("<h4 class='dateday'>" + thisdate +"</h4>");
              }
                break;
}


  for(var i =2;i<7;i++){
    $("#Calender").append("<div id=" + i +" class='daysofweek'></div>");
    for(var p =1;p<8;p++){
      thisdate+=1;
  $("#" + i).append("<h4 class='dateday'>" + thisdate +"</h4>");
    }
  }
  $(".rightarrow").click(function(){
    switch (curmonth) {
      case "December":
      curyear+=1;
        curmonth="January";
       firstoflast=28;
       firstdayofweek="Friday";
        break;
      case "January":
        curmonth="February";
       firstoflast="";
       firstdayofweek="Monday";
        break;
        case "February":
          curmonth="March";
          firstoflast=29;
          firstdayofweek="Tuesday";
          break;
          case "March":
            curmonth="April";
            firstoflast=28;
            firstdayofweek="Friday";
            break;
            case "April":
            firstoflast=0;
            firstdayofweek="Monday";
              curmonth="May";
              break;
    }
    $("#Calender").empty();
    fillcalender();
  });
  $(".leftarrow").click(function(){
    switch (curmonth) {
      case "January":
      curyear-=1;
        curmonth="December";
        firstoflast=30;
        firstdayofweek="Tuesday";
        break;
        case "February":
          curmonth="January";
          firstoflast=28;
          firstdayofweek="Friday";
          break;
          case "March":
            curmonth="February";
            firstoflast=28;
            firstdayofweek="Monday";
            break;
            case "April":
              curmonth="March";
              firstoflast=29;
              firstdayofweek="Tuesday";
              break;
    }
    $("#Calender").empty();
    fillcalender();
  });
  $(".dateday").click(function(){
    $(".highlight").removeClass("highlight");
    $(this).addClass("highlight");
  });
}
fillcalender();





});
