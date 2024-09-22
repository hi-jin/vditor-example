import React, { FC, useState, useEffect } from "react"
import Vditor from "vditor"
import { VditorEditor } from "react-vditor"

const Editor: FC = () => {
    const [vditor, setVditor] = useState<Vditor>()
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!!vditor) {
            console.log(`Update Default Vditor:`)
            console.log(vditor)
        }
    }, [vditor])

    return (
        <VditorEditor
            keyID="base-editor"
            bindVditor={setVditor}
            options={{
                toolbar: [],
                mode: "ir",
                // theme: "dark",
                height: height, // 반응형 높이 설정
            }}
        />
    )
}

export default Editor