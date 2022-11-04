$(document).ready(function(){
    $(".mynav-container .drop-box").hide()
    let device_shrink = 1200   
    
    
    if(window.innerWidth <= device_shrink){
        console.log("Device width is less than 991px")
        $(".mynav ul").clone(true).appendTo($(".mynav-container .collapsed-nav"))                    
    }
    $(".mynav .nav-a").click(function(){
        $(".mynav .nav-a").removeClass("active")
        $(this).addClass("active")
    })


    $(".mynav-container .collapsed-nav").hide()
    $(".mynav-container .menubar-icon").click(function(){
        $(".mynav-container .collapsed-nav").slideToggle()
    })

    // Loop
    /* Keep it at last */            
    let dropButtonArr = $(".mynav-container .drop-button")
    for(let i = 0; i < dropButtonArr.length; i++){
        console.log(dropButtonArr[i])
        dropButtonArr[i].addEventListener("click", function(){                                    
            $(this.nextElementSibling).slideToggle()
            $(this.children[0].children).toggleClass("active-tab")                    
        })                
    }
    
});


