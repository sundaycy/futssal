team = ["PORT FC","Thakham","Black Pearl","Chonburi",
       "Thammasat","Bangkok Bts","Suratthani","Rajabhat Phetchaburi",
       "Rajnavy","Thai Army","Nonthaburi","Kasem Bundit","Cat FC","Mahasarakham"]
pts =  [66,62,57,56,54,52,32,29,27,24,23,21,19,1];
win =  [21,20,18,18,17,16,9,8,7,7,6,6,6,0];
lose = [2,4,5,6,6,6,12,13,13,16,15,17,19,25];
draw = [3,2,3,2,3,4,5,5,6,3,5,3,1,1];
match= [26,26,26,26,26,26,26,26,26,26,26,26,26,26];
gf =   [112,99,99,125,86,88,72,66,78,62,52,57,56,32];
ga =   [43,43,55,54,58,55,81,78,62,52,57,56,32,165];
down = [15,15,11,12,30,23,19,15,12,8,5,11,14,3];
picture =["por.jpg","tk.jpg","bp.jpg","cb.jpg","ts.jpg","bts.jpg",
         "srt.jpg","rb.jpg","rnv.jpg","am.jpg","non.jpg","kb.jpg","cat.jpg",
         "mk.jpg","table.jpg"]
goal =  ["15.jpg","155.jpg","11.jpg","12.jpg","30.jpg","23.jpg","19.jpg","15p.jpg",
         "129.jpg","8.jpg","5.jpg","111.jpg","14.jpg","3.jpg"]
function teamSelected(){
    var team = document.getElementById("teamList");
    var chosenTeamIndex = team.selectedIndex;
    return chosenTeamIndex;
}

function showImage(){
    userChoice = teamSelected();
    document.getElementById("teamImage").src
        =picture[userChoice];
    document.getElementById("goalImage").src
        =goal[userChoice];
    document.getElementById("pointTeam").value
        =pts[userChoice];
    document.getElementById("winTeam").value
        =win[userChoice];
    document.getElementById("loseTeam").value
        =lose[userChoice];
    document.getElementById("drawTeam").value
        =draw[userChoice];                                      
    document.getElementById("Team").value
        =match[userChoice];
    document.getElementById("GF").value
        =gf[userChoice];                                   
    document.getElementById("GA").value
        =ga[userChoice];
    document.getElementById("down").value
        =down[userChoice];
           
}

                



