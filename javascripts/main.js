"use strict";

console.log("I love this code!");

 var topArticle = document.getElementById("top-article");
 console.log("topArticle js", topArticle);

//jquery
var article = $(".article--main");
console.log("article jquery", article[0]);


var allButtons = document.getElementsByTagName("button");
console.log("allButtons by TagName", allButtons);
//rememeber this returns an array
var jbutton = $("button");
console.log("jbutton", jbutton, jbutton.html());

/////////////////////// Select by class ///////////////////////

// var mainArticles = document.getElementsByClassName("article--main");
//  console.log("mainArticles", mainArticles);

$(".article--main").each((arrayIndex, currentElement) => {
   // console.log("article--main", arrayIndex,$(currentElement).html());
   $(currentElement).html("hello world");
});


var umbreallaElement = $("[umbrella='open']");
   //  console.log("umbrella text: ", umbreallaElement.html());
   //console.log("umbrella text: ", umbreallaElement.next().html());


// Handling events
$("#destroyer").click((evt) => {
   if ($("#destroyer").text() == 'Hide Songs') {
      $(".song-container").hide(1000);
      $("#destroyer").text('Show Songs');
   } else {
      $(".song-container").show();
      $("#destroyer").text('Hide Songs');
   }
});


function functionIWantjQueryToExecute(songList) {
   console.log("who is this", songList);

   if (songList.songs) {
      for (var i = 0; i < songList.songs.length; i++) {
         var currentSong = songList.songs[i];
         $("#list-of-songs").append(`<h1>${currentSong.title}</h1>`);
         $("#list-of-songs").append(`<div>Performed by ${currentSong.artist}</div>`);
         $("#list-of-songs").append(`<div>On the album <strong>${currentSong.album}</strong></div>`);
      }
   }
}

function makeAPICall(url) {
   return $.ajax({
      url: url,
      dataType: "json"
   });
}

makeAPICall('javascripts/songs.json')
   .then((resolve) => {
      console.log("makeCallResolve", resolve);
      functionIWantjQueryToExecute(resolve);
   },
      (reject) => {
         console.log("SOMETHING WENT REALLY WRONG");
      });











