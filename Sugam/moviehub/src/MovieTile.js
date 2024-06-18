import React from "react"
import ImageContentHover from "react-image-hover"

class MovieTile extends React.Component {
    render()  {
        return (
            <div className="MovieTile">
                <ImageContentHover 
                    className="image-cover"
                    titleWidth="180px"
                    titleHeight="200px"
                    image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
                    effect="fadeIn"
                    content={{
                        title:'Movie',
                        width:'180px',
                        height:'200px'
                    }} />
            </div>
        )
    }
}

export default MovieTile