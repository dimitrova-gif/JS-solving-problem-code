// function solve(data){
// let meetings = {};

// for(let entry of data) {
//   let parsedData = entry.split(' ');

//   [weekday, fullName] = parsedData;

//   if(meetings.hasOwnProperty(weekday)) {
//     console.log(`Conflict on ${weekday}!`);
    
//   }else {
//     meetings[weekday] = fullName;
//     console.log(`Scheduled for ${weekday}`);
    
//   }
// }

// for (let weekday in meetings){
//   console.log(`${weekday} -> ${meetings[weekday]}`);
  
// }
// }

// solve(['Monday Peter',

// 'Wednesday Bill',

// 'Monday Tim',

// 'Friday Tim']);




function meetings(data){

  let meeting = {};
 for( let appointment of data){
  let parsedData = appointment.split(' ');

  [weekday, fullName] = parsedData;

  if (meeting.hasOwnProperty(weekday)){
    console.log(`Conflict on ${weekday}! `);
    
  }else {
    meeting[weekday] = fullName;
    console.log(`Scheduled for ${weekday}`);
    
  }
 }

 for(let weekday in meeting){
  console.log(`${weekday} -> ${meeting[weekday]}`);
  
 }
}

meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'] );