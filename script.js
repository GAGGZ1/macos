// Get current date
const today = new Date();

// Format options
const options = { weekday: 'long', day: 'numeric', month: 'long' };

// Format the date
const formattedDate = today.toLocaleDateString('en-US', options);

// Display in the page
document.getElementById("current-date").textContent = formattedDate;


function updateTime(){
  const now=new Date();
  const timeOptions={hour:'2-digit',minute: '2-digit', hour12: false };
  const formattedTime =now.toLocaleTimeString('en-US', timeOptions);
  document.getElementById("current-time").textContent=formattedTime;
}

setInterval(updateTime,1000);
updateTime();