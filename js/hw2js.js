//
// Name: Fanyou Meng
// Email: Fanyou_Meng@student.uml.edu
//
// 91.61 GUI Programming I
// Assignment 2:  Creating Your First Web Page
// Description: This is the javascript file for Assignment 2.


lastmod = document.lastModified     // get string of last modified date
lastmoddate = Date.parse(lastmod)   // convert modified string to date
if (lastmoddate == 0) {               // unknown date (or January 1, 1970 GMT)
  document.writeln("Last Modified: Unknown")
}
else {
  document.writeln("Last Modified: " + lastmod)
}
