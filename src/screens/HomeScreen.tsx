import { useCallback, useState } from "react";
import FileExplorer from "../components/FileExplorer";
import Editor from "../components/VditorEditor";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function HomeScreen() {
  const [sidebarWidth, setSidebarWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isOpen);

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
      <div className={`h-full overflow-hidden ${isSidebarOpen ? '' : 'hidden'}`} style={{ width: sidebarWidth, minWidth: 250 }}>
        <FileExplorer />
      </div>
      <div
        className={`w-0.5 bg-divider cursor-col-resize`}
        onMouseDown={startResizing}
      />
      <div className="flex-grow h-full w-0">
        <Editor />
      </div>
    </div >
  );
}