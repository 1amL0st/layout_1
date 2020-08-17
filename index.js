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

function RemoveClassFromObjects(objs, class_name)
{
    for (let i = 0; i < objs.length; ++i) {
        objs[i].classList.remove(class_name);
    }
}

function BindSelectors(selectors)
{
    for (let j = 0; j < selectors.length; ++j) {
        selectors[j].addEventListener('click', e => {
            let parent = e.srcElement;
            RemoveClassFromObjects(selectors, 'active');
            parent.classList.add('active');
        });
    }
}

function InitImgSelectors(board_list)
{
    for (let i = 0; i < board_list.length; ++i)
    {
        let selectors = board_list[i].getElementsByClassName('img-selector')[0].children[0].children;
        BindSelectors(selectors);
    }
}

function InitTextSelectors(board_list)
{
    for (let i = 0; i < board_list.length; ++i)
    {
        let selectors = board_list[i].getElementsByClassName('text-selector')[0].children[0].children;
        BindSelectors(selectors);
    }
}

function InitBoards()
{
    let board_list = document.getElementsByClassName('board');
    InitImgSelectors(board_list);
    InitTextSelectors(board_list);
    GenerateRates();
}

function OnLoadFunction() 
{
    InitBoards();
}