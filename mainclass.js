class editclass
{
	constructor()
	{
		texteditor.document.designMode='on';

	}
		buttoncommand()
		{
            let buttons = document.querySelectorAll(".butto");
            let inputs = document.querySelectorAll(".input");
            let links = document.querySelectorAll(".links");
            buttons.forEach((button) =>{
            button.addEventListener('click', (event) =>texteditor.document.execCommand(event.target.getAttribute('data-type'), false, null));

             });   
            inputs.forEach((input) =>{
            input.addEventListener('change', (event) =>texteditor.document.execCommand(event.target.getAttribute('data-type'), false, event.target.value));
             // input.addEventListener('change', (event) => console.log(event.target.value));
             }) ;
             links.forEach((link) => {
                 link.addEventListener('click', (event) => {

                    let url = prompt("Enter a Url","http://");
                     texteditor.document.execCommand(event.target.getAttribute('data-type'), false, url)
                })

             });  
           
               
        }
        
        

		
}