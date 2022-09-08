

document.querySelector('nav').addEventListener('click', onNavigate);

showView('homeView');

const sections ={
    'homeBtn' : 'homeView',
    'catalogBtn': 'catalogView',
    'aboutBtn': 'aboutView'
};


function onNavigate(event){
    if(event.target.tagName == 'BUTTON'){
           const sectionId = sections[event.target.id];
            showView(sectionId);

    }
}


function showView (id){
    document.querySelectorAll('section').forEach(s => s.style.display ='none');
    document.getElementById(id).style.display ='';
}



