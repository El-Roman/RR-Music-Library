import GalleryItem from './GalleryItem'

interface GalleryItemProps {
    data: any
}

function Gallery(props:GalleryItemProps){

    const display = props.data.map((item: any, index: any) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
