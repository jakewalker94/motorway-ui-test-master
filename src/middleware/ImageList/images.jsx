import { useEffect } from 'react';

// get images from server
export const GetImages = (images, setImages) => {
    useEffect(() => {
        fetch('images?limit=10')
        .then(res => res.json())
        .then(data => {
            console.log('Success:', data);
            setImages(data);
            return images;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);
}

