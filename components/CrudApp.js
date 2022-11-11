import React, {useState} from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
    {
        id: 1,
        name: "Load dishwasher",
        person: "Ryan",
      },
      {
        id: 2,
        name: "Move trash",
        person: "Mario",
      },
      {
        id: 3,
        name: "Water house plants",
        person: "Lara",
      },
      {
        id: 4,
        name: "Sort recycling",
        person: "Alfred",
      },
      {
        id: 5,
        name: "Fold clothes",
        person: "John",
      },

];

const CrudApp = () => {
    
  const [db, setDb] = useState(initialDb)

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  
  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };
  
  const deleteData  = (id) => {
    let isDelete = window.confirm(
    `Are you sure?`
    );
    if (isDelete){
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    }else{
      return;
    }
  };


    return (
        <div>
            <h2>CRUD React App</h2>
            <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
            />
            
            <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
            />
        </div>
    );
};

export default CrudApp;