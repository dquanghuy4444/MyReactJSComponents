import React from 'react';

function Card(props) { 

    const drapStart = (e) =>{
        const target = e.target;
        e.dataTransfer.setData('cardid' , target.id);

        setTimeout(() =>{
            target.style.display = 'none';
        },0);
    }

    const dragOver = (e) =>{
        e.stopPropagation();

    }

    return (
        <div
        id={ props.id }
        className={ props.className }
        draggable={ props.draggable }
        onDragStart={ drapStart }
        onDragOver={ dragOver }
        >
            {
                props.children
            }
        </div>
    );
}

export default Card;
