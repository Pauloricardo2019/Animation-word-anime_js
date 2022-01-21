document.addEventListener('DOMContentLoaded', function(e){
    anime({
        targets: '#welcome path ',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: function(el, i){
            return i*150;
        },
        direction: 'alternate',
        loop: false,
    });    
})