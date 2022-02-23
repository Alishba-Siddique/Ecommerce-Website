let ratingStarsInput = [...document.querySelectorAll('.rating-star')];

ratingStarsInput.map((star, index) => {
    star.addEventListener('click', () => {
        for(let i = 0; i < 5; i++)
        {
            if(i <= index){
                ratingStarsInput[i].src = '../IMG/fill star.png';
            }
            else{
                ratingStarsInput[i].src = '../IMG/no fill star.png';
            }
        }
    })
})