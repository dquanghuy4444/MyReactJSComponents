import React , { useEffect, useState } from 'react';
import { customhooks } from "./customhooks";
import "./CustomHook.css";
import {UnControlled as CodeMirror} from 'react-codemirror2'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/rubyblue.css');
require('codemirror/theme/darcula.css');
require("codemirror/mode/css/css");
require('codemirror/mode/javascript/javascript.js');

function CustomHook() { 

    const [customhook , setCustomhook] = useState({});
    const [id , setId] = useState(1);

    useEffect(() =>{
        setCustomhook(customhooks.find(ch => ch.id === id));
    },[id])

    return (
        <div className="customhooks-container">
            <div className="customhooks-navbar">
                <nav>
                    <ul>
                        { 
                            customhooks.map(ch => <li onClick={() => setId(ch.id) }>{ ch.name }</li> )
                        }  
                    </ul>
                </nav>
            </div>

            <div className="customhooks-wrapper">
                {
                    customhook.name
                }
                <br></br>
                <CodeMirror
                    autoScroll={ true }
                    autoCursor={ true }
                    value={ customhook.htmlEl }
                    options={{
                    mode: 'javascript',
                    theme: 'darcula',
                    lineNumbers: true
                    }}
                    onChange={(editor, data, value) => {
                    }}
                />
            </div>
        </div>
    );
}

export default CustomHook;


