// add default modal easein
function setEasein(modal=undefined){
    if (modal!=undefined) {
        
    }
    else{
        $(".modal").each(function(){
            if($(this).attr("data-easein")==undefined){
                if ($(this).attr("easein")==undefined) {
                    var type="slideUpIn";
                }else{
                    var type=$(this).attr("easein");
                    // swoopIn
                }
                $(this).attr("data-easein",type);
                $(this).on("show.bs.modal",function(l){var o=$(this).attr("data-easein");"shake"==o?$(".modal-dialog").velocity("callout."+o):"pulse"==o?$(".modal-dialog").velocity("callout."+o):"tada"==o?$(".modal-dialog").velocity("callout."+o):"flash"==o?$(".modal-dialog").velocity("callout."+o):"bounce"==o?$(".modal-dialog").velocity("callout."+o):"swing"==o?$(".modal-dialog").velocity("callout."+o):$(".modal-dialog").velocity("transition."+o)});
            }
        });
    }
    fixSelect2Required();
    reselectOption();
 
}
function reselectOption(){
    $('select[reselect]').each(function() {
        var selectTag = $(this);
        var reselectValue = selectTag.attr('reselect');
        selectOption(selectTag, reselectValue);
    });
}
function fixSelect2Required(){
    $(":required").each(function(){
        if (!$(this).hasClass('required')) {
            $(this).addClass('required');
            if ($(this).hasClass('select2')) {
                $(this).nextAll('span').first().addClass('required');
            }
        }

        const element = $(this);
        // Check if the element already has a click event listener with key "customKey"
        if (!element.data('ValidateListener')) {
            // If it doesn't have one, add the event listener
            element.on('change.ValidateListener', function() {
                autoValidate(this);
            });
            // Set the "hasCustomClickListener" flag to true
            element.data('ValidateListener', true);
        }
    });
}

function EnterPress(btn,callback){
        // If the user presses the "Enter" key on the keyboard
        var key=btn.keyCode || btn.which;
        if (key==13){
            // Cancel the default action, if needed
            btn.preventDefault();
            // Trigger the button element with a click
            callback();
        }  

}

function TabPress(btn,nextInputSelector) {
    // If the user presses the "Tab" key on the keyboard
    var key = btn.keyCode || btn.which;
    if (key == 9) {
      // Cancel the default action, if needed
      btn.preventDefault();
     // Switch to the next input field
        var nextInput = document.querySelector('#'+nextInputSelector);
        if (nextInput) {
        nextInput.focus();
        }
      
    }
  }

function RightClick(event,list,isBtn=undefined){
        // Cancel the default action, if needed
        event.preventDefault(); // Prevent the default context menu from showing

        // Show the custom dropdown menu
       
        var menu = $('#rightClickDropmenu');
        var clone=$("#"+list).html();
        menu.html(clone);
        var posX = event.pageX;
        var posY = event.pageY;
        var windowWidth = $(document).width();
        var windowHeight = $(document).height();
        var menuWidth = menu.width();
        var menuHeight = menu.height();

        if ((posX + menuWidth) > windowWidth) {
            posX = windowWidth - menuWidth;
        }

        if ((posY + menuHeight) > windowHeight) {
            posY = windowHeight - menuHeight;
        }

        var asideWidth = $('#leftSidebar').width();
        if ($('#leftSidebar').is(':visible')) {
            posX -= asideWidth;

        }


        posX -= (menuWidth / 2);
        posY -= (menuHeight / 2);

        menu.show(500);
        menu.css({
            // display: 'block',
            left: posX + 'px',
            top: posY + 'px',
        });

        if (isBtn==undefined) {
            // Hide the dropdown menu when the user clicks outside of it
            $(document).on('click', function(event) {
                if (!menu.is(event.target) && menu.has(event.target).length === 0 ) {
                
                        menu.hide(200);
        
                
                }
            });
        }

}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  });
  