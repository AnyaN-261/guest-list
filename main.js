var people = [];
function submit()
{
var guest_name = document.getElementById("name_input").value;
people.push(guest_name);
var length = people.length;
console.log (length);
document.getElementById("names").innerHTML = people.toString();


}
function sort()
{
people.sort();
var i = people.join("<br>");
document.getElementById("sorted_names").innerHTML = i.toString();

}
function show()
{
    var i = people.join("<br>");
    document.getElementById("show_names").innerHTML = i.toString();

}
function searching()
{
var s= document.getElementById("searchname").value;
var found =0;
var j;
for(j=0; j<names.length; j++)
{
if(s==names[j]){
    found=found+1;
}
document.getElementById("name_input").innerHTML="name found "+found+" times/s";
console.log("found name"+found+" time/s")

}

}