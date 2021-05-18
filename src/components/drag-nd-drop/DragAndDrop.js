
import Board from './Board';
import Card from './Card';
import './DragAndDrop.css';
function DragAndDrop() { 

  return (
    <div className="flexbox">
      <Board id="board1" className="board">
        <Card id="card1" className="card" draggable="true">
          <p>Card One</p>
        </Card>
      </Board>
      <Board id="board2" className="board">
        <Card id="card2" className="card" draggable="true">
          <p>Card Two</p>
        </Card>
      </Board>
    </div>
  );
}

export default DragAndDrop;
