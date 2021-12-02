var Prompt_Box = /** @class */ (function () {
    function Prompt_Box() {
    }
    Prompt_Box.prototype.show = function () {
        var i = 1;
        do {
            var id = prompt('Enter id: ');
            var name = prompt('Enter name: ');
            var marks = prompt('Enter marks: ');
            var choice = prompt('You want to continue? ');
            var Sdata = [id, name, marks];
            localStorage.setItem("StudentsId" + i, JSON.stringify(Sdata));
            var data = document.getElementById('allData');
            var term1 = document.createElement('div');
            term1.setAttribute('id', 'Id' + i);
            term1.setAttribute('style', 'color:#0026ff');
            data.appendChild(term1);
            var term2 = document.createElement('div');
            term2.setAttribute('id', 'Name' + i);
            term2.setAttribute('style', 'color:#0026ff');
            data.appendChild(term2);
            var term3 = document.createElement('div');
            term3.setAttribute('id', 'Marks' + i);
            term3.setAttribute('style', 'color:#0026ff');
            data.appendChild(term3);
            document.getElementById('Id' + i).innerHTML = "Id: " + id;
            document.getElementById('Name' + i).innerHTML = "Name: " + name;
            document.getElementById('Marks' + i).innerHTML = "Marks: " + marks;
            i++;
        } while (choice == 'y');
    };
    return Prompt_Box;
}());
window.onload = function () {
    var bttn = document.getElementById("Button1");
    bttn.onclick = function () {
        console.log('enter in click function');
        var obj = new Prompt_Box();
        obj.show();
    };
};
