function Book(props) {
    return (
    <div className="card" style={{width: 18 + 'rem'}}>
    <img src="bookimage.jpg" className="card-img-top" style={{width: 200, height: 200}} alt="..."></img>
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>)
}

export default Book;