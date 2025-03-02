// task-btn-1
document.getElementById("task-btn-1").addEventListener("click", function() {
    this.classList.add("pointer-events-none", "bg-gray-400");
    this.classList.remove("bg-blue-700");

    let task = document.getElementById("assigned-task").innerText;
    let finalTask = document.getElementById("counter-total").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask - 1;
    let updatedFinalTask = convertedFinalTask + 1;
    
    document.getElementById("assigned-task").innerText = updatedTask;
    document.getElementById("counter-total").innerText = updatedFinalTask;
    
    alert("Board updated Successfully");
    
    if (convertedTask <= 1) {
        alert("Congrats!!! You have completed all the current tasks");
    }
    
    let currentTime = new Date().toLocaleTimeString();
    let title = document.getElementById("task-card-1").innerText;
    let activityTask = document.getElementById("activity-log");
    let section = document.createElement("section");
    section.className = "act card rounded-xl p-2 bg-[#f4f7ff] mt-3";
    
    let p = document.createElement("p");
    p.innerText = `You have completed the task ${title} at ${currentTime}\n`;
    section.appendChild(p);
    activityTask.appendChild(section);
});

// task-btn-2
document.getElementById("task-btn-2").addEventListener("click", function() {
    this.classList.add("pointer-events-none", "bg-gray-400");
    this.classList.remove("bg-blue-700");

    let task = document.getElementById("assigned-task").innerText;
    let finalTask = document.getElementById("counter-total").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask - 1;
    let updatedFinalTask = convertedFinalTask + 1;
    
    document.getElementById("assigned-task").innerText = updatedTask;
    document.getElementById("counter-total").innerText = updatedFinalTask;
    
    alert("Board updated Successfully");
    
    if (convertedTask <= 1) {
        alert("Congrats!!! You have completed all the current tasks");
    }
    
    let currentTime = new Date().toLocaleTimeString();
    let title = document.getElementById("task-card-2").innerText;
    let activityTask = document.getElementById("activity-log");
    let section = document.createElement("section");
    section.className = "act card rounded-xl p-2 bg-[#f4f7ff] mt-3";
    
    let p = document.createElement("p");
    p.innerText = `You have completed the task ${title} at ${currentTime}\n`;
    section.appendChild(p);
    activityTask.appendChild(section);
});

// task-btn-3
document.getElementById("task-btn-3").addEventListener("click", function() {
    this.classList.add("pointer-events-none", "bg-gray-400");
    this.classList.remove("bg-blue-700");

    let task = document.getElementById("assigned-task").innerText;
    let finalTask = document.getElementById("counter-total").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask - 1;
    let updatedFinalTask = convertedFinalTask + 1;
    
    document.getElementById("assigned-task").innerText = updatedTask;
    document.getElementById("counter-total").innerText = updatedFinalTask;
    
    alert("Board updated Successfully");
    
    if (convertedTask <= 1) {
        alert("Congrats!!! You have completed all the current tasks");
    }
    
    let currentTime = new Date().toLocaleTimeString();
    let title = document.getElementById("task-card-3").innerText;
    let activityTask = document.getElementById("activity-log");
    let section = document.createElement("section");
    section.className = "act card rounded-xl p-2 bg-[#f4f7ff] mt-3";
    
    let p = document.createElement("p");
    p.innerText = `You have completed the task ${title} at ${currentTime}\n`;
    section.appendChild(p);
    activityTask.appendChild(section);
});

// task-btn-4
document.getElementById("task-btn-4").addEventListener("click", function() {
    this.classList.add("pointer-events-none", "bg-gray-400");
    this.classList.remove("bg-blue-700");

    let task = document.getElementById("assigned-task").innerText;
    let finalTask = document.getElementById("counter-total").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask - 1;
    let updatedFinalTask = convertedFinalTask + 1;
    
    document.getElementById("assigned-task").innerText = updatedTask;
    document.getElementById("counter-total").innerText = updatedFinalTask;
    
    alert("Board updated Successfully");
    
    if (convertedTask <= 1) {
        alert("Congrats!!! You have completed all the current tasks");
    }
    
    let currentTime = new Date().toLocaleTimeString();
    let title = document.getElementById("task-card-4").innerText;
    let activityTask = document.getElementById("activity-log");
    let section = document.createElement("section");
    section.className = "act card rounded-xl p-2 bg-[#f4f7ff] mt-3";
    
    let p = document.createElement("p");
    p.innerText = `You have completed the task ${title} at ${currentTime}\n`;
    section.appendChild(p);
    activityTask.appendChild(section);
});

// task-btn-5
document.getElementById("task-btn-5").addEventListener("click", function() {
    this.classList.add("pointer-events-none", "bg-gray-400");
    this.classList.remove("bg-blue-700");

    let task = document.getElementById("assigned-task").innerText;
    let finalTask = document.getElementById("counter-total").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask - 1;
    let updatedFinalTask = convertedFinalTask + 1;
    
    document.getElementById("assigned-task").innerText = updatedTask;
    document.getElementById("counter-total").innerText = updatedFinalTask;
    
    alert("Board updated Successfully");
    
    if (convertedTask <= 1) {
        alert("Congrats!!! You have completed all the current tasks");
    }
    
    let currentTime = new Date().toLocaleTimeString();
    let title = document.getElementById("task-card-5").innerText;
    let activityTask = document.getElementById("activity-log");
    let section = document.createElement("section");
    section.className = "act card rounded-xl p-2 bg-[#f4f7ff] mt-3";
    
    let p = document.createElement("p");
    p.innerText = `You have completed the task ${title} at ${currentTime}\n`;
    section.appendChild(p);
    activityTask.appendChild(section);
});

// task-btn-6
document.getElementById("task-btn-6").addEventListener("click", function() {
    this.classList.add("pointer-events-none", "bg-gray-400");
    this.classList.remove("bg-blue-700");

    let task = document.getElementById("assigned-task").innerText;
    let finalTask = document.getElementById("counter-total").innerText;
    let convertedFinalTask = parseInt(finalTask);
    let convertedTask = parseInt(task);
    let updatedTask = convertedTask - 1;
    let updatedFinalTask = convertedFinalTask + 1;
    
    document.getElementById("assigned-task").innerText = updatedTask;
    document.getElementById("counter-total").innerText = updatedFinalTask;
    
    alert("Board updated Successfully");
    
    if (convertedTask <= 1) {
        alert("Congrats!!! You have completed all the current tasks");
    }
    
    let currentTime = new Date().toLocaleTimeString();
    let title = document.getElementById("task-card-6").innerText;
    let activityTask = document.getElementById("activity-log");
    let section = document.createElement("section");
    section.className = "act card rounded-xl p-2 bg-[#f4f7ff] mt-3";
    
    let p = document.createElement("p");
    p.innerText = `You have completed the task ${title} at ${currentTime}\n`;
    section.appendChild(p);
    activityTask.appendChild(section);
});
