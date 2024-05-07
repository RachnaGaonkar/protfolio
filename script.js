var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname)
        {
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

//onclick function  openmenu bar and closemenu bar
var sidemenu =document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right ="0";
}
function closemenu(){
    sidemenu.style.right ="-150px";
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbytJcP_ZVyXXOPTluYfWDpUtCaRZPeJzRRE-nFAPOL_cn2ZwINHWHeyCTV4CMTGLN95/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="message sent sucessfully"
        setTimeout(function(){
            msg.innerHTML =""
        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

