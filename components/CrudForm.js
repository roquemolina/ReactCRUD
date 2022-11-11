import React from "react";
import { useEffect, useState } from "react";

const initialForm = {
    name: "",
    person: "",
    id: null,
}


const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState({initialForm});

    useEffect(() =>{
        if(dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }

    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    };
        
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.person) {
            alert("Incomplete. Please fill out all fields");
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    };
    
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div>
            <h3>{!dataToEdit ? "Add" : "Modify"}</h3>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={form.name}/>
                
                <input
                type="text"
                name="person"
                placeholder="Person"
                onChange={handleChange}
                value={form.person} />

                <input
                type="submit"
                value="Send"/>
                
                <input
                type="reset"
                value="Reset" onClick={handleReset}/>
            </form>


        </div>
    )
};

export default CrudForm;