a = 0; //a specifies a margin
var y;

function run(){

    y = setInterval(run,100); // setinterval means 2 parameters (1)function name (2)timer in miliseconds

    function run()
    
    {

        if (a == 1000)
        {
            clearInterval(y);
            a = 0; //this a is again car start from the margin 0
        }
        else
        {
            a+=10; //if car run then 5px increement in each move
            let x = document.getElementById("car");
            x.style.marginLeft = a + 'px';
        }
    }

}

function stop(){
    clearInterval(y);
}




