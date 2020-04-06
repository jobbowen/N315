var TREEFROG_SERVICE = (function () {
        document.addEventListener("DOMContentLoaded", function () {
            try {
                let app = firebase.app();
                let features = ["auth", "database", "messaging", "storage"].filter(feature => typeof app[feature] === "function");
                document.getElementById('load');
            } catch (e) {
                console.error(e);
            }
        });

        let _initFirebase = function () {
            firebase.auth().signInAnonymously().then(function (result) {
                console.log("Connected");
                // _db = firebase.firestore();
            });
        };

        // let _addContact = function () {
        //     let data = {fName: "Todd", lName: "Jones"};
        //     _db.collection('contacts').add(data).then(function (docRef) {
        //         console.log('Document written with ID: ', docRef.id);
        //         _saveData();
        //     }).catch(function (error) {
        //         console.error('Error adding document: ', error);
        //     });
        // };

        let _saveData = function () {
            let _db = firebase.firestore();
            let form = document.getElementById("addForm");
            let data = {content: form.content.value.trim().toLowerCase(), nav: form.nav.value.trim().toLowerCase(), subNav: form.subNav.value.trim().toLowerCase()};
            _db.collection('pages').add(data).then(function (docRef) {
                console.log('Document written with ID: ', docRef.id);
                alert('Data added successfully. Check console for ID.');
            }).catch(function (error) {
                console.error('Error adding document: ', error);
            });
        };

        let _getData = function (callback) {
            let _db = firebase.firestore();
            _db.collection('pages').get().then((snapshot) => {
                callback(snapshot);
            })
        };

        let _updateData = function (id, newNavName) {
            let _db = firebase.firestore();
            _db.collection('pages').doc(id).update({content: newNavName}).then(alert('Update Successful'));
        };

        let _deleteData = function(id) {
            let _db = firebase.firestore();
            _db.collection('pages').doc(id).delete().then(alert(id + ' was deleted.'));
        };

        let _checkMainNavName = function (newNavName, callback) {
            let pages = _db.collection("Pages");
            pages.get().then(function (querySnapshot) {
                if (querySnapshot.empty) {
                    callback(newNavName)
                } else {
                    console.log(_db.collection('Pages').where('navName', '==', newNavName).get().then(function (querySnapshot) {
                            querySnapshot.forEach(function (doc) {
                                console.log(doc.id, '=>', doc.data());
                            });
                        })
                            .catch(function (error) {
                                console.log('Error getting documents: ', error);
                            })
                    );
                }
            });
        };

        var _getGetStartedContent = function () {
            let contentStr = `<h1>Treefrog CMS</h1><p>This is the screen where you will create your navigation and page content.</p><p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p><p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>`;

            return contentStr;
        };

        var _getCreateNavButtons = function () {
            let buttonString = `<span onclick="modal()" class="btn btn-dark">Create Main Nav</span><span class="btn btn-dark">Create Sub Nav</span>`;

            return buttonString;
        };

        let _getQuill = function () {
            let quillString = `<h1>Treefrog CMS</h1><p>Now you have your navigation set, now you can create your content. Below you will see your navigation name and a text editor. Create your content in the text editor and then click on "Save Page Info". Once you have have done that, click on "PREVIEW SITE" to see what your page looks like.</p><h2 id="navName"></h2><div id="editor"><p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><p><br></p></div><button id="saveData">Save Data</button><div id="quillContent"></div>`;

            return quillString;
        };

        let _preview = function () {
            let previewString = ``;

            return previewString;
        };

        var _getHomeContent = function () {
            let homeContent = `<h1>Welcome to the Treefrog CMS</h1>
    <p>
      Here you will create your content for your webpages. You won't be able
      to create all page elements but only the content for the page.
    </p>

    <p>
      You must first create the navigation. Once you have the navigation
      created you can add page content and publish the page. You can even
      add sub navigation as well.
    </p>

    <p>
      Your fist step is to click on the Add Navigation link and add your
      first navigation link.
    </p>`;

            return homeContent;
        };

        var _getHomeStartButton = function () {
            let startBtn = `<span class="btn btn-dark get-started">Get Started</span>`;

            return startBtn;
        };

        return {
            getGetStartedContent: _getGetStartedContent,
            getCreateNavButtons: _getCreateNavButtons,
            getHomeContent: _getHomeContent,
            getHomeStartButton: _getHomeStartButton,
            getQuill: _getQuill,
            getPreview: _preview,
            initFirebase: _initFirebase,
            checkMainNavName: _checkMainNavName,
            saveData: _saveData,
            getData: _getData,
            updateData: _updateData,
            deleteData: _deleteData
        };
    }
)();
