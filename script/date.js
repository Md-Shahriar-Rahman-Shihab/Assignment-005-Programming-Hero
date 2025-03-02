function displayFormattedDate() {
    const now = new Date();
    const options = { weekday: "short", month: "long", day: "numeric", year: "numeric" };
    const formatted = now.toLocaleDateString("en-US", options);
  

    const parts = formatted.split(" ");

  
    const dayOfWeek = parts[0]; 
    const month = parts[1]; 
    const day = parts[2].replace(",", "");
    const year = parts[3]; 
  
    
    const output = `${dayOfWeek}<br>${month} ${day} ${year}`;
  
    document.getElementById("date-display").innerHTML = output;
  }
  
  displayFormattedDate();
  