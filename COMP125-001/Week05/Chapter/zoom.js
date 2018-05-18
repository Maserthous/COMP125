/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder; //powerful code that gives you access to the variables in the first window (photo.htm)
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";//this is the big version of the image

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}

//add function for adding img to the favorites on first page

//for favorite removal try this syntax:
//self.parent.removeChild(self);
//where self is the current object

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
   }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;
//instead of:
//window.addEventListener("load", pageSetup, false);