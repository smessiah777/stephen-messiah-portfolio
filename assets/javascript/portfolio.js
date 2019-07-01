window.onload = () => {

    document.getElementById("enter").addEventListener("click", showMenuIcon);

    document.getElementById("nav-icon").addEventListener("click", navOverlay);
    
    document.getElementById("close").addEventListener("click", close);
    
    document.getElementById("about-link").addEventListener("click", close);
    
    document.getElementById("projects-link").addEventListener("click", close);
    
    document.getElementById("contact-link").addEventListener("click", close);
    

    

    function navOverlay() {
        document.getElementById("nav-overlay").style.height = "100%";
    }

    function close() {
        document.getElementById("nav-overlay").style.height = "0";

        
    }

    function showMenuIcon() {
        document.getElementById("nav-icon").style.visibility = "visible";
     }
}