import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import CustomTitleBar from './components/CustomTitleBar';
import FileExplorer from './components/FileExplorer';
import { useCallback, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Editor from './components/VditorEditor';
import FileInput from './components/FileInput';

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const location = useLocation(); // 추가

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
    <>
      <CustomTitleBar />
      <div className="App h-full flex" onMouseMove={resize} onMouseUp={stopResizing} onMouseLeave={stopResizing}>
        <div className={`h-full overflow-hidden ${isSidebarOpen ? '' : 'hidden'}`} style={{ width: sidebarWidth, minWidth: 250 }}>
          <FileExplorer />
        </div>
        <div
          className={`w-0.5 bg-divider cursor-col-resize`}
          onMouseDown={startResizing}
        />
        <div className="flex-grow h-full w-0">
          <Routes location={location}>
            <Route path="/" element={<Editor />} />
            <Route path="/file-input" element={<FileInput />} />
          </Routes>
        </div>
      </div >
    </>
  );
}

export default App;
