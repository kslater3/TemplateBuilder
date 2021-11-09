 
window.onload = function() {
    let iframeDiv = document.getElementById('iframe-div');


    let iframe = document.createElement('iframe');

    iframe.setAttribute('class', 'template-iframe');

    iframe.setAttribute('src', 'iframe/index.html');

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

    iframe.contentWindow.onload = function() {
        let pages = iframe.contentWindow.document.querySelectorAll('.page');

        for(let i = 0; i < pages.length; i++) {
            pages[i].addEventListener('dragover', (e) => {
                e.preventDefault();
        
                return false;
            });
        
            pages[i].addEventListener('drop', (e) => {
                e.stopPropagation();

                if(e.dataTransfer.getData('application/json')) {
                    let data = JSON.parse(e.dataTransfer.getData('application/json'));

                    if(data) {
                        if(data.name === 'table') {
                            let newTable = iframe.contentWindow.document.createElement('table');

                            newTable.setAttribute('draggable', true);

                    
                            newTable.addEventListener('dragover', (e) => {
                                e.preventDefault();
                    
                                return false;
                            });


                            newTable.setAttribute('style', 'border: 1px solid black');

                            newTable.innerHTML = '\
                                <tr> \
                                    <td style="border: 1px solid black;"> \
                                        data\
                                    </td> \
                                    \
                                    <td style="border: 1px solid black;"> \
                                        data\
                                    </td> \
                                    \
                                    <td style="border: 1px solid black;"> \
                                        data\
                                    </td> \
                                </tr> \
                                \
                                <tr> \
                                    <td style="border: 1px solid black;"> \
                                        data\
                                    </td> \
                                    \
                                    <td style="border: 1px solid black;"> \
                                        data\
                                    </td> \
                                    \
                                    <td style="border: 1px solid black;"> \
                                        data\
                                    </td> \
                                </tr> \
                            ';

                            pages[i].appendChild(newTable);
                        }else if(data.name === 'header') {
                            let newHeader = iframe.contentWindow.document.createElement('h2');

                            newHeader.setAttribute('draggable', true);
                            
                    
                            newHeader.addEventListener('dragover', (e) => {
                                e.preventDefault();
                    
                                return false;
                            });


                            newHeader.innerHTML = 'Header';

                            pages[i].appendChild(newHeader);
                        }else if(data.name === 'page') {
                            let newPage = iframe.contentWindow.document.createElement('div');

                            newPage.setAttribute('draggable', true);
                            
                    
                            newPage.addEventListener('dragover', (e) => {
                                e.preventDefault();
                    
                                return false;
                            });

                            newPage.addEventListener('drop', (e) => {
                                e.stopPropagation();

                                if(e.dataTransfer.getData('application/json')) {
                                    let data = JSON.parse(e.dataTransfer.getData('application/json'));

                                    if(data) {
                                        if(data.name === 'table') {
                                            let newTable = iframe.contentWindow.document.createElement('table');

                                            newTable.setAttribute('draggable', true);

                                    
                                            newTable.addEventListener('dragover', (e) => {
                                                e.preventDefault();
                                    
                                                return false;
                                            });


                                            newTable.setAttribute('style', 'border: 1px solid black');

                                            newTable.innerHTML = '\
                                                <tr> \
                                                    <td style="border: 1px solid black;"> \
                                                        data\
                                                    </td> \
                                                    \
                                                    <td style="border: 1px solid black;"> \
                                                        data\
                                                    </td> \
                                                    \
                                                    <td style="border: 1px solid black;"> \
                                                        data\
                                                    </td> \
                                                </tr> \
                                                \
                                                <tr> \
                                                    <td style="border: 1px solid black;"> \
                                                        data\
                                                    </td> \
                                                    \
                                                    <td style="border: 1px solid black;"> \
                                                        data\
                                                    </td> \
                                                    \
                                                    <td style="border: 1px solid black;"> \
                                                        data\
                                                    </td> \
                                                </tr> \
                                            ';

                                            newPage.appendChild(newTable);
                                        }else if(data.name === 'header') {
                                            let newHeader = iframe.contentWindow.document.createElement('h2');

                                            newHeader.setAttribute('draggable', true);
                                            
                                    
                                            newHeader.addEventListener('dragover', (e) => {
                                                e.preventDefault();
                                    
                                                return false;
                                            });


                                            newHeader.innerHTML = 'Header';

                                            newPage.appendChild(newHeader);
                                        }
                                    }
                                }
                            });


                            newPage.setAttribute('class', 'page');

                            iframe.contentWindow.document.body.appendChild(newPage);
                        }
                    }
                }
        
                return false;
            });
        }
    }

    


    let blockoptions = document.querySelectorAll('.blockoption-div');

    let dragsrc;

    for(let i = 0; i < blockoptions.length; i++) {
        blockoptions[i].setAttribute('draggable', true);


        blockoptions[i].addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('application/json', JSON.stringify({name: e.target.getAttribute('name')}));
        });


        blockoptions[i].addEventListener('dragover', (e) => {
            e.preventDefault();

            return false;
        });
    }
}
