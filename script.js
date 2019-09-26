$(document).ready(function(){
  $(".color").click(function(){
    $(":root").css("--main-bg-color", "dodgerblue");
    $(":root").css("--alternate-bg-color", "#4169E1");
  });
});

$(document).ready(function(){
  $(".color1").click(function(){
    $(":root").css("--main-bg-color", "orange");
    $(":root").css("--alternate-bg-color", "#FF8C00");
  });
});

$(document).ready(function(){
  $(".color2").click(function(){
    $(":root").css("--main-bg-color", "#FF3333");
    $(":root").css("--alternate-bg-color", "#DC143C");
  });
});

$(document).ready(function(){
  $(".color3").click(function(){
    $(":root").css("--main-bg-color", "#9ACD32");
    $(":root").css("--alternate-bg-color", "#32CD32");
  });
});

$(document).ready(function(){
  $(".color4").click(function(){
    $(":root").css("--main-bg-color", "#FFFF00");
    $(":root").css("--alternate-bg-color", "#DBDB00");
  });
});
