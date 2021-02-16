import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './LazyLoadingWithReactLazyLoadImageComp.css';

function LazyLoadingWithReactLazyLoadImageComp() {
    const [images, setImage] = useState([]);

    useEffect(() => {
        fetchImages();
    }, [])

    const fetchImages = () => {
        const count = 50;
        const apiRoot = "https://api.unsplash.com";
        const accessKey = "tR1bPbMKHMawPCQVTYPKQoG6Q_tlU37CxZt51OzTZeY";

        axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
        .then(res => {
            setImage([...images, ...res.data]);
        })
    }

    if(!images){
        return <div>Loading...</div>
    }

    return (
        <div className="lazyloadwithreact-container">
            {
                images.map((image) =>{
                    return <LazyLoadImage
                    effects="blur"
                    src={ image.urls.regular }
                    alt={ image.alt_description }
                    key={ image.id }
                    height={ "500px" }
                    width={ "500px" }
                    >
                    </LazyLoadImage>
                })
            }
        </div>
  );
}

export default LazyLoadingWithReactLazyLoadImageComp;
