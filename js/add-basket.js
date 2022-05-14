if(localStorage.getItem('basket') == null) {
    localStorage.setItem('basket',JSON.stringify([]));
}

function AddToBasket(){
    let addBtns = document.querySelectorAll('.add-basket-btn');
    for(btn of addBtns) {
        btn.addEventListener('click',(e) => {
            e.preventDefault();
            let basket = JSON.parse(localStorage.getItem('basket'));
            let data_id = e.target.parentElement.parentElement.getAttribute("data-id");
            let prod_price = e.target.previousElementSibling.innerText;
            let prod_name = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
            let prod_category = e.target.parentElement.parentElement.firstElementChild.innerText;
            let prod_img = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.src;
            let priceNum = Number(prod_price)
            let existProd = basket.find(p => p.Id==data_id);
            console.log(prod_price)
            if(existProd == undefined) {
                basket.push({
                    Id: data_id,
                    Name: prod_name,
                    Price: priceNum,
                    Category: prod_category,
                    Image: prod_img,
                    Count: 1
                })
            }
            else{
                existProd.Count += 1;
            }
            localStorage.setItem('basket',JSON.stringify(basket));
        })
    }
    
}

AddToBasket();