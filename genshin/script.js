function openPage(div){

    const allDivs = document.querySelectorAll('div');
    div.classList.add('keep-this-div');

    allDivs.forEach(currentDiv => {
        console.log(currentDiv.classList);
        if (!(currentDiv.classList.contains('keep-this-div') || currentDiv.id =='main')) {

            currentDiv.style.transition = "opacity 0.5s";
            currentDiv.style.opacity = 0;

            const timeout = setTimeout(() => {
                currentDiv.remove();
            }, 1000);
        }
    });
    let main = document.getElementById('main');
    
    const timeout = setTimeout(() => {
        main.style.animation = "move 1s";
    }, 1000);
    
    const timeout2 = setTimeout(() => {
        div.style.width = '100%';
        
    }, 1000);

    const timeout3 = setTimeout(() => {
        if (div.classList.contains('pyro')) {
            window.location = 
            "character?data=" + btoa(JSON.stringify("pyro"));
        }
        if (div.classList.contains('hydro')) {
            window.location = 
            "character?data=" + btoa(JSON.stringify("hydro"));
        }
        if (div.classList.contains('anemo')) {
            window.location = 
            "character?data=" + btoa(JSON.stringify("anemo"));
        }
        if (div.classList.contains('electro')) {
            window.location = 
            "character?data=" + btoa(JSON.stringify("electro"));
        }
        if (div.classList.contains('dendro')) {
            window.location = 
            "character?data=" + btoa(JSON.stringify("dendro"));
        }
        if (div.classList.contains('cryo')) {
            window.location = 
            "character?data=" + btoa(JSON.stringify("cryo"));
        }
        if (div.classList.contains('geo')) {
            window.location = 
            "character?data=" + btoa(JSON.stringify("geo"));
        }
        
    }, 2000);

    
    console.log();
}
