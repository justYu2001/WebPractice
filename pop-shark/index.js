(() => {

    const openMouthImage = document.querySelector('.open-mouth');
    const closeMouthImage = document.querySelector('.close-mouth');

    function openMouse() {
        closeMouthImage.classList.remove('show');
        openMouthImage.classList.add('show');
    }

    document.addEventListener('mousedown', openMouse);

    function closeMouse(){
        openMouthImage.classList.remove('show');
        closeMouthImage.classList.add('show');
    }

    document.addEventListener('mouseup', closeMouse);

    const audioList = document.querySelectorAll('audio');

    function randomAudio() {
        const audioListLength = audioList.length;
        const index = Math.floor(Math.random() * audioListLength);
        return audioList[index];
    }

    function audioPlay(){
        const audio = randomAudio();
        audio.currentTime = 0;
        audio.play();
    }

    document.addEventListener('mousedown', audioPlay);

    const storageKey = 'counter';

    const counterStorage = {
        get() {
            if(!localStorage.getItem(storageKey)) {
                localStorage.setItem(storageKey, '0');
            }
            return localStorage.getItem(storageKey);
        },
        save(value) {
            localStorage.setItem(storageKey, value);
        }
    }

    const counterElement = document.querySelector('.counter');

    function setCounterText() {
        counterElement.textContent = counterStorage.get();
    }

    setCounterText();

    function count() {
        let counter = Number.parseInt(counterStorage.get());
        counter++;
        counterStorage.save(counter.toString());
        setCounterText();
    }

    document.addEventListener('click', count);
})();