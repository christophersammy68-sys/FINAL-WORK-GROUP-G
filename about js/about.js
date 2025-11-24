//Function for greeting
function showGreeting(){
   const now = new Date()
   const hour = now.getHours()
   let greeting;
   if(hour <12){
    greeting = "Good morning! Hope you have a great day ahead."
   }
   else if(hour >=12 && hour <18){
    greeting = "Good afternoon! Hope you are having a wonderful day."
}
    else{
    greeting = "Good evening! Hope you have had a great day."

    }

  // Banner at the top
    const greetingBanner = document.createElement('div');
    greetingBanner.style.cssText = `
        background: #2e8b57ff;
        color: white;
        padding: 10px;
        text-align: center;
        font-weight: bold;
        border-bottom: 2px solid #22704bff;
    `;
    greetingBanner.textContent = greeting;
    
    // At the very top of the page
    document.body.insertBefore(greetingBanner, document.body.firstChild);
    
    console.log("Current greeting:", greeting);
}
function setupTeamHover(){
    const members = document.querySelectorAll('members')
    members.forEach(members =>{
        members.addEventListener( 'mouseover', function() {
        this.style.color = 'rgb(46, 139, 87)'
        this.style.fontWeight = 'bold'
    })
    members.addEventListener( 'mouseout', function() {
        this.style.color = ''
    })
    })
}
console.log("Team hover done", setupTeamHover())
// Initialize functions when DOM is fully loaded
function initializePage() {
    showGreeting();
    setupTeamHover();
}
document.addEventListener('DOMContentLoaded', initializePage);
