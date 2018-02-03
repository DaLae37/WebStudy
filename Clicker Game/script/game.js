$(function(){
  var once = prompt("몇 명을 폭풍속으로 인도하시겠습니까?",10)
  var heros = 0;
  var a = setInterval(herosOpacity,100)
  if(heros <= once){
      $("#keyboard").mousedown(function(){
          $(this).addClass("click")
          }).mouseup(function(){
          $(this).removeClass("click")
          heros++;
          })
      }
function moving(){
      window.location = 'http://kr.battle.net/heroes/ko/';
  }
function herosOpacity(){
      $("#player").html("접속자 수 :"+heros)
      $('#hero1').css('opacity',heros/once)
      if(heros >= once){
          heros = once
        $('#hero1').animate({
          left: 200,
          height: ($(this).height()*2),
          width: ($(this).width()*2)}, 1000).delay(100).toggle("slow");
          window.setTimeout(moving,1900)
          clearInterval(herosOpacity)
    }
  }
})
