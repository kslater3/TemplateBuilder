 
window.onload = function() {
    let iframeDiv = document.getElementById('iframe-div');


    let iframe = document.createElement('iframe');
    iframe.setAttribute('class', 'template-iframe');

    iframe.srcdoc = ' \
    <!DOCYTPE html> \
    <html> \
        <head> \
            \
        </head> \
        <body> \
            <div style="border: 1px solid black; width: 100px; height: 900px;"> \
            </div> \
        </body> \
    </html> \
    ';

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
