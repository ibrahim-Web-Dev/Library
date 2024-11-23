const closer = document.querySelectorAll(".closer");
const ready = document.querySelectorAll(".ready")
const addBook = document.querySelector("#addBook")
const bookName = document.querySelector("#bookName")
const authorName =document.querySelector("#authorName")
const pageNum =document.querySelector("#pageNumber")
const readyOrNot =document.querySelector("#ready-not")
const main = document.querySelector(".main")
const bookAdderDiv = document.querySelector("#book-adderDiv")
const addBooks = document.querySelector("#addBooks")
addBooks.addEventListener("click",function(){
    bookAdderDiv.style.display="grid"
})

function closerFunc(button){
    button.addEventListener("click", function() {
        const parent = button.parentElement;
        const grandParent = parent.parentElement;
        grandParent.remove();
    });
}
function readyFunc(button){
    button.addEventListener("click",function(){
        if (button.textContent=="Already read"){
            button.textContent="Not readed"
        }
        else{
            button.textContent="Already read"
        }
    })
}
closer.forEach(cl => {
  closerFunc(cl)
});

ready.forEach(i => {readyFunc(i)
   })
addBook.addEventListener("click",function(){
    if(bookName.value&& authorName.value&&pageNum.value){
        let div = document.createElement("div")
        div.classList.add("book")
        div.innerHTML=`                <div class="close">
        <img src="assets/close-thick.svg" class="icon button flex-start closer">
        <h3 class="right-margin">${bookName.value}</h3>
        </div>
        <h3>${authorName.value}</h3>
        <h3>${pageNum.value} Pages</h3>
        <button class="button ready">${readyOrNot.checked?"Already read":"Not readed" }</button>`
        const newCloseButton = div.querySelector(".close img");
        const newReadyButton = div.querySelector(".ready");
        closerFunc(newCloseButton)
        readyFunc(newReadyButton)
        pageNum.value=""
        authorName.value=""
        bookName.value=""
        readyOrNot.checked=false
        bookAdderDiv.style.display="none"
        main.appendChild(div)
    }

})