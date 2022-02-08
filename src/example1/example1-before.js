exports.calc = function (dist, d) {

    if (d.getHours() >= 22) {
        return dist * 3.90;
    } else {

        if (d.getDay() === 0) {
            return dist * 2.90;
        } else {
            return dist * 3.90;
        }

    }
}