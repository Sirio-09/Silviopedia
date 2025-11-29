document.addEventListener('DOMContentLoaded', function() 
{
    const link = document.getElementById('backButton');

    if (link) 
    {
        link.addEventListener('click', function(event)
        {
            event.preventDefault(); 
            history.back();
        });
    }
});