import React from 'react';

function Board(props) { 
    const drop = e =>{
        e.preventDefault();
        const cardid = e.dataTransfer.getData('cardid');

        const card = document.getElementById(cardid);
        card.style.display = 'block';

        e.target.appendChild(card);

    }

    const dragOver = e =>{
        e.preventDefault();
    }


    return (
        <div
        id={ props.id }
        onDrop={ drop }
        onDragOver={ dragOver }
        className={ props.className }
        >
            {
                props.children
            }
        </div>
    );
}

export default Board;
