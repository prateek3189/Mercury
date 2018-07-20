$(document).ready(function () {

    // add a click handler to all links
    // that point to same-page targets (href="#...")		
    //$("a[href^='#']").click(function () {
    //    $("#" + $(this).attr("href").slice(1) + "").focus().effect("highlight", {}, 3000);            
    //});

    $("#Flight").show();
    $("#Hotel").hide();
    $("#Car").hide();            
    $("#Activity").hide();            
});

function changeThis() {
    event.preventDefault();
    var list = document.querySelectorAll('nav ul li ul')[0];
    console.log(list.innerHTML);
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}

function showHideDiv(val) {
    event.preventDefault(val);
    console.log(val);
    switch (val) {
        case "Flight":
            $("#Flight").show();
            $("#Hotel").hide();
            $("#Car").hide();
            $("#Activity").hide();
            break;
        case "Hotel":
            $("#Flight").hide();
            $("#Hotel").show();
            $("#Car").hide();
            $("#Activity").hide();
            break;
        case "Cars":
            $("#Flight").hide();
            $("#Hotel").hide();
            $("#Car").show();
            $("#Activity").hide();
            break;
        case "Activities":
            $("#Flight").hide();
            $("#Hotel").hide();
            $("#Car").hide();
            $("#Activity").show();
            break;
        default:
            $("#Flight").hide();
            $("#Hotel").hide();
            $("#Car").hide();
            $("#Activity").hide();
            break;                    
    }
}
