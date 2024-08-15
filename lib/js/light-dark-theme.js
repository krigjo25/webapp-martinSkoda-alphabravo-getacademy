function changeBackground()
{
    // Initializing the variables
    let body = document.getElementsByTagName('body');
    let btn = document.getElementByID('toggle-light-dark-theme');


    

    //  Change button text
    if (body.classList == 'bg-light')
    {
        //  Toggle the theme colour
        body.classList.toggle('bg-dark');
        body.classList.toggle('bg-light');
        
        //  Change button text
        btn.innerHTML = "Toogle to Dark Theme";
    }
    else
    {
        //  Toggle the theme colour
        body.classList.toggle('bg-dark');
        body.classList.toggle('bg-light');

        //  Change button text
        btn.innerHTML = "Toogle to light theme";
    }
    
    return;
}