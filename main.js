function set(val) {
    document.getElementById("result").value += val
}
function func(event) {
    if (event.key == '0' || event.key == '1'  || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5'  || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9'    || event.key == '+' || event.key == '-'  || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}
var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        if(get()){
            get();
        }
        else{
            document.write("Invalid operation or expression");
        }
    }
}
function count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter&&str.charAt(position+1)==letter) 
      {
       letter_Count=-1;
       break;
      }
    else if(str.charAt(position) == letter){
        letter_Count+=1;
    }
  }
  return letter_Count;
}
function isNumeric(num){
    return !isNaN(num)
  }
function get() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    if(count(x,'*')==-1||count(x,'//')==-1||count(x,'+')==-1||count(x,'-')==-1||count(x,'.')==-1){
        alert("Invalid operator or expression");
    }
    else{
        document.getElementById("result").value =y;
    }
}
function clr() {
    document.getElementById("result").value = ""
}