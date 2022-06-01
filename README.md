# Calendar

## Table of Contents
1. [Description](#description) 
2. [Usage](#usage)
3. [Visuals](#visuals)


## Description

Application was develop to deploy a daily planner that allows a user to save events for each hour of the day.


## Usage

- Time blocks were created on the html page to allow events to be entered and the business hours were set from 9 am to 5 pm.

- Rows were added in the following format under a tr tag:

```js   
 <td>9AM</td>
 <td>
  <textarea id="9"></textarea>
 </td>
 <td>
  <button id="9" class='saveBtn'>Save</button>
 </td>
```

- Moment.js was used to display current time at the top of the calendar.

- In the scrypt.js file a function was created to set the color of the time block to indicate whether it is in the past, present, or future also using moment.js.

- Also in the scrypt.js file code was created to add tasks to local storage.


## Visuals
![Calendar Full Page](./assets/images/Horiseon%20full%20site.png)


## Resources

- [Repository](https://github.com/alicessilva22/seo-refactor)
- [Live Site](https://alicessilva22.github.io/seo-refactor/)



