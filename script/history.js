document.getElementById("clear-activity-history").addEventListener("click", function () {
    let del = document.getElementsByClassName("act");
    Array.from(del).forEach(function (element) {
        element.remove();
    })
})