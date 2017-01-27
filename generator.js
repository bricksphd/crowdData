function convert() {
    let startingString = document.getElementById("startingJSON").value;
    let spec = JSON.parse(startingString);

    let agents = [];

    for (let i = 0; i < spec.length; i++) {
        let spawner = spec[i].spawn;
        let location = spec[i].location;

        let otherLocations = [];

        for (let otherIndex = 0; otherIndex < spec.length; otherIndex++) {
            if (otherIndex != i) {
                otherLocations.push(spec[otherIndex]);
            }
        }

        for (let time = parseFloat(spawner.start); time <= parseFloat(spawner.stop); time += parseFloat(spawner.rate)) {
            agents.push({"location": location, "destination": rand(otherLocations).location, "startTime": time});
        }
    }

    let result = JSON.stringify(agents);
    document.getElementById("createdJSON").value = result;
}

//Based on http://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
function rand(array) {
    let toReturn = array[Math.floor(Math.random() * array.length)];
    return toReturn;
}
