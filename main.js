/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';

function to_fahrenheit(celsius) {
    let f = (celsius*9/5)+32;
    return f;
}
function to_celsius(fahrenheit) {
    let c = (fahrenheit-32)*5/9;
    return c;
}
function area_circle(radius) {
    let area = Math.PI*(radius**2);
    return area;
}
function volume_cylinder(radius,height) {
    let volume = area_circle(radius)*height;
    return volume;
}
function percent(score,total) {
    let mark = score/total;
    console.log(`You got ${Math.round(mark*100)}%!`);
}
function pythagoreon_theorem(a,b) {
    let c = Math.sqrt(a**2+b**2);
    return c
}
// this one is so janky, it works though.
function round(value,decimals) {
    let rounded = (Math.round(value*10**decimals))/10**decimals 
    return rounded
}