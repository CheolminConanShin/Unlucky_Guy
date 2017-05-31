var data = {
    rank: [
        {
            user: "Jacky",
            items: 12
        },
        {
            user: "Leia",
            items: 8
        },
        {
            user: "May",
            items: 4
        },
        {
            user: "Conan",
            items: 3
        },
        {
            user: "Carl",
            items: 3
        },
        {
            user: "Summer",
            items: 2
        }
    ]
}

$(document).ready(function () {
    var trHTML = '';

    $.each(data.rank, function (index, item) {
        var faceIconUri = "../assets/images/face" + (Math.floor(Math.random() * 7) + 1) + ".svg"
        if (index == 0) {
            trHTML = '<tr id="firstRankRow"><td class="faceIcon"><img class="icons"></td><td class="nameField">' + item.user + '</td><td class="coffeeIcon"><img class="icons" src="../assets/images/coffee.svg"></td><td class="multiple">x</td><td class="numberField">' + item.items + '</td></tr>';
        } else {
            trHTML = '<tr><td class="faceIcon"><img class="icons"></td><td class="nameField">' + item.user + '</td><td class="coffeeIcon"><img class="icons" src="../assets/images/coffee.svg"></td><td class="multiple">x</td><td class="numberField">' + item.items + '</td></tr>';
        }
        $('#rankingBoard').append(trHTML);
        $('#rankingBoard .faceIcon .icons')[index].src = faceIconUri;
    });


})