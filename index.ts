import { loadCultureFiles } from '../common/culture-loader';
import { DocumentEditorContainer, Toolbar } from '@syncfusion/ej2-documenteditor';
import { Dialog } from '@syncfusion/ej2-popups';
import { TitleBar } from './title-bar';
import * as data from './data-comments.json';


/**
 * Default document editor sample
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let hostUrl: string = 'https://ej2services.syncfusion.com/production/web-services/';

    let container: DocumentEditorContainer = new DocumentEditorContainer({
        enableToolbar: true,
        height: '590px', showPropertiesPane: false,userColor :'#b70f34'
    });
    DocumentEditorContainer.Inject(Toolbar);
    container.serviceUrl = hostUrl + 'api/documenteditor/';
    container.appendTo('#container');
    let titleBar: TitleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), container.documentEditor, true);
    container.documentEditor.open(JSON.stringify((<any>data)));
    container.documentEditor.documentName = 'Comments';
    container.documentEditor.currentUser = 'Nancy Davolio';
    container.documentEditor.showComments = true;
    titleBar.updateDocumentTitle();
    public void commentdelete(object args)
    {
        if(args.author !== container.currentUser)
        {
            args.cancel=true;
            let dialog = new Dialog({
                header: 'Dialog',
                showCloseIcon: true,
                content: 'This is a dialog with header',
                target: document.getElementById("container"),
                width: '250px',
             });
             document.getElementById('targetButton').onclick = (): void => {
    
                 dialog.show();
                 }
                dialog.appendTo('#dialog');
        }
    }

    container.commondelete = (): void => {
        titleBar.updateDocumentTitle();
        container.documentEditor.focusIn();
    };

    container.documentChange = (): void => {
        titleBar.updateDocumentTitle();
        container.documentEditor.focusIn();
    };

};