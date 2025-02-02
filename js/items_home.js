fetch("js/items.json")
        .then(response => response.json())
        .then(data => {
            

            const swiper_item_sale = document.getElementById("swiper_item_sale");

            data.forEach(proudect => {
                if (proudect.old_price) {

                    const disc_price = ((proudect.old_price -  proudect.price) / proudect.old_price * 100)
                    swiper_item_sale.innerHTML += `
                    
                                        <div class="proudect swiper-slide">

                        <div class="icons">
                            <span><i class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>

                        <span class="percent">%${disc_price}</span>

                        <div class="img_proudect">
                            <img src="${proudect.img}" alt="">
                            <img class="img_hover" src="${proudect.img_hover}" alt="">
                        </div>

                        <h3 class="name_proudect"><a href="http://">${proudect.name}</a></h3>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>

                        <div class="price">
                            <p><span>$${proudect.price}</span></p>
                            <p class="old_price">$${proudect.old_price}</p>
                        </div>
                    </div>
                    
                    
                    `
                }
            });
        })