// date confirmation js
function confirmdate()
{
    //create the date confirmation dialog 
    const date_selection = confirm("This is the date your reservation shall be place. Are you sure?");
    
    if(date_selection){
        alert("Your reservation has been place ");

    window.location.href = "Menu Selection.html";


    }
    else{
        alert("Please select a date");
    }
} 