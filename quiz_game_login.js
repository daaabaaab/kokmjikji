function send()
{
var number1 = document.getElementById("inp1").value;
var number2 = document.getElementById("inp2").value;
var actual_answer=parseInt(number1) * parseInt(number2);
var question_number="<h4>" + number1 + "X" + number2 +"</h4>";
var input_box= "<br>Answer : <input type='text' id='input_check_box'>";
var check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row= question_number + input_box + check_button ;
document.getElementById("output").innerHTML=row;
document.getElementById("inp1").value="";
document.getElementById("inp2").value="";
}
var questionTurn= "player1";  
var answerTurn= "player2";

function check()
{
var get_answer=document.getElementById("input_check_box").value;
if(get_answer==actual_answer)
{
if (answerTurn=="player1")
{
var updp1score=player1_score+1;
document.getElementById("player1_score").innerHTML=updp1score;    
}
else
{
var updp2score=player2_score+1;
document.getElementById("player2_score").innerHTML=updp2score;     
}    
}
if (questionTurn=="player1")
{
    questionTurn="player2";
    document.getElementById("player_question").innerHTML="Question turn is: "+player2_name;
}
else
{
    questionTurn="player1";
    document.getElementById("player_question").innerHTML="Question turn is: "+player1_name;    
}
}