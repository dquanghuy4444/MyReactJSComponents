
import { useEffect, useState } from 'react';

const ENUM_CONNECTION_TYPE ={
    ONLINE:"online",
    OFFLINE:"offline",
    FOURG:"4g",
    THREEG:"3g",
    TWOG:"2g",
}
function ConnectionType() {
    const [conType , setConType] = useState(ENUM_CONNECTION_TYPE.ONLINE)

    useEffect(() =>{
        const setConnectType = () =>{
            if (navigator.connection && navigator.connection.effectiveType) {
                const connectionType = navigator.onLine 
                    ? navigator.connection.effectiveType
                    : 'offline'
                setConType(connectionType)
            }
        }

        navigator.connection.addEventListener('change', setConnectType);

        return(() =>{
            navigator.connection.removeEventListener('change', setConnectType);
        })
    },[])

    const showElByConType = () =>{
        switch(conType) {
            case ENUM_CONNECTION_TYPE.ONLINE:
                return (<div>
                        <iframe width="420" height="345" title="" src="https://www.youtube.com/embed/XGSy3_Czz8k">
                        </iframe>
                    </div>);
            case ENUM_CONNECTION_TYPE.OFFLINE:
                return <div>Huhu</div>
            case ENUM_CONNECTION_TYPE.FOURG:
                return (<div>
                    <iframe width="420" height="345" title="" src="https://www.youtube.com/embed/XGSy3_Czz8k">
                    </iframe>
                </div>);
            case ENUM_CONNECTION_TYPE.THREEG:
                return <img src="data:image/jpeg;base64,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"></img>
            case ENUM_CONNECTION_TYPE.TWOG:
                return <div></div>
            default:
                return <div></div>
        }
    }

    return (
        <div className="wrapper">
            {
                conType
            }
            <br></br>
            {
                showElByConType()
            }
        </div>
    );
}

export default ConnectionType;
