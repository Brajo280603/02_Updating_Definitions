async function fetchApi(n){
  let activities = [];
  for(let i =0;i<n;i++){
  let res = await (await fetch("https://www.boredapi.com/api/activity")).json()
  
  activities.push(res);
}

console.log(activities);
return activities
}

