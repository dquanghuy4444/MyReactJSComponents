import React, { useRef, useEffect } from 'react'

const listLink = [
    {
        link: "https://www.facebook.com",
        text: "Facebook",
    },
    {
        link: "https://github.com",
        text: "Github",
    },
    {
        link: "https://viblo.asia",
        text: "Viblo",
    },
    {
        link: "https://www.google.com",
        text: "Google",
    },
]

const convertLinkToText = (link) => {
    const existLink = listLink.find(item => link.includes(item.link))

    return !!existLink ? existLink.text : link
}

function isUrlValid(userInput) {
    var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    return !!res
}


export default function InsertLinkToArea() {
    const editorRef = useRef(null)



    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.addEventListener('paste', (e) => {
                e.preventDefault()
                const contentCopied = e.clipboardData.getData('text/plain')

                if (isUrlValid(contentCopied)) {
                    const el = `<div class="link" contenteditable="false"><a href="${contentCopied}" target="_blank">${convertLinkToText(contentCopied)}</a></div>`
                    document.execCommand("insertHTML", false, el)
                } else {
                    document.execCommand("insertText", false, contentCopied)
                }
            })
        }
    }, [editorRef])

    return (
        <div
            className="editor"
            contentEditable
            suppressContentEditableWarning
            ref={editorRef}
        />
    )
}
