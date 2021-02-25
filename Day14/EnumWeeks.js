var weeks;
(function (weeks) {
    weeks[weeks["Monday"] = 1] = "Monday";
    weeks[weeks["Tuesday"] = 2] = "Tuesday";
    weeks[weeks["Wednesday"] = 3] = "Wednesday";
    weeks[weeks["Thursday"] = 4] = "Thursday";
    weeks[weeks["Friday"] = 5] = "Friday";
    weeks[weeks["Saturday"] = 6] = "Saturday";
    weeks[weeks["Sunday"] = 7] = "Sunday";
})(weeks || (weeks = {}));
var getDay = function () { return 3; };
var today = getDay();
console.log(weeks[today]);
