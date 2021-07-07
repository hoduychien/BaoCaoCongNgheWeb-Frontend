import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import "./productList.css"


const baseUrl='http://127.0.0.1:5000/api/product'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:'10px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  },
  table:{
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize:'15px'
  },
  message:{
    color:'red'
  }
}));

function ProductList() {
const styles= useStyles();
  const [data, setData]=useState([]);
  const [ModalInsert, setModalInsert]=useState(false);
  const [ModalEdit, setModalEdit]=useState(false);
  const [ModalDelete, setModalDelete]=useState(false);

  const [productSelect, setproductSelect]=useState({
    tensp: '',
    dongia:''
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setproductSelect(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(productSelect);
  }

  const getProduct=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);
    })
  }

  const postProduct=async()=>{
    await axios.post(baseUrl+'/add', productSelect)
    .then(response=>{
      setData(data.concat(response.data))
      cancelInsert()
    })
  }

  const putProduct=async()=>{
    await axios.post(baseUrl+'/update', productSelect)
    .then(response=>{
      var dataNueva=data;
      dataNueva.map(consola => {
        if(productSelect.id===consola.id){
          consola.id=productSelect.id;
          consola.tensp=productSelect.tensp;
          consola.dongia=productSelect.dongia;
        }
      })
      setData(dataNueva);
      cancelEdit();
    })
  }

  const deleteProduct=async()=>{
    await axios.delete(baseUrl+'/delete/'+productSelect.id)
    .then(response=>{
      setData(data.filter(consola=>consola.id!==productSelect.id));
      cancelDelete();
    })
  }

  const cancelInsert=()=>{
    setModalInsert(!ModalInsert);
  }

  const cancelEdit=()=>{
    setModalEdit(!ModalEdit);
  }

  const cancelDelete=()=>{
    setModalDelete(!ModalDelete);
  }

  const seleccionarConsola=(consola, caso)=>{
    setproductSelect(consola);
    (caso==='Edit')?cancelEdit():cancelDelete()
  }

  useEffect(async()=>{
    await getProduct();
  },[])

  const bodyInsertForm=(
    <div className={styles.modal}>
      <h3>Create new product</h3>
      <br />
      <TextField name="tensp" className={styles.inputMaterial} label="Product name" onChange={handleChange}/>
      <br />
      <TextField name="dongia" className={styles.inputMaterial} label="Unit Prine" onChange={handleChange}/>
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={()=>postProduct()}>Add</Button>
        <Button onClick={()=>cancelInsert()}>Cancel</Button>
      </div>
    </div>
  )

  const bodyEditForm=(
    <div className={styles.modal}>
      <h3>Edit Product</h3>
      <br/>
      <TextField name="id" className={styles.inputMaterial} label="Product ID" onChange={handleChange} value={productSelect && productSelect.id}/>
      <br />
      <br />
      <TextField name="tensp" className={styles.inputMaterial} label="Product Name" onChange={handleChange} value={productSelect && productSelect.tensp}/>
      <br /><br />
      <TextField name="dongia" className={styles.inputMaterial} label="Unit prine" onChange={handleChange} value={productSelect && productSelect.dongia}/>
      <br />
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>putProduct()}>UPDATE</Button>
        <Button onClick={()=>cancelEdit()}>Cancel</Button>
      </div>
    </div>
  )

  const bodyDeleteForm=(
    <div className={styles.modal}>
      <h2 className={styles.message}>Message !</h2>
      <br/>
      <p>Are you sure you want to delete the <b>{productSelect && productSelect.tensp}</b> ?</p>
      <br/>
      <div align="right">
        <Button color="secondary" onClick={()=>deleteProduct()} >OK</Button>
        <Button color="primary" onClick={()=>cancelDelete()}>Cancel</Button>
      </div>

    </div>
  )


  return (
    <div className="productList">
      <div className="productList">
      <div className="productTitleContainer">
      <h1 className="productTitle">Product List</h1>
      <Button variant="contained" color="primary" onClick={()=>cancelInsert()}>Create</Button>
      </div>
     <TableContainer>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell className={styles.table}>ID</TableCell>
             <TableCell className={styles.table}>Product Name</TableCell>
             <TableCell className={styles.table}>Unit price</TableCell>
             <TableCell className={styles.table}  align="center">Action</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {data.map(consola=>(
             <TableRow key={consola.id}>
               <TableCell className={styles.table}>{consola.id}</TableCell>
               <TableCell className={styles.table}>{consola.tensp}</TableCell>
               <TableCell className={styles.table}>{consola.dongia}</TableCell>
               <TableCell className={styles.table}  align="center">
                 <button className="productListEdit" onClick={()=>seleccionarConsola(consola, 'Edit')}>Edit
                </button>
                 <button onClick={()=>seleccionarConsola(consola, 'Delete')} className="productListDelete">
                  Delete
                </button>
                 </TableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </TableContainer>
     
     <Modal
     open={ModalInsert}
     onClose={cancelInsert}>
        {bodyInsertForm}
     </Modal>

     <Modal
     open={ModalEdit}
     onClose={cancelEdit}>
        {bodyEditForm}
     </Modal>

     <Modal
     open={ModalDelete}
     onClose={cancelDelete}>
        {bodyDeleteForm}
     </Modal>
    </div>
    </div>
    
  );
}

export default ProductList;