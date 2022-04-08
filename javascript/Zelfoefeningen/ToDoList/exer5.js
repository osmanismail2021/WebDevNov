function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input")
    db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
}

function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) => {
        console.log(snapshot);
        let items = [];
        snapshot.docs.forEach((doc) =>{
            items.push({
                id: doc.id,
                ...doc.data()
            })
        })
        generateItems(items);
        
    })

}

function generateItems(items){

    let itemsHTML = "";
    items.forEach((item)=>{
        itemsHTML += `<div class="todo-item">
        <div class="check">
            <div data-id="${item.id}" class="check-mark ${item.status == "completed" ? "checked": "nothing"}">
           <img src="./assets/icon-check.svg" alt="">

            </div>
        </div>
        <div class="todo-text ${item.status == "completed" ? "checked": "nothing"}">
            ${item.text}
        </div>
    </div>

        <div  class="binmarkcont ${item.status == "completed" ? "checked" : "nothing"}"  data-id="${item.id}">
        <img class="binmark" src="./assets/icon-bin.svg" alt="icon-bin.svg"></div>
    </div>
             `

    })

    document.querySelector(".todo-items").innerHTML = itemsHTML;
    createEventListeners();
}

function createEventListeners(){
    let todoCheckMarks = document.querySelectorAll(".todo-item .check-mark");
    let bins = document.querySelectorAll(".binmarkcont");
    todoCheckMarks.forEach((checkMark)=>{
        checkMark.addEventListener("click", function(){
            markCompleted(checkMark.dataset.id);
        });
    });
    bins.forEach(bin => {
        bin.addEventListener("click", function () {
          deleteOne(bin.dataset.id);
        });
      });
    }

    function deleteOne(id) {
        let item = db.collection("todo-items").doc(id);
        item.delete();
        // alert('deleted'+ JSON.stringify(db.collection("todo-items").doc(id)))
        alert(item + id);
      }
function markCompleted(id){
    let item = db.collection("todo-items").doc(id)
    item.get().then(function(doc){
        if(doc.exists){
            let status = doc.data().status;
            if(status == "active"){
                item.update({
                    status: "completed"
                })
            } else if(status == "completed"){
                item.updated({
                    status: "active"
                })
            }
        }
    })

}



getItems();
 