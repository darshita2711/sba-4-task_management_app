# Task Manager App

A simple Task Manager web app built using **HTML, CSS, and JavaScript**.
Users can add tasks, update their status, filter tasks, and save tasks using `localStorage`.

## Features

* **Add Tasks** — Add a task with a name, category, deadline, and status.
* **Update Status** — Change a task's status to **In Progress, Completed, or Overdue**.
* **Automatic Overdue Status** — Tasks that pass their deadline and are still In Progress are automatically changed to **Overdue**.
* **Filter Tasks** — Filter tasks by status or category.
* **Local Storage** — Tasks are saved in the browser and remain available after refreshing the page.
* **Dynamic Task List** — Tasks are displayed dynamically using JavaScript.

## How It Works

* All tasks are stored in a JavaScript `tasks` array.
* Each task contains:

  * Task name
  * Category
  * Deadline
  * Status
* The `displayTasks()` function displays the tasks on the page.
* The `checkOverdueTasks()` function checks the deadline and changes an In Progress task to Overdue when the deadline has passed.
* The status dropdown allows users to update a task's status.
* The `filterTasks()` function filters tasks by status and category.
* `localStorage` saves the tasks so they are not lost when the page is refreshed.

## Files

* `index.html` — Contains the structure of the Task Manager.
* `style.css` — Contains the styling for the application.
* `script.js` — Contains the JavaScript logic and functionality.

## How to Run

1. Download or clone the project.
2. Open the project in VS Code.
3. Open `index.html` in a browser.
4. You can also use the **Live Server** extension in VS Code.

No additional libraries or installations are required.

## Future Improvements

With more time, I would like to add:

* Delete tasks
* Edit existing tasks
* Sort tasks by deadline
* Prevent duplicate categories in the category filter
* Improve the overall design and user experience
