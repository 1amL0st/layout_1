function RandomWhole(min, max)
{
    return Math.random() * (max - min) + min;
}

function GenerateRates()
{
    let rates = document.getElementsByClassName('rate');
    for (let i = 0; i < rates.length; ++i) {
        let count = RandomWhole(1, 5);
        let stars = rates[i].children[0].children;
        for (let j = 0; j < count; ++j) {
            stars[j].classList.remove('fa-star-o');
            stars[j].classList.add('fa-star');
        }
    }
}

function OnLoadFunction() 
{
    GenerateRates();
}