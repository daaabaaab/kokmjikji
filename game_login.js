function addUser()
{
    var a= document.getElementById("inp1").value;   
    var b=document.getElementById("inp2").value;
    localStorage.setItem("player1_name",a);
    localStorage.setItem("player2_name",b);
    window.location="game_page.html";    
}