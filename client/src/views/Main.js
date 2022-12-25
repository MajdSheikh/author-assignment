import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList'

    
const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res =>{ 
                setAuthors(res.data.authors)
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])
    
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }

    
    return (
        <div>
            {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    );
}
    
export default Main;

