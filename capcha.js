function check()
{

let c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let capcha ="";


for (let i=0;i<6;i++)
{
 capcha += c.charAt(Math.floor(Math.random()* c.length));
}
document.getElementById("otp").value=capcha;
}

function valid()
{

    let a = document.getElementById("otp").value;
    // console.log(a);
    let b = document.getElementById("otp2").value;
    // console.log(b);

    if(a.match(b))
    {
    alert("thanks for submiting");
    }
    else
    {
    alert("Capcha is wrong");
    }
}
