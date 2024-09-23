import React, { FC, useState, useEffect } from "react"
import { VditorEditor } from "react-vditor"
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Vditor from "vditor";

const Editor: FC = () => {
    const themeMode = useSelector((state: RootState) => state.theme.mode);
    const [vditor, setVditor] = useState<Vditor>();

    useEffect(() => {
        if (!!vditor) {
            vditor.setTheme(
                themeMode === 'dark' ? "dark" : "classic",
                themeMode === 'dark' ? "dark" : "light",
                themeMode === 'dark' ? "dark" : "light",
                "https://cdn.jsdelivr.net/npm/vditor/dist/css/content-theme"
            );
        }
    }, [themeMode]);


    return (
        <VditorEditor
            keyID="base-editor"
            options={{
                toolbar: [],
                mode: "ir",
                theme: themeMode === 'dark' ? "dark" : "classic",
                preview: {
                    theme: {
                        current: themeMode === 'dark' ? "dark" : "light",
                        path: "https://cdn.jsdelivr.net/npm/vditor/dist/css/content-theme",
                    },
                },
            }}
            bindVditor={setVditor}
        />
    )
}

export default Editor