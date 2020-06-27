function getnumber(num){
    var result=document.getElementById("one");
    console.log(num)
    result.value+=num;
    var graph=document.getElementById("para");
    graph.innerHTML="hello this is calculator";


}


function clearbtn(){
    var result=document.getElementById("one");
    result.value="";
    var result1=document.getElementById("two");
    result1.value="";

}




function getAns(){

    var result=document.getElementById("one");
    result.value=eval(result.value);
}

function getInner(){
    var result=document.getElementById("one");
    var result1=document.getElementById("two");
    result1.value=result.value;






    














}

