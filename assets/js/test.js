//current energy consumption update picture
function update_member_profit(number) {
    $("#member_profit").text(String(number));
}

$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBd3I7da0YqVq0Zotrte07BDYZiynjPYZI",
      authDomain: "python-training-5535c.firebaseapp.com",
      databaseURL: "https://python-training-5535c.firebaseio.com",
      projectId: "python-training-5535c",
      storageBucket: "python-training-5535c.appspot.com",
      messagingSenderId: "1048524435307"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref();

    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    // total_load_activePower = 0;

    var member_profitRef = firebase.database().ref("member");

    member_profitRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'member_profit') {
            update_member_profit(parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

});
