
var removeSvg = ' <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3 c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9 C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7 c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2 c0.6,0,1.1,0.5,1.1,1.1V7z"/> </g> <g><g> <path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/> </g> <g> <path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8 C14.6,17.7,14.3,18,14,18z"/> </g> </g></g></svg>  ';
var completeSvg = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATgSURBVGhD3VpLbBtFGE4FB3rhcUH0XB4nStbuAwGiIOgDUV4FpKpUBbVSQYgzBxAcOIAQEhJQReKAIjWedeJC0xzaJnLWm5AHNHHS8EihaYEcImiB5mUnaWInw/+P/xDv7u/G611vFj7pk1c7/8x8/84/M//suqZaiHQ2bNiUjN8dSYkoUl3DPSoOJ+7tErdpKfG8ZoijkZSe1gx9Gn4lRy2lT0UM0Q/Xn2lGbG80mbiFmlkjSLkOnvQuEJaA32t2weVTXFNtGPGd2Ca1HgzwSUYM/RwvrHLCiA7WpmLPUDfVg4pzQ09yIvwkhGlbbYe4i7r1FxD3h6CDGa7jalD1ZcZeoe69Y7tp3ghx/AXXWRCEB/j5i4nEDSSnMtzf27QenGjhOgiWomW7WX8TyXIHfArhcGKZoqWikVnLcCpFWKbrSF55gCXwMNdQGFhriIMk8/rAJTbI1akCZjXz2J0ktzSC2Cc80xBnSC6PSLv+HFsxhIRl+WmSbQPmTlVIO6rINCm3QjP13YxxoHyyt0W+ds6QO7ub2XIHMdG0o5DFMsZV5mYzLt853ysvZifkMmbyC3IPOMXZW2iIRpJfwH1m/a2wb3hIxSvj/v4z8lJ2kuRb8fHFQbZOMSFbnt16uuFmcgP2DVN/gTOsFqNAFDq/uEiynXjzx262rp2WtJ9Odqyh33ywMyE7/xojuU5M5+bl0V++U85y9Z0Un5IbuHeooydj5C8f7z4hh6evkmQrrs7PyQ9H0vIhcJSrW4owt8+SG+qsUfKM7Rcf6/qq5Hw4dfk3+UjXl2y91QiOTCkntpiJOzgDjts6GmXz75dUbA9N/ikP9LeydnaWciK3tCg/uNDP1nHDTW3Hbq/ZbDTcwxVyfPf8NyShgPzS0qrx/EBnk/xh6m+qsYLZfE4egT2Dq+OWmB9iuh7lCjl+NDJAMqzogMmLk9huj3sEltmRzS3IQwNJh33lFFFXjuBkHZvLkBwr8Kk/CiFUbH98bIRKV5ABJw6m2yx23gmOuAktJE7K1iujJMuKkcyEfPjr48rOHoaIBZhbr/oUTsVUoeVmshfz/Qt9SpgdfeOX5b6+03Iun6c7BSwB3x7uZdvySjXZEbiEcQar8fWhFORFuYLSInAO1v36PduGV8IhcFI5gfCyIWKocMKL8e34H2ric/W90rYhektR3vvpLEl2AnfsHbBIcPX8IGj/hNxAR2J7OSM3rB8dJulWvDXcw9r7RctJEdN4uDHHGZZLDJ30xBWSX8DPmXEXyZ974ksSSxqPgJtNnLEb7u5plqMz08oJTGPeGDJZO99o6HGSvwLYVHaxxi6JKcnhwaR8ouckW+4no+36DpJfBCnXwagMcBVCSVhpSbkT/6XXQREztodk84BRaWMrhoiwd5wiuaWBryNxNeAaCAUNkYkY8Y0k9/qACi87GggJNVM/QDLLAwxfHdfQWhIzEJJXPv43H3oQ+LkLNp2TfMPBEebsiYo/vS0DnwJ+kOQ6CIIYThWPBAf8VAwNZ+0dVY24OqXES9S9v8BlD0anle3YR+I+UfYS6wWYOkOHabsAH5jW2sVT1E1wwO8TEAKNEMezjKiyWKgrdD4BDBh4Joia4lk8rYGoPlhlJjnRSCzD4yna4sg6zhNhA77ZwD/GgGPqj2d4/e/bDt9RU/MPBxT3SVybuTsAAAAASUVORK5CYII=">';

document.getElementById('add').addEventListener('click' , function(){
var value = document.getElementById('item').value;

if(value) {
    addItemToDo(value);
    value = document.getElementById('item').value='';
}
});
function removeItem(e) {
    console.log(this.parentNode.parentNode);
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    parent.removeChild(item);
     
}
function completedItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    var target = (id ==='todo') ? document.getElementById('completed'):document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
    /*
    if (id === 'todo') {
        // it is a to do item to be completed
        
    }else{
        // it is already a completed item

    }
    */
    
}

function addItemToDo(text){
    var list = document.getElementById('todo');

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSvg;

    // ADD CLICK EVENT FOR REMOVING AN ITEM.
    remove.addEventListener('click', removeItem);


    var complete = document.createElement('button');
    complete.classList.add('complete');
    complete.innerHTML = completeSvg;
    
    // ADD CLICK EVENT FOR ADDING COMPLETED TASK/ITEM.
    complete.addEventListener('click', completedItem);
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);

    
}