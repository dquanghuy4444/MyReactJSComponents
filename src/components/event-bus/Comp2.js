import EventBus, { ENUM_EVENT_BUS_NAME } from './event-bus';
import useEventBus from './useEventBus.ts';
import { useState } from 'react';

function Comp2() {

    // state
    const [message , setMessage] = useState("");

    // event bus
    const handleOnEventBus = (res) => {
        console.log(res);
        const payload = res.payload;
        if (payload) {
            switch (res.type) {
                case ENUM_EVENT_BUS_NAME.NEW_MESSSAGE:
                    handleNewMessage(payload);
                    break;
                default:
                    break;
            }
        }
    }

    const handleNewMessage = (payload) =>{
        console.log(payload)
        setMessage(payload.message)
    }

    useEventBus(handleOnEventBus);

    return (
        <div>
            <h5>Đây là component 2</h5>
            {
                message
            }
        </div>

    );
}

export default Comp2;

