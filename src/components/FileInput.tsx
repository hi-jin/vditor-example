// Start of Selection
import React, { useCallback } from 'react';
import { MdOutlineSaveAlt } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function FileInput() {
    const navigate = useNavigate();

    const handleFile = (file: File) => {
        if (file.type === 'application/pdf') {
            const url = URL.createObjectURL(file);
            navigate(`/pdf-preview?pdfUrl=${url}`);
        }
    };

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;

        handleFile(files[0]);
    }, []);

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }, []);

    return (
        <div
            className='h-full w-full flex items-center justify-center bg-mainBackground'
        >
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = '*';
                    input.onchange = (e: Event) => { // 타입을 Event로 변경
                        const target = e.target as HTMLInputElement; // 타입 단언 추가
                        const files = target.files;
                        if ((files?.length ?? 0) > 0) {
                            handleFile(files![0]);
                        }
                    };
                    input.click();
                }}
                className="border-dashed border-2 border-mainForeground p-20 m-20 text-center flex flex-col items-center justify-center hover:animate-pulse text-mainForeground rounded-lg"
                style={{ minHeight: '200px' }}
            >
                <MdOutlineSaveAlt size={48} />
                <p className="text-lg italic">Choose a file or drag it here</p>
            </div>
        </div>
    );
}