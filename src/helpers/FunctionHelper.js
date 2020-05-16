import { saveAs } from 'file-saver';

class FunctionHelper {
  static UserBrowser() {
    /*
    Tipos de navegadores identificados pala função UserBrowser()
    1: Mozilla Firefox;
    2: Opera;
    3: Microsoft Internet Explorer;
    4: Microsoft Edge;
    5: Google Chrome or Chromium;
    6: Safari;
    7: unknown;
    */

    let sBrowser = {};
    const sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf('Firefox') > -1) {
      sBrowser = { id: 1, name: 'Mozilla Firefox' };
    } else if (sUsrAg.indexOf('Opera') > -1 || sUsrAg.indexOf('OPR') > -1) {
      sBrowser = { id: 2, name: 'Opera' };
    } else if (sUsrAg.indexOf('Trident') > -1) {
      sBrowser = { id: 3, name: 'Microsoft Internet Explorer' };
      const msie = sUsrAg.indexOf('MSIE ');
      if (msie > 0) {
        sBrowser = { ...sBrowser, ieOld: true };
      }
    } else if (sUsrAg.indexOf('Edge') > -1) {
      sBrowser = { id: 4, name: 'Microsoft Edge' };
    } else if (sUsrAg.indexOf('Chrome') > -1) {
      sBrowser = { id: 5, name: 'Google Chrome or Chromium' };
    } else if (sUsrAg.indexOf('Safari') > -1) {
      sBrowser = { id: 6, name: 'Apple Safari' };
    } else {
      sBrowser = { id: 7, name: 'unknown' };
    }

    return { ...sBrowser, sUsrAg };
  }

  // Changes XML to JSON
  static xmlToJson(xml) {
    // Create the return object
    let obj = {};

    if (xml.nodeType === 1) { // element
      // do attributes
      if (xml.attributes.length > 0) {
        obj['@attributes'] = {};
        for (let j = 0; j < xml.attributes.length; j += 1) {
          const attribute = xml.attributes.item(j);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) { // text
      obj = xml.nodeValue;
    }

    // do children
    // If just one text node inside
    if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
      obj = xml.childNodes[0].nodeValue;
    } else if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i += 1) {
        const item = xml.childNodes.item(i);
        const { nodeName } = item;
        if (typeof (obj[nodeName]) === 'undefined') {
          obj[nodeName] = FunctionHelper.xmlToJson(item);
        } else {
          if (typeof (obj[nodeName].push) === 'undefined') {
            const old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(FunctionHelper.xmlToJson(item));
        }
      }
    }
    return obj;
  }

  static downloadPDFBase64(pdf, nomePessoa, tipo) {
    const blob = FunctionHelper.b64toBlob(pdf, 'data:application/pdf');
    const fileName = `${tipo}-${nomePessoa}.pdf`;
    saveAs(blob, fileName);
  }

  static b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i += 1) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
}

export default FunctionHelper;
