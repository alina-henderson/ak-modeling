function PhotoGrid(props) {
  return (
    <div className="photo-grid">
      <figure className="photo-item">
        <img src={require(`./images/IMG_1.jpeg`)} alt=''/>
      </figure>
      <figure className="photo-item">
        <img src={require(`./images/IMG_2.jpeg`)} alt=''/>
      </figure>
      <figure className="photo-item">
        <img src={require(`./images/IMG_3.jpeg`)} alt=''/>
      </figure>
      <figure className="photo-item">
        <img src={require(`./images/IMG_4.jpeg`)} alt=''/>
      </figure>
      <figure className="photo-item">
        <img src={require(`./images/IMG_5.jpeg`)} alt=''/>
      </figure>
      <figure className="photo-item">
        <img src={require(`./images/IMG_6.jpeg`)} alt=''/>
      </figure>
    </div>
  )
}

export default PhotoGrid;