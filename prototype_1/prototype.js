 
window.onload = function() {
    let iframeDiv = document.getElementById('iframe-div');


    let iframe = document.createElement('iframe');

    iframe.setAttribute('class', 'template-iframe');
    iframe.setAttribute('src', 'about:blank');
    iframe.setAttribute('name', 'template-iframe');

    iframe.addEventListener('dragover', (e) => {
        e.preventDefault();

        return false;
    });

    iframe.addEventListener('drop', (e) => {
        e.stopPropagation();

        console.log(e.target.contentWindow.document);
        e.target.contentWindow.document.write(e.dataTransfer.getData('text/html'));

        return false;
    });

    iframeDiv.appendChild(iframe);

    window.open('iframe/index.html', 'template-iframe');

    iframe.onload = function() {
        console.log(iframe.contentWindow);
        console.log(iframe.contentWindow.document);
        /*
        iframe.contentWindow.onload = function() {
            let pages = iframe.contentWindow.document.querySelectorAll('.page');
console.log(pages);
            for(let i = 0; i < pages.length; i++) {
                pages[i].addEventListener('dragover', (e) => {
                    e.preventDefault();
            
                    return false;
                });
            
                pages[i].addEventListener('drop', (e) => {
                    e.stopPropagation();
    
                    console.log(e.dataTransfer.getData('text/html'));
                    pages[i].innerHTML = e.dataTransfer.getData('text/html');
            
                    return false;
                });
            }
        }
        */
    }

    iframe.contentWindow.addEventListener('load', (e) => {
        console.log('Loaded');
    });
    /*
    iframe.contentWindow.onload = function() {
        let pages = iframe.contentWindow.document.querySelectorAll('.page');
console.log(pages);
        for(let i = 0; i < pages.length; i++) {
            pages[i].addEventListener('dragover', (e) => {
                e.preventDefault();
        
                return false;
            });
        
            pages[i].addEventListener('drop', (e) => {
                e.stopPropagation();

                console.log(e.dataTransfer.getData('text/html'));
                pages[i].innerHTML = e.dataTransfer.getData('text/html');
        
                return false;
            });
        }
    }
    */

    


    let blockoptions = document.querySelectorAll('.blockoption-div');

    let dragsrc;

    for(let i = 0; i < blockoptions.length; i++) {
        blockoptions[i].setAttribute('draggable', true);


        blockoptions[i].addEventListener('dragstart', (e) => {
            dragsrc = e.target;

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', dragsrc.innerHTML);
        });


        blockoptions[i].addEventListener('dragover', (e) => {
            e.preventDefault();

            return false;
        });


        blockoptions[i].addEventListener('drop', (e) => {
            e.stopPropagation();

            if(dragsrc !== e.target) {
                dragsrc.innerHTML = e.target.innerHTML;

                e.target.innerHTML = e.dataTransfer.getData('text/html');
            }

            return false;
        });
    }
}
