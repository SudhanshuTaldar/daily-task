class Prompt_Box
{

show()
{

var i=1;

do{

var id = prompt('Enter id: ');
var name = prompt('Enter name: ');
var marks = prompt('Enter marks: ');
var choice = prompt('You want to continue? ');
var Sdata = [id,name,marks];

localStorage.setItem("StudentsId"+i,JSON.stringify(Sdata));

const data = document.getElementById('allData');

const term1 = document.createElement('div');
term1.setAttribute('id','Id'+ i);
term1.setAttribute('style','color:#0026ff');
data.appendChild(term1);

const term2 = document.createElement('div');
term2.setAttribute('id','Name'+ i);
term2.setAttribute('style','color:#0026ff');
data.appendChild(term2);

const term3 = document.createElement('div');
term3.setAttribute('id','Marks'+ i);
term3.setAttribute('style','color:#0026ff');
data.appendChild(term3);

document.getElementById('Id'+i).innerHTML = "Id: " + id;
document.getElementById('Name'+i).innerHTML = "Name: " + name;
document.getElementById('Marks'+i).innerHTML = "Marks: " + marks;
i++;

} while(choice == 'y')

}
}
window.onload = () =>
{
var bttn = < HTMLButtonElement > document.getElementById("Button1");
bttn.onclick = function()
{
console.log('enter in click function');
var obj = new Prompt_Box();
obj.show();
}
};