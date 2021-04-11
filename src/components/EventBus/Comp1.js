import EventBus, { ENUM_EVENT_BUS_NAME } from './event-bus';

function Comp1() {

    const setStateFromEventBus =() =>{
        console.log(123);
        EventBus.getInstance().post({
            type: ENUM_EVENT_BUS_NAME.NEW_MESSSAGE,
            payload: {
                message:"Đây là giá trị từ component 1 truyền cho component 2"
            },
        });
    }

    return (
        <div>
            <h5>Đây là component 1</h5>
            <button onClick={ setStateFromEventBus }>
                Set state qua event bus
            </button>
        </div>

    );
}

export default Comp1;

