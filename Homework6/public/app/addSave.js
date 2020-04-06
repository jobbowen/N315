function init() {
    $('#getData').click(function (e) {
        TREEFROG_SERVICE.getData(displayData);
    });
}

$('#addData').click(function (e) {
    e.preventDefault();
    TREEFROG_SERVICE.saveData(TREEFROG_SERVICE.getData(displayData));
});

function displayData(addData) {
    let container = '<nav>';
    addData.forEach(function (doc) {
        let id = doc.id;
        let rawData = doc.data();
        container += `<a class="update" href="#" id="${id}">${rawData.content}<br></a><span id="${id}" style="margin-left: 2%; color: red; cursor: pointer" class="delete">Delete ${doc.data().content}</span><br><br>`
    });
    container += '</nav>';
    $("#outputData").html(container);
    updateListener();
    deleteListener();
}

function updateListener() {
    $(".update").click(function (e) {
        let id = e.currentTarget.id;
        console.log(id);
        let newNavName = $("#update").val();
        console.log(newNavName);
        TREEFROG_SERVICE.updateData(id, newNavName, TREEFROG_SERVICE.getData(displayData));
    });
}

function deleteListener() {
    $(".delete").click(function (e) {
        let id = e.currentTarget.id;
        console.log(id);
        TREEFROG_SERVICE.deleteData(id, TREEFROG_SERVICE.getData(displayData))
    })
}

$(document).ready(function () {
    TREEFROG_SERVICE.initFirebase();
    init();
});
