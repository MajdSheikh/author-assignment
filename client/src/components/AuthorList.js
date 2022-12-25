import React from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'


const AuthorList = (props) => {
    const {authors, removeFromDom} = props;

    return (
        <div>
            <h3>Favorite Authors:</h3>
            <Link to={"/new"}>Add an author:</Link>
            <h3>we have quotes by:</h3>
            <table style={{margin:"0 auto", border:"1px solid black"}}>
            <thead>
                <th>Author</th>
                <th >Actions available</th>
            </thead>
            {authors.sort((a, b) => a.name > b.name ? 1 : -1,).map((author, i) => {
                    return <tr key={i}>
                        <td>{author.name}</td>
                        <td>
                            <button type="submit"><Link to={"/author/" + author._id + "/edit"}>Edit</Link></button>
                            <DeleteButton authorId={author._id} successCallback={ () => removeFromDom(author._id) }/>
                        </td>
                    </tr>
                })}
        </table>
        </div>
    )
}

export default AuthorList;

