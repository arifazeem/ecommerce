(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();
// function aaa() {
//     var tex;
//     var r = confirm("press a button");
//     if (r == true) {
//         tex = document.getElementsByClassName("good").reset();
//     }
//     else {
//         tex = 'you cansel it'
//     }


//     document.getElementById('hell').innerHTML = tex;
// }

function aaa() {
    var r = confirm("Are you sure you want to reset all text?");

    if (r == true) {
        document.getElementById("held").reset();
    }
    else {
        return r;
    }
}
var months = [1, 2, 3, 4];
months.splice(0, 4, 5);
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May'];

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}