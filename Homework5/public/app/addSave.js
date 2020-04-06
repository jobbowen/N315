$('#addData').click(function (e) {
    e.preventDefault();
    TREEFROG_SERVICE.saveData();
});

$('#getData').click(function (e) {
    TREEFROG_SERVICE.getData(displayData);
});

function displayData(addData) {
    let container = '<nav>';
    addData.forEach(function (doc) {
        let id = doc.id;
        let rawData = doc.data();
        container += `<a href="#" id="${id}">${rawData.content}<br></a>`
    });
    container += '</nav>';
    $("#outputData").html(container);
}
