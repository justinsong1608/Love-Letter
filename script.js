const heart = document.getElementById('heart');
const letter = document.getElementById('letter');

heart.addEventListener('click', function() {
    if (!heart.classList.contains('disabled')) { 
        if (letter.classList.contains('letter-open')) {
            letter.classList.remove('letter-open');
            heart.classList.add('disabled'); 
            heart.style.animation = 'none';
            setTimeout(() => {
                heart.style.animation = 'heartbeat 1.5s infinite, glow 2s infinite alternate';
                heart.classList.remove('disabled'); 
            }, 100);
        } else {
            letter.classList.add('letter-open');
            heart.classList.add('disabled'); 
            resetLetterScroll();
            heart.style.animation = 'heartMove 4s ease-in-out forwards'; 
            setTimeout(() => {
                heart.classList.remove('disabled'); 
            }, 4000); 
        }
    }
});

function resetLetterScroll() {
    letter.scrollTop = 0;
}
