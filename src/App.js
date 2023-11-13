import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './style.css';

const PDFGenerator = () => {
  const [elementLoaded, setElementLoaded] = useState(false);
//   let [total, setTotal] = useState(0);

  useEffect(() => {
    const downloadSection = document.getElementById('tm_download_section');
    if (downloadSection) {
      setElementLoaded(true);
    }
  }, []);
    const handleDownload = (downloadSection) => {
        // const downloadSection = document.getElementById('tm_download_section');
        if (elementLoaded) {
            const cWidth = downloadSection.offsetWidth;
            const cHeight = downloadSection.offsetHeight + 20;
            const topLeftMargin = 20;
            const pdfWidth = cWidth + topLeftMargin * 2;
            const pdfHeight = cHeight;
            const canvasImageWidth = cWidth;
            const canvasImageHeight = cHeight;
            const totalPDFPages = Math.ceil(cHeight / pdfHeight) - 1;
    
            html2canvas(downloadSection, { allowTaint: true }).then(canvas => {
                canvas.getContext('2d');
                const imgData = canvas.toDataURL('image/png', 1.0);
                const pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);
                console.log({pdfWidth, pdfHeight,canvasImageWidth, canvasImageHeight,topLeftMargin, totalPDFPages })
                pdf.addImage(
                    imgData,
                    'PNG',
                    topLeftMargin,
                    topLeftMargin,
                    canvasImageWidth,
                    canvasImageHeight
                );
                for (let i = 1; i <= totalPDFPages; i++) {
                    pdf.addPage(pdfWidth, pdfHeight);
                    pdf.addImage(
                        imgData,
                        'PNG',
                        topLeftMargin,
                        -(pdfHeight * i) + topLeftMargin * 0,
                        canvasImageWidth,
                        canvasImageHeight
                    );
                }
                pdf.save('download.pdf');
            });

        }
    };
    var  total = 0 
    const addSampleRow = ()=>{
        // let _total = 0;
        const arr = []
         for (let i = 0; i < 100; i++) {
             let q = Math.floor((Math.random() * 20) + 1);
             let p = Math.floor((Math.random() * 100) + 10);
             total += q * p;
            arr.push((<tr>
                <td className="cs-p0  cs-p-t10 cs-p-b5">{i+1}. Spinach Dip </td>
                <td className="cs-primary_color cs-p0 cs-p-t10 cs-p-b5">&nbsp;{q}</td>
                <td className="cs-primary_color cs-p0 cs-p-t10 cs-p-b5">&nbsp;{p}</td>
                <td className="cs-text_right cs-primary_color cs-p0 cs-p-t10 cs-p-b5">${q * p}</td>
            </tr>))
         }
        //  if (arr.length >= 100) {
            
        //      setTotal(_total)
        //  }
         return arr;
    }

    return (
        <div className="cs-container style1">
            <button id="tm_download_btn" onClick={() => handleDownload(document.getElementById('tm_download_section'))}>
                    Download as PDF
                </button>
            <div className="cs-invoice cs-style1" >
                {/* <div className="cs-invoice_in" id="download_section"> */}
                <div className="cs-invoice_in" id="tm_download_section" onLoad={() => setElementLoaded(true)} style={{paddingBottom: "20px"}}>
                    <div className="cs-text_center cs-mb20">
                        <img src="../img/logo.svg" alt="logo" />
                        <p className="cs-f14 cs-m0 cs-bold cs-primary_color text-transform-uppercase">Ivonne Limited</p>
                    </div>
                    <div className="cs-border cs-mb10"></div>
                    <div className="cs-invoice_head cs-type1 column border-bottom-none cs-p0 cs-mb10">
                        <div className="display-flex justify-content-center cs-width_12">
                            <div className="cs-text_center">
                                <p className="cs-m0 cs-primary_color cs-f12">237 Roanoke Road, North York, <br />Ontario, Canada
                                    <br /> Phone: (123) 456-7890<br /> www.restaurantwebsite.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="cs-border cs-mb20"></div>
                    <div className="cs-width_8 cs-f12">
                        <p className="cs-f14 cs-mb10 cs-bold cs-primary_color text-transform-uppercase"> Table 06</p>
                        <div className="display-flex justify-content-space-between">
                            <p className="cs-mb5">Check&nbsp;</p>
                            <p className="cs-mb5">:</p>
                            <p className="cs-primary_color cs-mb5">837394</p>
                        </div>
                        <div className="display-flex justify-content-space-between">
                            <p className="cs-mb5">Date&nbsp;</p>
                            <p className="cs-mb5">:</p>
                            <p className="cs-primary_color cs-mb5">08/10/2023 10:45</p>
                        </div>
                        <div className="display-flex justify-content-space-between">
                            <p className="cs-mb10">Cashier&nbsp;</p>
                            <p className="cs-mb10">:</p>
                            <p className="cs-primary_color cs-mb10">William Stark</p>
                        </div>
                    </div>
                    <div className="cs-border"></div>
                    <div className="cs-table cs-style2 padding-rignt-left cs-f12">
                        <table>
                            <thead>
                                <tr className="cs-border_bottom style_1">
                                    <th className="cs-width_8 cs-bold cs-primary_color">Item</th>
                                    <th className="cs-primary_color cs-bold ">Qty</th>
                                    <th className="cs-primary_color cs-bold cs-text_right">UP</th>
                                    <th className="cs-primary_color cs-text_right cs-bold">Price</th>
                                </tr>
                            </thead>
                            <tbody className="tm-border-none">
                                {
                                    addSampleRow()
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="cs-border"></div>
                    <div className="cs-table cs-style2 padding-rignt-left">
                        <table>
                            <tbody className="cs-f12 tm-border-none">
                                <tr>
                                    <td className="cs-p0  cs-p-t10 cs-p-b5">Subtotal:</td>
                                    <td className="cs-text_right cs-primary_color cs-p0 cs-p-t10 cs-p-b5">${total}</td>
                                </tr>
                                <tr>
                                    <td className="cs-p0  cs-p-b10">Tax (2%):</td>
                                    <td className="cs-text_right  cs-primary_color cs-p0   cs-p-b10">${ total * 0.02}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cs-border"></div>
                    <div className="cs-table cs-style2 padding-rignt-left">
                        <table>
                            <tbody className="cs-f12 tm-border-none">
                                <tr>
                                    <td className="cs-p0 cs-p-t10 cs-p-b10">Total</td>
                                    <td className="cs-text_right cs-primary_color cs-p0 cs-p-t10  cs-p-b10">${total + total * 0.02}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cs-border cs-mb20"></div>
                    <p className="cs-text_center cs-f16 cs-primary_color cs-mb15">
                        Thank you for shopping with us!
                    </p>
                    <div className="cs-text_center cs-mb10" >
                        <img src="../img/barcode.png" alt="Qr Code" />
                    </div>

                </div>
               
            </div>
        </div>
    );

}


export default PDFGenerator;

