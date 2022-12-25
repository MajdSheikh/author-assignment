import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AuthorForm = (props) => {
    // const [name, setName] = useState(props.initialName);
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);


    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        setName("");
    }

    return (
        
        <div>

        <form onSubmit={onSubmitHandler}>
        {props.errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}
            <div>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <button type="submit"><Link to={"/"}>Cancel</Link></button>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}
export default AuthorForm

