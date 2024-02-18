let dropDown = document.getElementById("dropDownList");
let menu = document.getElementById("btnMenu");
let closebtn = document.getElementById("bxClose");

bntOpen = false;

menu.addEventListener('click', function() {

    if (bntOpen == false) {
        dropDownList.style.display = 'block'

        bntOpen = true
    }
    closebtn.addEventListener('click', () => {
        if (bntOpen == true) {
            dropDownList.style.display = 'none'
            bntOpen = false
        }
    })

})