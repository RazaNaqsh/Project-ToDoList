import "./scss/style.scss";

console.log("webpack here");

// show the tasks in screen, will probably be in array
// now in what ways we can have arrays?
// single array? or multiple for different screens,
//  one way can be having different arrays for each tab and then displaying it, then for inbox, make a array which adds all others and display

// Basic Plan:-

// The INBOX DISPLAY
// 1-store data in array(probably)
// 2-display in screen(the inbox, all task shown)
// 3-Add button makes a screen popup to enter data and creates a task object and adds to array
// 4-array is updated and display that newly added object
// 5-when checked, the task gets deleted or strikethroughed(which we might store it somewhere to be displayed as completed task)
// 6-when task is deleted, it shouldnt be stored, just remove from array and dom

// WHEN TAB CHANGES
// 7-The task from those tabs should be displayed(might be empty at first)
// Today, this week tabs shudnt display add button
// 8-Add button should add task only to that current tab
// 9-New Project should create new tabs in project section

// TASK
// 10-Task should have title desc, due date, priority(optional for now)
// 11-when clicked(not checkbox, but on edit icon itself) it should expand(maybe in right side) and one can also edit its details as well and submit to update the task

// END STAGES
// Local storage

// STEPS PLAN:-
// 1- Store data.
// i- probably array? yea, might be easier to do so,
// ii-what properties should the object have? - Title, description, due date(will be afunction returning the chosen date), priority(for later)
