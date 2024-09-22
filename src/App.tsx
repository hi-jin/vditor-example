import React, { useState, useCallback } from 'react';
import './App.css';
import Editor from './components/VditorEditor';
import FileExplorer from './components/FileExplorer';

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback((mouseMoveEvent: React.MouseEvent) => {
    if (isResizing) {
      setSidebarWidth(mouseMoveEvent.clientX);
    }
  }, [isResizing]);

  return (
    <div className="App h-full flex" onMouseMove={resize} onMouseUp={stopResizing} onMouseLeave={stopResizing}>
      <div className="h-full overflow-auto" style={{ width: sidebarWidth }}>
        <FileExplorer />
      </div>
      <div
        className="w-0.5 bg-gray-300 cursor-col-resize"
        onMouseDown={startResizing}
      />
      <div className="flex-grow h-full">
        <Editor />
      </div>
    </div>
  );
}

export default App;
