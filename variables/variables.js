<p id='demo'></p>
var a = 10;
{
    var a = 20;
}
document.getElementById('demo').innerHTML = a;
console.log(a);