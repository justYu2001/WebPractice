(function () {
    var topBar = document.querySelector('.top_bar');
    var block = document.querySelector('.block');
    var observerOptions = {
        threshold: [0, 0.25, 0.5, 0.75, 1]
    };
    var fadeinOption = {
        threshold: [0.1]
    };
    var observer = new IntersectionObserver(function (entry) {
        // let ratio=entry[0].intersectionRatio;
        // if(ratio<0.25){ 
        //     topBar.innerText='0%';
        //     block.style.opacity='0';
        // }
        // else if(ratio>=0.25&&ratio<0.5){ 
        //     topBar.innerText='25%';
        //     block.style.opacity='0.25';
        // }
        // else if(ratio>=0.5&& ratio<0.75){ 
        //     topBar.innerText='50%';
        //     block.style.opacity='0.5';
        // }
        // else if(ratio>=0.75&& ratio<1){ 
        //     topBar.innerText='75%';
        //     block.style.opacity='0.75';
        // }
        // else {
        //     topBar.innerText='100%';
        //     block.style.opacity='1';
        // }
        if (entry[0].intersectionRatio)
            block.classList.add('appear');
    }, fadeinOption);
    observer.observe(block);
})();
