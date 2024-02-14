import React, { Component } from 'react'

export class Newsitem extends Component {

  render() {
    let { title, desc, imgurl, newsurl, author, date ,source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%" ,zIndex:'1'}}> {source}</span> 
          <img src={!imgurl ? "https://tse2.mm.bing.net/th?id=OIP.GrlKlyFNkr6QJsohXKGp3QHaEj&pid=Api&P=0&h=180" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{desc}</p>
            <p className="card-text"><small className="text-body-secondary">BY {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="blank" className="btn btn-sn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
