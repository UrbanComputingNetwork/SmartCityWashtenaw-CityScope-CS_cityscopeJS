/////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
CityScopeJS -- decoding 2d array of black and white lego bricks and sending to remote server.
"@context": "https://github.com/CityScope/", "@type": "Person", "address": {
"@type": "75 Amherst St, Cambridge, MA 02139", "addressLocality":
"Cambridge", "addressRegion": "MA",}, 
"jobTitle": "Research Scientist", "name": "Ariel Noyman",
"alumniOf": "MIT", "url": "http://arielnoyman.com", 
"https://www.linkedin.com/", "http://twitter.com/relno",
https://github.com/RELNO]
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// web-worker
const CVworker = new Worker('js/CVwebworker.js');
// size var
var size = 80

/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// APP LOGIC ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//call the media setup method at start
setupMedia(mediaToggle);
let matrixDiv = document.getElementsByClassName('transformedMatrix');
let matrixGridLocArray = MatrixTransform();
ColorPicker();
vizGrid();
interact();
