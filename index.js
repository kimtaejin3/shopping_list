const shop =  document.querySelector('.shop-list');
const item = document.querySelector('input[name="item"]')
const add = document.querySelector('.add');

function createList(itemName){
    const itemList = document.createElement('p');
    itemList.setAttribute('class','item');
    itemList.textContent = itemName;
    return itemList;
}

function createCancel(){
    const cancel = document.createElement('span');
    cancel.setAttribute('class','cancel');
    cancel.textContent = 'content';
    cancel.addEventListener('click',(event)=>{
        shop.removeChild(cancel.parentNode);
    });
    return cancel;
}

item.addEventListener("keypress", (event)=>{
    if(event.keyCode === 13){
        event.preventDefault();
        let itemName = item.value;
        if(itemName === ''){
            alert('아이템을 입력해주세요');
        }
        else{
            const itemList = createList(itemName);
            const cancel = createCancel();
    
            itemList.append(cancel);
            shop.append(itemList);
            item.value = '';
        }
    }

});

add.addEventListener("click", (event)=>{
    event.preventDefault();
    let itemName = item.value;
    if(itemName === ''){
        alert('아이템을 입력해주세요');
    }
    else{
        const itemList = createList(itemName);
        const cancel = createCancel();

        itemList.append(cancel);
        shop.append(itemList);
        item.value = '';
    }
});






