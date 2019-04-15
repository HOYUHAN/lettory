var numArr = []; 
function startrun() {
    var min = document.getElementById('Inputmin').value; //顯示 min 的值
    var max = document.getElementById('Inputmax').value; //顯示 max 的值
    numArr.length = 0; 
    for (idx = min; idx <= max; idx++) //顯示亂數裡的值
        numArr.push(idx);

    if (numArr.length <= 0) return;

    rd();

}
function rd() { //呼叫 rd()
    index = Math.floor(Math.random() * numArr.length); //產生亂數
    document.getElementById("Inputnumber").value = numArr[index]; //把產生亂術後的值放進 numArr 
}