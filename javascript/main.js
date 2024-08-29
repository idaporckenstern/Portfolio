function adjustWidth(div) {
    const div = document.getElementsByClassName(div);
}

function getMinWidth(divs) {
    let min;
    let referenceDiv;

    divs.array.forEach(element => {
        referenceDiv = document.getElementsByClassName(element)
        console.log(element)
        if (typeof min === 'undefined')
        {
            min = referenceDiv.style.width;
        }
        else if (min > referenceDiv.style.width)
        {
            min = referenceDiv.style.width;
        }
    });
    return min;
}

function setSmallestWidth(divs)
{
    const min = getMinWidth(divs);
    divs.array.forEach(element => {
        
    });
}

function getMaxHeight(pics)
{
    
}