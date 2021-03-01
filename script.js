function myFunctionGood() {
        var x = document.getElementById('snackbarGood')

        x.className = "show";

        setTimeout(function(){
            x.className = x.className.replace("show","");
        }, 3000)
    }

    function myFunctionBad() {
        var x = document.getElementById('snackbarBad')

        x.className = "show";

        setTimeout(function(){
            x.className = x.className.replace("show","");
        }, 3000)
    }