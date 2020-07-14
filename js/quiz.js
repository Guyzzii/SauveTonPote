var question1 = new question({
  charName: "Lena découvre qu'une photo d'elle compromettante circule sur facebook. </br> Elle décide de :",
  answerOptions: ["Elle ne fait rien et ignore la publication.", "Elle signale la publication."],
  answer: 2,
  pageNumber: "page-1",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

var question2 = new question({
  charName: "Lena marche dans les couloirs du lycée. Elle découvre que son casier est tagué …",
  answerOptions: ["Elle prévient son prof préféré, M. Mortureux.", "Elle court pleurer dans les toilettes."],
  answer: 3,
  pageNumber: "page-2",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

var question3 = new question({
  charName: "Réfugiée dans les toilettes, Lena est en pleure elle a honte. Elle décide :",
  answerOptions: ["D’appeller ses parents.", "De sècher les cours."],
  answer: 2,
  pageNumber: "page-3",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

var question4 = new question({
  charName: "En rentrant chez elle, elle reçoit des appels et des messages de son ami Pierre qui veut prendre de ces nouvelles. ",
  answerOptions: ["Elle décide de ne pas lui répondre.", "Elle lui répond et lui dit que tout va bien."],
  answer: 2,
  pageNumber: "page-4",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

var question5 = new question({
  charName: "5. What animal only sleeps five minutes a day?",
  answerOptions: ["A Chameleon", "A Koala", "A Beaver", "A Giraffe"],
  answer: 4,
  pageNumber: "page-5",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

var question6 = new question({
  charName: "6. What was the original color of Coca Cola?",
  answerOptions: ["Red", "Green", "Beige", "Purple"],
  answer: 2,
  pageNumber: "page-6",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

var question7 = new question({
  charName: "7. What perspires half a pint of fluid a day?",
  answerOptions: ["your scalp", "your armpits", "your feet", "your buttocks"],
  answer: 3,
  pageNumber: "page-7",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

var question8 = new question({
  charName:
    "8. In Ben Hur what modern thing can you see during the chariot race?",
  answerOptions: ["A waitress", "A car", "An Airplane", "A Telephone Pole"],
  answer: 2,
  pageNumber: "page-8",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

var question9 = new question({
  charName: "9. What was Karl Marx favorite color?",
  answerOptions: ["Green", "Red", "Blue", "Yellow"],
  answer: 2,
  pageNumber: "page-9",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

var question10 = new question({
  charName: "10. What animal only sleeps five minutes a day?",
  answerOptions: ["A Chameleon", "A Koala", "A Beaver", "A Giraffe"],
  answer: 4,
  pageNumber: "page-10",
  srcvid: "http://www.markhillard.com/sandbox/media/polina.mp4",
  imgsrc: "img/Tel1.png"
});

function question(option) {
  this.charName = option.charName;
  this.answerOptions = option.answerOptions;
  this.answer = option.answer;
  this.pageNumber = option.pageNumber;
  this.srcvid = option.srcvid;
  this.imgsrc = option.imgsrc;
}

var genQuestion = function(x) {
  var stage = $("#questions");
  stage.append('<div id="' + x.pageNumber + '" class="page"><div class="left"></div><div class="right"></div></div>');
  var questionsPage1 = '#' + x.pageNumber;
  var sright = '.right';
  var sleft = '.left';

  var selectr = $(questionsPage1 + ' ' + sright);
  var selectf = $(questionsPage1 + ' ' + sleft);


  /*selectf.append('<img style=" width: 300px; " src="' + x.imgsrc + '">');*/    
  selectr.append('<p class="charName">' + x.charName + "</p>");     
  selectr.append("<button class='btnwidth' id='btn1'>" + x.answerOptions[0] + "</button>");
  selectr.append("<button class='btnwidth' id='btn2'>" + x.answerOptions[1] + "</button>");
};

var count = 0;
var nextPage = 1;
var neextpage = 2;

function showScore() {
  $(".score").append(count + " out of 5");
}

function newGame() {
  var create1 = new genQuestion(question1);
  var create2 = new genQuestion(question2);
  var create3 = new genQuestion(question3);
  var create4 = new genQuestion(question4);
  var create5 = new genQuestion(question5);
  var create6 = new genQuestion(question6);
  var create7 = new genQuestion(question7);
  var create8 = new genQuestion(question8);
  var create9 = new genQuestion(question9);
  var create10 = new genQuestion(question10);
}

function restart() {
  count = 0;
  nextPage = 1;
  $("#start-page").show();
  $("#page-1").hide();
  $("#page-2").hide();
  $("#page-3").hide();
  $("#page-4").hide();
  $("#page-5").hide();
  $("#page-6").hide();
  $("#page-7").hide();
  $("#page-8").hide();
  $("#page-9").hide();
  $("#page-10").hide();
  $("#finish").hide();
  $("#questions").show();
  $(".score").empty();
  $("#finish").hide();
}

$(document).ready(function() {

  $("#start-page button").click(function() {
    $("#advs").css({"opacity":"0","display":"block", }).show().animate({opacity:1});
    setTimeout(function(){$("#advs").css({"opacity":"1","display":"none", }).show().animate({opacity:0}); }, 4000);
    setTimeout(function(){$("#advs").hide(); }, 8000);
    setTimeout(function(){ $("#hint").css("width", "100%"); }, 2500);
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 7000);
    setTimeout(function(){ $("#start-page").hide(); }, 2500);
    setTimeout(function(){ $(".logmenu").css("display", "initial"); }, 1000);
    setTimeout(function(){ $("#choose").show(); }, 1000);

  });

  $("#Vstory").click(function() {
    $("#choose").css({"opacity":"1","display":"none", }).show().animate({opacity:0});
    setTimeout(function(){$("#choose").hide(); }, 800);
    setTimeout(function(){$("#choosest").css({"opacity":"0","display":"block", }).show().animate({opacity:1}); }, 800);
  });

  $("#St1").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){ 
    $(".overlay").css("display", "block");
    $("#page-menu").hide();
    $("#page-1").show();
    $("#page-2").hide();
    $("#page-3").hide();
    $("#page-4").hide();
    $("#page-5").hide();
    $("#page-6").hide();
    $("#page-7").hide();
    $("#page-8").hide();
    $("#page-9").hide();
    $("#page-10").hide();
    $("#finish").hide();
    }, 1000);
  });

  newGame();

    $("#page-1 #btn2").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){
    $(".overlay").css("display", "none");
    $('html, body').css('background-image', 'url(./img/scene2.png)');
    $(".page").hide();
    $("#page-load").show();  
  }, 1000);
    setTimeout(function(){ $("#hint").css("width", "100%"); }, 5000);
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 7500);
    setTimeout(function(){
    $("#page-load").hide();  
    $(".overlay").css("display", "block");
    $('html, body').css('background-image', 'url(./img/scene3.png)'); 
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', '');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();
    nextPage++;
    $(".page").hide();
    $("#finish").hide();
    $("#page-" + nextPage).show();
  }, 7500);   
  });
  
  $("#page-1 #btn1").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){
    $(".overlay").css("display", "none");
    $('html, body').css('background-image', 'url(./img/scene2.png)');
    $(".page").hide();
    $("#page-load").show();  
  }, 1000);
    setTimeout(function(){ $("#hint").css("width", "100%"); }, 5000);
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 7500);
    setTimeout(function(){
    $("#page-load").hide();  
    $(".overlay").css("display", "block");
    $('html, body').css('background-image', 'url(./img/scene3.png)'); 
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', '');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();
    nextPage++;
    $(".page").hide();
    $("#finish").hide();
    $("#page-" + nextPage).show();
  }, 7500);   
  });

    $("#page-2 #btn2").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){
    $('html, body').css('background-image', 'none');
    $('.right').css('float', 'left');  
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', './video/vidéo_scène-2.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    nextPage++;
    $(".page").hide();
    $("#finish").hide();
    $("#page-" + nextPage).show();
    }, 1000);
  });

  $("#page-2 #btn1").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){
    $('html, body').css('background-image', 'none');
    $('.right').css('float', 'left');   
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', './video/vidéo_scène-2.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    nextPage++;
    $(".page").hide();
    $("#finish").hide();
    $("#page-" + nextPage).show();
    }, 1000);
  });


    $("#page-3 #btn2").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', './video/vidéo_scène-3.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();
    nextPage++;
    $(".page").hide();
    $("#finish").hide();
    $("#page-" + nextPage).show();  
    }, 1000);
  });

  $("#page-3 #btn1").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', './video/vidéo_scène-3.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();
    nextPage++;
    $(".page").hide();
    $("#finish").hide();
    $("#page-" + nextPage).show();  
    }, 1000);
  });

    $("#page-4 #btn2").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){
    $(".overlay").css("display", "none");
    $('html, body').css('background-image', 'url(./img/finish.png)');
    $(".page").hide();
    $("#finish").show(); 
    }, 1000);
  });

  $("#page-4 #btn1").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){
    $(".overlay").css("display", "none");
    $('html, body').css('background-image', 'url(./img/finish.png)');
    $(".page").hide();
    $("#finish").show();
    }, 1000);
  });

    $("#page-5 #btn2").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question5);
  });

  $("#page-5 #btn1").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question5);
  });

    $("#page-6 #btn2").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question6);
  });

  $("#page-6 #btn1").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question6);
  });

    $("#page-7 #btn2").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question7);
  });

  $("#page-7 #btn1").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question7);
  });

    $("#page-8 #btn2").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question8);
  });

  $("#page-8 #btn1").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question8);
  });

    $("#page-9 #btn2").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question9);
  });

  $("#page-9 #btn1").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question9);
  });

      $("#page-10 #btn2").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question10);
  });

  $("#page-10 #btn1").click(function() {
    $("#hero-vid").get(0).pause();
    $("#srcvideo").attr('src', 'https://static.videezy.com/system/resources/previews/000/002/648/original/kuala-lumpur-timelapse.mp4');
    $("#hero-vid").get(0).load();
    $("#hero-vid").get(0).play();  
    checkAnswer(question10);
  });

  $("#rp").click(function() {
    $("#hint").css("width", "100%");
    setTimeout(function(){ $("#hint").css("width", "0%"); }, 2000);
    setTimeout(function(){
    $(".overlay").css("display", "none");
    $('html, body').css('background-image', 'url(./img/homepagewall.png)');
    location.reload();
    }, 2000);
  });

});


