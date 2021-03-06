
/* IMPORT */

import * as vscode from 'vscode';

/* UTILS */

const Utils = {

  document: {

    isFiltered ( doc: vscode.TextDocument, options ) {

      if ( options.filterLanguageRegex ) {

        const language = doc.languageId;

        if ( !language ) return false;

        const re = new RegExp ( options.filterLanguageRegex, 'i' );

        if ( !re.test ( language ) ) return false;

      }

      if ( options.filterFileRegex ) {

        const filePath = doc.uri.fsPath;

        if ( !filePath ) return false;

        const re = new RegExp ( options.filterFileRegex, 'i' );

        if ( !re.test ( filePath ) ) return false;

      }

      return true;

    },

    getEditor ( doc: vscode.TextDocument ) {

      return vscode.window.visibleTextEditors.find ( textEditor => textEditor.document === doc );

    }

  }

};

/* EXPORT */

export default Utils;
