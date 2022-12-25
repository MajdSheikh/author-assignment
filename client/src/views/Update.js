import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";
import AuthorForm from '../components/AuthorForm'

    
const Update = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
 
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, []);

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
        .then(res => navigate("/"))
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
            // navigate("/");
    }

    
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <h3>Edit this author</h3>
{loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                        errors={errors}/>
                </>
            )}
        </div>
    )
}
    
export default Update;

