import React, {useState} from 'react';

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
        const newContact = contact.concat({name, phone}).sort((a, b) => (a.name.lastName > b.name.lastName) ? 1: -1);
        setContact(newContact);
    };

    /*  When modifying one property's value of an object,
        spread the object first, and then update the property's value
        name = {firstName: '', lastName: ''}
        onChange={(e) => setName({...name, firstName: e.target.value })}/>
    */
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={'FirstName'} value={name.firstName}
                       onChange={(e) => setName({...name, firstName: e.target.value })}/>
                <input type="text" placeholder={'LastName'} value={name.lastName}
                       onChange={(e) => setName({...name, lastName: e.target.value})}/>
                <input type="text" placeholder={'Phone'} value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="submit"/>
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
