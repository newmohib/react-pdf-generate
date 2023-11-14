
import jsPDFInvoiceTemplate, { OutputType,jsPDF } from "./index";


    const generatePDF = (props) => {

        jsPDFInvoiceTemplate(props);
        return true

      };

    //   const generatePDFObject = (props) => {
    // //    const parameters = {
    // //         pagesNumber: 'number', // (always) - number of pages
    // //         jsPDFDocObject: 'jsPDF', // if (returnJsPDFDocObject: true) - the doc already created. You can use it to add new content, new  pages.
    // //         blob: 'Blob', // if (outputType: 'blob') - returns the created pdf file as a Blob object. So you can upload and save it to your server. (Idea from a comment on Twitter)
    // //         dataUriString: 'string', // if (outputType: 'datauristring')
    // //         arrayBuffer: 'ArrayBuffer' // if (outputType: 'arraybuffer')
    // //     }
        
    //     //store it to a variable and use it wherever you want
    //     var pdfCreated = jsPDFInvoiceTemplate.default({...props});
    //     // var blob = pdfCreated.blob;
    //     // //...
    //     // var pagesNum = pdfCreated.pagesNumber;
    //     // var pdfObject = pdfCreated.jsPDFDocObject;
    //     return pdfCreated

    //   };



export {generatePDF, OutputType, jsPDF}

