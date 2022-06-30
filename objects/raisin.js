const raisinAlarm = function(cookie) {
  let alert = 'All Good'
  for (const element of cookie) {
    if (element === "🍇") {
      alert = 'Raisin Alert';
      
    }
  } return alert
}

const raisinAlarmArray = function (cookies) {
  let alert = []
  for (const cookie of cookies) {
    alert.push(raisinAlarm(cookie))
  }
  return alert
}
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));