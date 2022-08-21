const btnBuyTks = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector('.js-modal');
const modalClosess = document.querySelectorAll('.js-modal-close');
const modalContaier = document.querySelector('.js-modal-container');

console.log(btnBuyTks)

//hàm hiển thị modal buy tickets (add class open of modal)

for (const btnBuyTk of btnBuyTks) {
    btnBuyTk.addEventListener('click', buyTickets);
}

function buyTickets() {
    modal.classList.add('open');
}

//hàm ẩn hiển thị modal buy tickets (remove class open of modal)
for (const modalClose of modalClosess) {
    modalClose.addEventListener('click', hideBuyTicket);
}

function hideBuyTicket() {
    modal.classList.remove('open');
}

modal.addEventListener('click', hideBuyTicket);

modalContaier.addEventListener('click', function (event) {
    event.stopPropagation();
});

// Responsive
var header = document.getElementById("header");
var btnMenu = document.getElementById("js-mb-Menu-btn");
// console.log(header.clientHeight)
btnMenu.onclick = function () {
    var isClose = header.clientHeight === 46;
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
    // test[0].style.display = "none";
}

// Tự động đóng khi chon trong menu

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
console.log(menuItems)
var test = document.getElementsByClassName('subnav');
// (test: thể hiện cho class subnav _để chỉnh style)
// test[0].style.display = "inline";

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function (event) {

        // Định nghĩa và Cách sử dụng
        // Thuộc nextElementSibling tính trả về phần tử tiếp theo trong cùng một cấp độ cây.
        // Thuộc nextElementSibling tính ở chế độ chỉ đọc.
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        console.log(isParentMenu)
        if(isParentMenu){
            if(test[0].style.display === "block"){
                this.style.background = "black";
                this.style.color = "#fff";
                test[0].style.display = "none";
                return;
            }
            event.preventDefault();
            test[0].style.display = "block";
            this.style.background = "gray";
            // test[0].style.display = "inline";
            // header.style.height = "auto";
        }else{
            header.style.height = null;
            test[0].style.display = "none";
        }
    }
}