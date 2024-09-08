var y1 = 12;

// function fRound(val, dec) {

//     let valFd = Number(val), dc = Number(dec)
//     valFd = Number(valFd.toFixed(dc));
//     return valFd
// }
function Tng(){
        var x = document.getElementById('Nm').value;
        var y = document.getElementById('Dc').value;
        if (y == 0) 
        {
            return "Талбай олох боломжгүй";        }
        
        else 
        {
        var sq = x / y;
        // sq = fRound(sq, 2)
        // return "Талбай"+ sq.toString()
        return "Талбай" + + sq
        }
    }


