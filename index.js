class doctor{
    constructor(name,age,experience){
        this.name=name;
        this.age=age;
        this.experience=experience;
    }
}
let data = [
    new doctor("Ammar",22,2),
    new doctor("Usman",22,3),
    new doctor("Ehtisham",24,5),
    new doctor("Nawaz Sharif",70,71),
    new doctor("Asif Zardari",80,85),
]

function add_clicked(){
    window.location.href='add.html';
}
function view_clicked(){
    window.location.href='view.html';
}
function modify_clicked(){
    window.location.href='modify.html';
}
function delete_clicked(){
    window.location.href='delete.html';
}

//view doctor
let index=0;

let promiseNext,promisePrevious;

function next_clicked(refreshChanges){
    promiseNext = new Promise((resolve, reject) => {
        if( index < data.length - 1 ){
            index++;
            resolve(index);
        }
        else{
            reject();
        }
    })
    refreshChanges();
}
function prev_clicked(refreshChanges){
    console.log("prev called");
    
    promisePrevious = new Promise((resolve, reject) => {
        if(index != 0){
            index--;
            resolve(index);
        }
        else{
            reject();
        }
    })

    refreshChanges();
}

promiseNext.then((value) => {
    console.log("Successful next");
    index = value;
})
promiseNext.catch(() => {
    console.log("Reached the end of array")
    index = index=data.length-1;
})

promisePrevious.then((value) => {
    console.log("Successful previous");
    index = value;
})
promisePrevious.catch(() => {
    console.log("Reached the beginning of array")
    index = 0;
})

function display(){
    document.getElementById("txtName").innerHTML=`Name: ${data[index].name}`
    document.getElementById("txtAge").innerHTML=`Age: ${data[index].age}`
    document.getElementById("txtExp").innerHTML=`Experience: ${data[index].experience}`
}