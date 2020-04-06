function addMainNav(navName) {
    console.log(navName);

    let pageFakeData = {
        "navName": navName,
        "content": "<h1>Hello</h1>",
        "subNavs": []
    };

    TREEFROG_SERVICE.saveData(pageFakeData);
}

function initButtons() {
    $('#home').click(function () {
        $('#addNav div').removeClass('active');
        $('#preview div').removeClass('active');
        $('#home div').addClass('active');
        $(".right-nav-holder").css("display", "none");


        $('.previewWrapper').html("");
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
        $('#home div').removeClass('active');
        $('#preview div').removeClass('active');
        $('#addNav div').addClass('active');
        $(".right-nav-holder").css("display", "none");


        $('.previewWrapper').html("");
        $('.text-wrapper').html(TREEFROG_SERVICE.getGetStartedContent());
        $('.btn-holder').html(TREEFROG_SERVICE.getCreateNavButtons());
        $('.get-started').off('click');
    });
}

function modal() {
    $('#modal').addClass('modalActive');
    document.getElementById("MainNav").value = "";
}

$(document).ready(function () {
    TREEFROG_SERVICE.initFirebase();
    initButtons();
    getStarted();
});


function createMainNav() {
    let newNavName = document.getElementById("MainNav").value.toLowerCase().trim();
    TREEFROG_SERVICE.checkMainNavName(newNavName, addMainNav());


    // if (!newNavName) {
    //     alert('inside if ', newNavName);
    // } else  {
    //     let isUnique = true;
    //
    //     $.each(fakeList, function (idx, val) {
    //         console.log(val.navName);
    //
    //         if (val.name ==) {
    //
    //         }
    //     })
    // }

    // if (newNavName === "" || undefined || null) {
    //     alert("Please enter a value");
    // } else if (nameArray.values(mainVal)) {
    //     alert("Please enter a different name");
    // } else {
    //     $('.text-wrapper').html(TREEFROG_SERVICE.getQuill());
    //     $('.btn-holder').html("");
    //     $('#modal').removeClass('modalActive');
    //     document.getElementById("navName").innerHTML = "nav > " + mainVal;
    //     var toolbarOptions = [['bold', 'italic', 'underline', 'strike'], ['blockquote', 'code-block', 'image', 'link'], [{header: 1}, {header: 2}], [{list: 'ordered'}, {list: 'bullet'}], [{script: 'sub'}, {script: 'super'}], [{indent: '-1'}, {indent: '+1'}], [{direction: 'rtl'}], [{size: ['small', false, 'large', 'huge']}], [{header: [1, 2, 3, 4, 5, 6, false]}], [{color: []}, {background: []}], [{font: []}], [{align: []}], ['clean']];
    //     var quill = new Quill('#editor', {modules: {toolbar: toolbarOptions}, theme: 'snow'});
    //     $('#saveData').click(function (e) {
    //         $(".right-nav-holder").css("display", "flex");
    //         e.preventDefault();
    //         var pageNav = $("#pageTitle").val();
    //         var justHtml = quill.root.innerHTML;
    //         $('#quillContent').html(justHtml);
    //         // setPages(justHtml);
    //         $(".content-wrapper").css("display", "block");
    //         $(".pageData").html(justHtml);
    //     });
    //         $('#preview').click(function (e) {
    //             console.log(quill.root.innerHTML);
    //             $('#home div').removeClass('active');
    //             $('#addNav div').removeClass('active');
    //             $('#preview div').addClass('active');
    //             $('.text-wrapper').html("");
    //             $('.previewWrapper').css("display", "block").html(quill.root.innerHTML);
    //         });
    // }
}
