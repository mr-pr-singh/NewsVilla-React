import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="container">
                    <div className="card my-3">
                        <div style ={ {display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'}}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://cdn.vox-cdn.com/thumbor/wyNg90zDlcwcpUzmzBqbCUH756w=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23904877/zenfone_9__2.jpg" : imageUrl} className="card-img-top" alt="pic " />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default Newsitem
