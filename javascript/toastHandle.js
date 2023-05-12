$(document).ready(function () {
    $("#btn-registration").click(function () {
        if ($("#registration-input").val() !== "") {
            $("#registration-success").toast("show");
            $("#registration-input").val("");
        }
    });
});
let naturalNumber = 10000000;

function nowDate() {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    $("#nowDate").html(`${day}-${month}-${year}`);
}

function increaseNumber() {
    naturalNumber += Math.floor(Math.random() * 9) + 1;
    $("#money").html(
        naturalNumber.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
    );
}

nowDate();
setInterval(increaseNumber, 1000);
