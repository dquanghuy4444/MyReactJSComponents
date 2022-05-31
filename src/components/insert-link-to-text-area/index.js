import React, {
    useRef,
    useEffect
} from 'react';

const Insert = () => {
    const editorRef = useRef(null)

    function isUrlValid(userInput) {
        var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

        return !!res
    }

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.addEventListener('paste', (e) => {
                e.preventDefault()
                const contentCopied = e.clipboardData.getData('text/plain')

                if (isUrlValid(contentCopied)) {
                    const el = `<div class="link" contenteditable="false"><a href="${contentCopied}" target="_blank">${contentCopied}</a></div>`

                    document.execCommand("insertHTML", false, el)
                } else {
                    document.execCommand("insertText", false, contentCopied)
                }
            })
        }
    }, [editorRef])

    return (
        <>
                <div className = "editor"
    contentEditable suppressContentEditableWarning />
        </>

    )
}

export default Insert;