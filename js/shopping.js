//valables

let table = document.querySelector('#cart-content')

// alert('no')
//eventlisteners
eventlisteners()
function eventlisteners(){
    document.querySelector('.container-products').addEventListener('click' , byShopping);
    table.addEventListener('click' , removeRecord);

}


//function

function byShopping(e){
    if(e.target.classList.contains('btn-shopping')){
        let boxShopping = e.target.parentElement
        // console.log(boxShopping);
        getToInfoBox(boxShopping)
    }
}

function getToInfoBox(box){
    let boxInfo = {
        img : box.querySelector('img').src,
        title : box.querySelector('h3').textContent,
        price : box.querySelector('h4').textContent,
    }

    // console.log(boxInfo);

    showInCartSopping(boxInfo)
}

function showInCartSopping(boxInfo){
    let row = document.createElement('tr')

    row.innerHTML = `
        <tr> 
            <td>
                <img src="${boxInfo.img}" width ="100px" >
            </td>
            <td>
                <p>${boxInfo.title}</p>
            </td>

            <td>
                <p>${boxInfo.price}</p>
            </td>

            <td>
                <a class="remove">X</a>
            </td>

        </tr>
    `
    
    table.appendChild(row)
}

function removeRecord(e){
    e.preventDefault();
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove()
    }
}