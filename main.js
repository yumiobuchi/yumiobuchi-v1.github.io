// // set up text to print, each item in array is new line
// var aText = new Array(
//   "  Hey! Welcome to my corner of the internet.", "",
//   "I'm a software developer & product strategist from NYC.","",
//   " I currently solve financial & digital problems for F500 clients at PwC, and have worked for Marvel as 1 of the 3 core members in their Business Intelligence unit","", "I'm also a writer with an emphasis on literary criticism.");

//   var iSpeed = 10; // time delay of print out
//   var iIndex = 0; // start printing array at this posision
//   var iArrLength = aText[0].length; // the length of the text array
//   var iScrollAt = 20; // start scrolling up at this many lines
   
//   var iTextPos = 0; // initialise text position
//   var sContents = ''; // initialise contents variable
//   var iRow; // initialise current row
   
//   function typewriter()
//   {
//    sContents =  ' ';
//    iRow = Math.max(0, iIndex-iScrollAt);
//    var destination = document.getElementById("typedtext");
   
//    while ( iRow < iIndex ) {
//     sContents += aText[iRow++] + '<br />';
//    }
//    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
//    if ( iTextPos++ == iArrLength ) {
//     iTextPos = 0;
//     iIndex++;
//     if ( iIndex != aText.length ) {
//      iArrLength = aText[iIndex].length;
//      setTimeout("typewriter()", 10);
//     }
//    } else {
//     setTimeout("typewriter()", iSpeed);
//    }
//   }
  
  

// typewriter();

window.addEventListener("load", () => {
  document.querySelector("body").classList.add("loaded"); 
 });

