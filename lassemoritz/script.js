document.addEventListener("DOMContentLoaded", function () {
    const preBtn = document.querySelector('.pre-btn');
    const nxtBtn = document.querySelector('.nxt-btn');
    const productContainer = document.querySelector('.hproduct-container');
    
    
    const cardWidth = 250 + 40; 
    
    preBtn.addEventListener('click', () => {
        const currentScroll = productContainer.scrollLeft;
        if (currentScroll > 0) {
            productContainer.scrollLeft = currentScroll - cardWidth;
        }
    });

    nxtBtn.addEventListener('click', () => {
        const currentScroll = productContainer.scrollLeft;
        const maxScroll = productContainer.scrollWidth - productContainer.clientWidth;

        
        if (currentScroll + cardWidth < maxScroll) {
            productContainer.scrollLeft = currentScroll + cardWidth;
        } else {
            
            productContainer.scrollLeft = maxScroll;
        }
    });
});