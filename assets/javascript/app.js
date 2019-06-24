$(document).ready(function () {
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCetfxI4nfJkc8PXbLNygiB_4vgMySCk5s",
        authDomain: "get-money-get-paid.firebaseapp.com",
        databaseURL: "https://get-money-get-paid.firebaseio.com",
        projectId: "get-money-get-paid",
        storageBucket: "get-money-get-paid.appspot.com",
        messagingSenderId: "688925742228",
        appId: "1:688925742228:web:26e13af25c9c22e3"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    database.ref().on("value", function (snapshot) {
        $(".schedule-data").empty();
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            var tName = childData.name;
            var tDestination = childData.destination;
            var tFrequency = childData.frequency;
            var tNextArrival = 0;
            var tMinutesAway = 0;

            $(".schedule-data").append("<tr><td>" + tName +
                "</td><td>" + tDestination +
                "</td><td>" + tFrequency +
                "</td><td>" + tNextArrival +
                "</td><td>" + tMinutesAway +
                "</td></tr>");

        });
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });



    $("#submit").on("click", function (event) {
        event.preventDefault();
        var name = $("#train-name").val();
        var destination = $("#destination").val();
        var firstTrain = $("#first-train").val();
        var frequency = $("#frequency").val();
        console.log(name);
        console.log(destination);
        console.log(firstTrain);
        console.log(frequency);
        $(".form-control").val("");
        //set the values in the database
        database.ref().push({
            name: name,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        trainTimes();
    });

    //train calculations
    function trainTimes() {
    };
});

