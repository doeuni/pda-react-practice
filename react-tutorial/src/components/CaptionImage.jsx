
function CaptionImage({imgUrl, caption}){ //xml의 프로퍼티스를 받기 떄문에 prop이다. 인자이름이. 
    // console.log(props);
    // const {imgUrl, caption} =props

    return (
        <div>
            <img src={imgUrl} alt={caption} />
            <p>{caption}</p>
        </div>
    )
}


export default CaptionImage;