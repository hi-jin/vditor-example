import React, { useState } from 'react';
import IFile from '../models/file';
import { useNavigate } from 'react-router-dom';

const FileExplorer: React.FC = () => {
    const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
    const navigate = useNavigate();

    // 임시 파일 구조
    const files: IFile[] = [
        {
            name: 'src', type: 'folder', children: [
                {
                    name: 'components', type: 'folder', children: [
                        { name: 'VditorEditor.tsx', type: 'file' },
                        { name: 'FileExplorer.tsx', type: 'file' }
                    ]
                },
                { name: 'App.tsx', type: 'file' },
                { name: 'index.tsx', type: 'file' }
            ]
        },
        {
            name: 'public', type: 'folder', children: [
                { name: 'index.html', type: 'file' }
            ]
        },
        { name: 'package.json', type: 'file' },
    ];

    const toggleFolder = (folderName: string) => {
        setExpandedFolders(prev => {
            const newSet = new Set(prev);
            if (newSet.has(folderName)) {
                newSet.delete(folderName);
            } else {
                newSet.add(folderName);
            }
            return newSet;
        });
    };

    const renderTree = (items: IFile[], path: string = '') => (
        <ul className="pl-4">
            {items.map((item, index) => {
                const itemPath = `${path}/${item.name}`;
                const isExpanded = expandedFolders.has(itemPath);
                return (
                    <li key={index} className="py-1">
                        {item.type === 'folder' ? (
                            <div>
                                <span
                                    className="cursor-pointer"
                                    onClick={() => toggleFolder(itemPath)}
                                >
                                    {isExpanded ? '📂 ' : '📁 '}
                                    {item.name}
                                </span>
                                {isExpanded && item.children && renderTree(item.children, itemPath)}
                            </div>
                        ) : (
                            <span>📄 {item.name}</span>
                        )}
                    </li>
                );
            })}
        </ul>
    );

    return (
        <div className={`px-4 pt-[50px] h-full overflow-auto bg-sidebarBackground text-sidebarForeground relative`}>
            {renderTree(files)}
            <div className='absolute bottom-5 left-5 right-5'>
                <div
                    className='bg-divider rounded-md px-2 py-1 cursor-pointer text-center hover:animate-pulse'
                    onClick={() => navigate('/file-input')}
                >
                    + Import New Source
                </div>
            </div>
        </div>
    );
};

export default FileExplorer;