const scroller = new LocomotiveScroll({
    el: document.querySelector('#data-scroll-container'),
    smooth: true
  });

  var myIndex=0;
  carousel();

  function carousel(){
    var i;
    var x=document.getElementsByClassName("vid");
    for(i=0;i<x.length;i++){
      x[i].style.display="none";
    }
    myIndex++;
    if(myIndex>x.length){myIndex=1}
    x[myIndex-1].style.display="block";
    setTimeout(carousel,3000);
  }

  function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }

  const k=document.forms['frm1'];
  let text="";
  for(let i=0;i<x.length;i++){
    text+=x.elements[i].value+'<br>';
  }
  document.getElementById("demo").innerHTML=text;

  document.getElementById("mybtn").addEventListener("click",myFunction);
  function myFunction(){
    alert("Successfully Submitted");
  }

  let nav = document.querySelector('.main');
  window.onscroll = () => {
    nav.classList.remove('active');

    const sr = ScrollReveal ({
      origin: 'top',
      distance: '40px',
      duration: 2000,
      reset: true
  });
  
  
  sr.reveal(`.recommendations-container, .recommendations,
              .active_container, .recommendations__controls,
              .location_preview, .preview__details,
              .btn, .centered-recommendations-container,
              .contact-box`, {
      interval: 200
  })
  
  window.onscroll=function(){scrollFunction()};
  
  function scrollFunction(){
      if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
          document.getElementById("menubar").style.top="0";
      }else{
          document.getElementById("menubar").style.top="-50px";
      }
  }
}