import React, { FC, useState, useEffect } from "react"
import Vditor from "vditor"
import { VditorEditor } from "react-vditor"

const Editor: FC = () => {
    const [vditor, setVditor] = useState<Vditor>()
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
                height: window.innerHeight, // 부모 요소의 높이에 맞추기 위해 현재 창의 높이를 설정
            }}
        />
    )
}

export default Editor