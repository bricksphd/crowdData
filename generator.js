function convert(){
  let startingString = document.getElementById("startingJSON").value;
  let spec = JSON.parse(startingString);

  let agents = [];

  for(let i = 0; i < spec.length; i++)
  {
    let spawner = spec[i].spawn;
    let location = spec[i].location;

      for(let time = spawner.start; time < spawner.stop; time+=rate){
        agents.add({"location" : location, "destination": {"x": 0, "y" : 0}, "startTime" : time});
      }
  }

  let result = JSON.stringify(agents);
  document.getElementById("createdJSON").value = result;
}
