function getRandomColors(){
  var randcolors = [];
  for(var i=0; i<3; i ++)
  {
    randcolors.push(Math.ceil(Math.random()*255));
  }
  return randcolors;
}

function changeBodyBackgroundColor() {
  var colors = getRandomColors();
  var backgroundcolor = "rgba("+colors[0]+","+colors[1]+","+colors[2]+",.8"+")";
  $(".hero, .main-button").css("background-color", backgroundcolor);
}

setInterval(function(){
  changeBodyBackgroundColor();
},5000)