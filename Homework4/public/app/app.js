function initButtons() {
    $('#home').click(function () {
        $('#addNav div').removeClass('active');
        $('#home div').addClass('active');

        $('.text-wrapper').html(TREEFROG_SERVICE.getHomeContent());
        $('.btn-holder').html(TREEFROG_SERVICE.getHomeStartButton());
        getStarted();
    });
    $('.remove').click(function () {
        $('#modal').removeClass('modalActive');
    });
}

function getStarted() {
    $('.get-started').click(function (e) {
        console.log("Test");
        $('#home div').removeClass('active');
        $('#addNav div').addClass('active');

        $('.text-wrapper').html(TREEFROG_SERVICE.getGetStartedContent());
        $('.btn-holder').html(TREEFROG_SERVICE.getCreateNavButtons());
        $('.get-started').off('click');
    });
}

function modal() {
    $('#modal').addClass('modalActive');
}

$(document).ready(function () {
    initButtons();
    getStarted();
});


function createMainNav() {
    let mainVal = document.getElementById("MainNav").value;
    let mainValLwr = mainVal.toLowerCase();
    let navArray = [];
    navArray.push(document.getElementById("navArray1").textContent);
    navArray.push(document.getElementById("navArray2").textContent);
    navArray.push(document.getElementById("navArray3").textContent);
    navArray.push(document.getElementById("navArray4").textContent);
    navArray.push(document.getElementById("navArray5").textContent);
    console.log(navArray);

    if (mainValLwr === "") {
        alert("Please enter a value")
    } else if (navArray.includes(mainValLwr)) {
        alert("Please enter a different name")
    } else {
        $('.text-wrapper').html(TREEFROG_SERVICE.getQuill());
        $('.btn-holder').html("");
        $('#modal').removeClass('modalActive');
        document.getElementById("navName").innerHTML = "nav > " + mainValLwr;
        let quill = new Quill('#editor', {
            theme: 'snow'
        });
    }
}
