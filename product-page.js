let ratingStarsInput = [...document.querySelectorAll('.rating-star')];

ratingStarsInput.map((star, index) => {
    star.addEventListener('click', () => {
        for(let i = 0; i < 5; i++)
        {
            if(i <= index){
                ratingStarsInput[i].src = 'fill star.png';
            }
            else{
                ratingStarsInput[i].src = 'no fill star.png';
            }
        }
    })
})
