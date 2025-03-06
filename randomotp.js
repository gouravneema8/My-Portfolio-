function check()
{
    let digits="0123456790";
    let otp="";


    for(i=0;i<6;i++)
    {
    otp+=digits[Math.floor(Math.random()*10)];

    // document.write(otp);
    }
  
    document.getElementById("otp").value=otp;
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
    alert("please fill the correct otp");
    }
}
