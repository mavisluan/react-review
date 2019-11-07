import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ControlledInput = () => {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    });
    const [phone, setPhone] = useState('');
    const [contact, setContact] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // sort an array of objects by property value
        const newContact = contact.concat({name, phone}).sort((a, b) => (a.name.lastName > b.name.lastName) ? 1 : -1);
        setContact(newContact);
        // clear input
        setName({
            firstName: '',
            lastName: ''
        });
        setPhone('')
    };

    /*  When modifying one property's value of an object,
        spread the object first, and then update the property's value
        name = {firstName: '', lastName: ''}
        onChange={(e) => setName({...name, firstName: e.target.value })}/>
    */

    /*
        Ways to submit a form
        1) Use <form>
            -> pass submit function to form -->    <form onSubmit={handleSubmit}>
            -> submit button (type: submit)
            -> handleSubmit function (e.preventDefault() -> to stop the form submitting the input data)
            -> setState functions

        2) Use <input> only
          -> pass handleSubmit to submit button -->  <button onClick={handleSubmit}>Submit</button>
          -> handleSubmit function doesn't need to have e.preventDefault()
    */
    return (
        <div className="container mt-5 justify-content-around align-items-center">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={'FirstName'} value={name.firstName}
                       onChange={(e) => setName({...name, firstName: e.target.value})}/>
                <input type="text" placeholder={'LastName'} value={name.lastName}
                       onChange={(e) => setName({...name, lastName: e.target.value})}/>
                <input type="text" placeholder={'Phone'} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="submit" className="btn-primary"/>
                {/*<Button variant={"primary"} onClick={handleSubmit}>Submit</Button>*/}
            </form>
            <div>
                <ol>
                    {contact.map((c, index) => (
                        <li key={index}>
                            <span>Name: {c.name.firstName} {c.name.lastName} || Phone: {c.phone}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default ControlledInput
