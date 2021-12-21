import producs from './database.js'

// ==========================slide=============================
let slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// ============================================================================
const productList = document.getElementById('productList')


function totalAmount () {
    let totalMoneyValue = 0
    const totalPriceItem = document.querySelectorAll('.item-total-price')   
    totalPriceItem.forEach(function(value) {
        totalMoneyValue += parseInt(value.innerText)
    })
    const totalMoney = document.querySelector('#cart-total-money')
    totalMoney.textContent = `${totalMoneyValue}K`
}

let htmls = '';
producs.forEach(function(product) {
    let html = "";
    html = `    
    <div class="col l-3 m-4 c-6">
                    <div class="product-item">
                        <div class="item-img">
                            <div style="background-image: url(${product.img});"
                             class="product-item-img"></div>
                        </div>
                        <div class="product-item-info">
                            <h3 class="item-info-name">${product.name}</h3>
                            <div class="item-info-sub">
                                <p class="item-info-price">Giá: ${product.price}K</p>
                                <p class="item-info-origin">Xuất xứ: ${product.address}</p>
                                <p id="${product.id}" class="add-to-cart">
                                    <i class="ti-shopping-cart"></i>
                                    Thêm vào giỏ hàng
                                </p>
                            </div>
                        </div>
                    </div>            
    </div>
    `
    htmls = htmls.concat(html)
})

productList.innerHTML = htmls

const addBtn = document.querySelectorAll('.add-to-cart')
const cartList = document.querySelector('.cart-block-list')
const cart = []
const btnDeleteId = 0

addBtn.forEach(function(btn){
    btn.onclick = function(e){
        const productId = e.target.id
        cart.push(`
        <div class="cart-form-item">
                        <div class="form-item-img">
                            <div class="form-item-img-chil"> 
                                <img src="${producs[productId-1].img}" alt="">
                            </div>
                        </div>
                        <div class="form-item-info">
                            <div class="form-info-name">
                            ${producs[productId-1].name}
                            </div>
                            <div class="form-info-price">
                                Đơn giá: <span class="init-price">${producs[productId-1].price}</span> K
                            </div>
                        </div>
                        <div class="form-item-setting">                          
                            <input class="form-input-quantity" value="1" type="number">                           
                            <div class="form-item-total">
                                Thành tiền: <span class="item-total-price">${producs[productId-1].price}</span>K
                            </div>
                        </div>
                        <div index = "${cart.length}" class="form-item-delete">
                            Xóa
                        </div>
                    </div>
        `)
        cartList.innerHTML = cart.join('')
        totalAmount ()
    }
})

        
const cartForm = document.querySelector('.cart-form')
const cartBtnNav = document.getElementById('cart-nav')
const formCloseBtn = document.querySelector('.form-close-btn')
const payBtn = document.querySelector('.cart-footer-pay')

cartBtnNav.onclick = function(){

    const formInputQuantity = document.querySelectorAll('.form-input-quantity')
    formInputQuantity.forEach(function(btn) {
        btn.onclick = function(e) {
            const unitValue = parseInt(e.target.parentNode.previousElementSibling.lastElementChild.childNodes[1].innerText) 
            
            const totalElement = e.target.nextElementSibling.firstElementChild
            let totalPrice = parseInt(e.target.nextElementSibling.firstElementChild.textContent)
            let quantity = parseInt(e.target.value)
            totalPrice = unitValue*quantity
            totalElement.textContent = totalPrice
            totalAmount ()            
        }
    })
   
    cartForm.style.display = 'block'
    let formBtnDelete = document.querySelectorAll('.form-item-delete')
    formBtnDelete.forEach(function(btn){
    btn.onclick= function(e) {
        const cartItem = e.target.parentElement
        const priceRemove = e.target.previousElementSibling.lastElementChild.lastElementChild.innerText
        
        cart.splice(e.target.attributes.index.value,1)
        cartItem.remove()
        totalAmount ()
        formBtnDelete = document.querySelectorAll('.form-item-delete')
        let index = 0;
        for (btn of formBtnDelete) {            
            btn.attributes.index.value = index
            index++
        } 
    }
    totalAmount ()
   
})
}

formCloseBtn.onclick = function() {
    cartForm.style.display = 'none'
}

payBtn.onclick = function() {
    cartForm.style.display = 'none'
}

