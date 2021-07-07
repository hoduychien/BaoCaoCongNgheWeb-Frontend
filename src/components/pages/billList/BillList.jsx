import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import {Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Modal, Button, TextField} from '@material-ui/core';
import "./billList.css"


const baseUrl='http://127.0.0.1:5000/api/bill'

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius:'10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

function BillList() {
const styles= useStyles();
  const [data, setData]=useState([]);
  const [ModalInsert, setModalInsert]=useState(false);
  const [ModalEdit, setModalEdit]=useState(false);
  const [ModalDelete, setModalDelete]=useState(false);

  const [productSelect, setproductSelect]=useState({
    ten_khachhang: '',
    hotennv:'',
    tensp: '',
    ngaylap:'',
    ngaynhan: '',
    soluong: '',
    id_khachhang:'',
    id_sanpham: '',
    id_nhanvien: ''

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
    await axios.put(baseUrl+'/update', productSelect)
    .then(response=>{
      var dataNueva=data;
      dataNueva.map(consola => {
        if(productSelect.id===consola.id){
          consola.id=productSelect.id;
          consola.id_khachhang=productSelect.id_khachhang;
          consola.id_nhanvien=productSelect.id_nhanvien;
          consola.id_sanpham=productSelect.id_sanpham;
          consola.ngaylap=productSelect.ngaylap;
          consola.ngaynhan=productSelect.ngaynhan;
          consola.soluong=productSelect.soluong;
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
      <h3>Create new Bill</h3>
      <br />
      <TextField name="id_khachhang" className={styles.inputMaterial} label="Customer ID" onChange={handleChange}/>
      <br />
      <TextField name="id_sanpham" className={styles.inputMaterial} label="Product ID" onChange={handleChange}/>
      <br />
      <TextField name="id_nhanvien" className={styles.inputMaterial} label="Employee ID" onChange={handleChange}/>
      <br />
      <TextField name="ngaylap" className={styles.inputMaterial} label="Invoice date" onChange={handleChange}/>
      <br />
      <TextField name="ngaynhan" className={styles.inputMaterial} label="Received date" onChange={handleChange}/>
      <br />
      <TextField name="soluong" className={styles.inputMaterial} label="Amount" onChange={handleChange}/>
      <br />
      <br/>
      <div align="right">
        <Button color="primary" onClick={()=>postProduct()}>Add</Button>
        <Button onClick={()=>cancelInsert()}>Cancel</Button>
      </div>
    </div>
  )

  const bodyEditForm=(
    <div className={styles.modal}>
      <h3>Edit Bill</h3>
      <br/>
      <TextField name="" className={styles.inputMaterial} label="Bill ID" onChange={handleChange} value={productSelect && productSelect.id}/>
      <br /><br />
      <TextField name="id_khachhang" className={styles.inputMaterial} label="Customer ID" onChange={handleChange} value={productSelect && productSelect.id_khachhang}/>
      <br /><br/>
      <TextField name="id_nhanvien" className={styles.inputMaterial} label="Employee ID" onChange={handleChange} value={productSelect && productSelect.id_nhanvien}/>
      <br /><br/>
      <TextField name="id_sanpham" className={styles.inputMaterial} label="Product ID" onChange={handleChange} value={productSelect && productSelect.id_sanpham}/>
      <br /><br />
      <TextField name="ngaylap" className={styles.inputMaterial} label="Invoice date" onChange={handleChange} value={productSelect && productSelect.ngaylap}/>
      <br /><br/>
      <TextField name="ngaynhan" className={styles.inputMaterial} label="Received date" onChange={handleChange} value={productSelect && productSelect.ngaynhan}/>
      <br /><br/>
      <TextField name="soluong" className={styles.inputMaterial} label="Amount" onChange={handleChange} value={productSelect && productSelect.soluong}/>
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
      <p>Are you sure you want to delete Bill <b>{productSelect && productSelect.id}</b> </p>
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
      <h1 className="productTitle">Bill List</h1>
      <Button variant="contained" color="primary" onClick={()=>cancelInsert()}>Create</Button>
      </div>
     <TableContainer>
       <Table>
         <TableHead>
           <TableRow>
             <TableCell className={styles.table}>ID</TableCell>
             <TableCell className={styles.table}>Customer</TableCell>
             <TableCell className={styles.table}>Employee</TableCell>
             <TableCell className={styles.table}>Product</TableCell>
             <TableCell className={styles.table}>Invoice date</TableCell>
             <TableCell className={styles.table}>Received date</TableCell>
             <TableCell className={styles.table}>Amount</TableCell>
             <TableCell className={styles.table}  align="center">Action</TableCell>
           </TableRow>
         </TableHead>

         <TableBody>
           {data.map(consola=>(
             <TableRow key={consola.id}>
               <TableCell className={styles.table}>{consola.id}</TableCell>
               <TableCell className={styles.table}>{consola.ten_khachhang}</TableCell>
               <TableCell className={styles.table}>{consola.hotennv}</TableCell>
               <TableCell className={styles.table}>{consola.tensp}</TableCell>
               <TableCell className={styles.table}>{consola.ngaylap}</TableCell>
               <TableCell className={styles.table}>{consola.ngaynhan}</TableCell>
               <TableCell className={styles.table}>{consola.soluong}</TableCell>
               <TableCell className={styles.table} align="center">
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

export default BillList;