import Picture from "./Picture";

// if you wish to use info from the props object, dont forget to pass it into your function component!
const Gallery = (props) => {
    console.log('Gallery rendered here.', props);

    return (
        <section className="gallery">
            <h2>A gallery of pictures</h2>

            <ul>
                {/* we are going to map through the array of art within the props object */}
                {/* for each object within the array, we will return a Picture component */}
                {/* and pass down the image and title for that specific object which the Picture component will then render to the page */}

                {
                    props.arrayOfArt.map( (artObject) => {
                        // for each object within the array, we will return a Picture component

                        // and pass down the image and title for that specific object which the Picture component will then render to the page
                        return <Picture artInfo={artObject} key={artObject.id} />
                    })
                }
            </ul>
        </section>
    )
}

export default Gallery;