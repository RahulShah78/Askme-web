
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img");
  var lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.scrollY;
      lazyloadImages.forEach(function(img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
         
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 10);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});



const submenu = document.getElementById("submenus");

submenu.addEventListener(
    "mouseover",
    () => {
        var submenu_toggle = document.getElementById("dropdown_ul"); 
        
        submenu_toggle.classList.add('show');
})

 document.getElementById("dropdown_ul") .addEventListener(
    "mouseleave",
    () => {
        var submenu_toggle = document.getElementById("dropdown_ul"); 
      
        submenu_toggle.classList.remove('show');
})


const hire_developers = document.getElementById("hire_developers");

hire_developers.addEventListener(
    "mouseover",
    () => {
        var submenu_toggle = document.getElementById("hire_dev"); 
        
        submenu_toggle.classList.add('show');
})
document.getElementById("hire_dev").addEventListener(
    "mouseleave",
    () => {
        var submenu_toggle = document.getElementById("hire_dev"); 
       
        submenu_toggle.classList.remove('show');
})


const industries = document.getElementById("industries");

industries.addEventListener(
    "mouseover",
    () => {
        var submenu_toggle = document.getElementById("industries_ul"); 
       
        submenu_toggle.classList.add('show');
})
document.getElementById("industries_ul").addEventListener(
    "mouseleave",
    () => {
        var submenu_toggle = document.getElementById("industries_ul"); 
       
        submenu_toggle.classList.remove('show');
})

const company = document.getElementById("company");

company.addEventListener(
    "mouseover",
    () => {
        var submenu_toggle = document.getElementById("company_ul"); 
        submenu_toggle.classList.add('show');
})
document.getElementById("company_ul").addEventListener(
    "mouseleave",
    () => {
        var submenu_toggle = document.getElementById("company_ul"); 
        submenu_toggle.classList.remove('show');
})


document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.imporatnt_links a');
    links.forEach(function(link) {
        link.addEventListener('click',async  function(e) {
        e.preventDefault();

        async function fetchData(){
        const jsonfilepath = 'text.json';
        const resp_data = await fetch(jsonfilepath);
        const data = await resp_data.json();
        
        return data
    }
    const jsonData = await fetchData();
   
   

    var text = Array.prototype.indexOf.call(this.parentNode.children, this);

    const companies_info = document.getElementById('companies_info');
    companies_info.innerHTML = `<h2>${jsonData.user.Objects[text].title}</h2>
                                      
                                <p>${jsonData.user.Objects[text].description}</p>
                             
                                `;

   
    
        });
    });
});