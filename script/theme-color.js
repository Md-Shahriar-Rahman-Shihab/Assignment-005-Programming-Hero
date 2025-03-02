function ranCol() {
    let r = Math.floor(Math.random() * 106) + 150;
    let g = Math.floor(Math.random() * 106) + 150;
    let b = Math.floor(Math.random() * 106) + 150;
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.style.backgroundColor = ranCol();
  });
  