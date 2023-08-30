import Card from './card';
import { GetImages } from '../../middleware/ImageList/images';
import FullScreen from './fullScreen';
import { useState } from 'react';
import '../../styles/imageList/imageList.scss';

const ImageList = () => {
    // set image state
    const [images, setImages] = useState();
    GetImages(images, setImages);

    // map object into card components
    return (
        <>
        <div className='image__list'>
            {
            images && images.map(img => (
                <Card key={img.id} id={img.id} userImg={`${img.user.profile_image}.webp`} userName={img.user.name} likes={img.likes} img={`${img.url}.jpg`} dimensions={img.dimensions} alt={img.alt_description}/>
            ))
            }
        </div>
        <FullScreen />
        </>
    );
}

export default ImageList;