import { useRef } from 'react';
import { useOnLoadImages } from './useOnLoadImages';

export default function App() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useOnLoadImages(wrapperRef);

  console.log(imagesLoaded);

  return (
    <div className="App" ref={wrapperRef}>
      <h2>How to detect images loaded in React</h2>
      <div>
        <p>{imagesLoaded && 'Images loaded'}</p>
        <img
          src="https://i.pinimg.com/564x/8b/09/87/8b09873753b3fede7abc1ffd8a147c2e.jpg"
          alt="image1"
        />
        <img
          src="https://i.pinimg.com/564x/39/ed/15/39ed1564db8313300d9759dbbf1e6e2a.jpg"
          alt="image2"
        />
        <img
          src="https://i.pinimg.com/564x/bc/ec/24/bcec24fd07fca68fd172d3df5d8b2bb9.jpg"
          alt="image3"
        />
      </div>
    </div>
  );
}
