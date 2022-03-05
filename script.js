//variables
let tabs = document.querySelectorAll('.tabs__toggle');
let contents = document.querySelectorAll('.tabs__content')

//adding eventlistener to all toggle items(buttons) which removes classlist active from each content item
tabs.forEach((tab,index) => {
    tab.addEventListener('click',()=>{
        contents.forEach((content) =>{
            content.classList.remove('is-active')
        });
        //removing active class from each tab toggle(button)
        tabs.forEach((tab) =>{
            tab.classList.remove('is-active')
        });
        //adding active class to content and tab index
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    })
}); 