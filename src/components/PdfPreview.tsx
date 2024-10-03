import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfPreview: React.FC = () => {
    const location = useLocation();
    const pdfUrl = location.state?.pdfUrl;
    const pdfWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!pdfUrl) {
            console.error('PDF URL is not provided');
        }
    }, [pdfUrl]);

    return (
        <div className="pdf-preview h-full w-full flex items-center justify-center bg-mainBackground">
            {pdfUrl ? (
                <div ref={pdfWrapperRef} className="pdf-wrapper">
                    <Document file={pdfUrl}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
            ) : (
                <p className="text-lg italic text-mainForeground">No PDF to display</p>
            )}
        </div>
    );
};

export default PdfPreview;
