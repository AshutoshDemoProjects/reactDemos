import { InputAdornment, makeStyles, Paper, TableBody, TableCell, TableRow, Toolbar } from '@material-ui/core';
import { Add, DeleteOutline, Edit, PeopleOutline, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import { Controls } from '../../components/controls';
import PageHeader from '../../components/PageHeader'
import Popup from '../../components/Popup';
import useTable from './../../components/useTable';
import { addEmployee, deleteEmployee, getAllEmployee, updateEmployee, } from './../../service/productService';
import { dateToString } from './../../service/dateService';
import ProductForm from './ProductForm';
import Notification from '../../components/Notification';
import ConfirmDialog from '../../components/ConfirmDialog';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(2),
        padding: theme.spacing(3)
    },
    inputSearch: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}));
const headCells = [
    { id: 'name', title: 'Product Name' },
    { id: 'price', title: 'Price' },
    { id: 'quantity', title: 'Quantity' },
    { id: 'description', title: 'Description', disableSort: true },
    { id: 'category', title: 'Category' },
    { id: 'prodDate', title: 'Manufacturing Date' },
    { id: 'inStock', title: 'inStock' },
    { id: 'action', title: 'Action', disableSort: true },
];
export default function Products() {
    const styles = useStyles();
    const [records, setRecords] = useState(getAllEmployee());
    const [filterFn, setFilterFn] = useState({ fn: items => items });
    const [openPopup, setOpenPopup] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState();
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' });
    const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = useTable(records, headCells, filterFn);
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === '')
                    return items;
                else
                    return items.filter(x => x.name.toLowerCase().includes(target.value.toLowerCase()));
            }
        });
    }
    const addOrEdit = (product, resetForm) => {
        if (product.id === 0)
            addEmployee(product);
        else
            updateEmployee(product);
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(getAllEmployee());
        setNotify({
            isOpen: true,
            message: 'Submitted Successfully...',
            type: 'success'
        });
    }
    const openInPopup = product => {
        setRecordForEdit(product);
        setOpenPopup(true);
    }
    const onDelete = (id) => {
        deleteEmployee(id);
        setRecords(getAllEmployee());
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully...',
            type: 'error'
        });
    }
    return (
        <>
            <PageHeader icon={<PeopleOutline fontSize='large' />} title='Employees' subTitle='Employee Details.' />
            <Paper className={styles.pageContent}>

                <Toolbar>
                    <Controls.Input className={styles.inputSearch} label='Search Employee' onChange={handleSearch} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                    }} />
                    <Controls.Button onClick={() => { setOpenPopup(true); setRecordForEdit(null); }} className={styles.newButton} text='Add New' startIcon={<Add />} />
                </Toolbar>

                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map(prod => (
                            <TableRow key={prod.id}>
                                <TableCell>{prod.name}</TableCell>
                                <TableCell>{prod.price}</TableCell>
                                <TableCell>{prod.quantity}</TableCell>
                                <TableCell>{prod.description}</TableCell>
                                <TableCell>{prod.category}</TableCell>
                                <TableCell>{dateToString(prod.prodDate)}</TableCell>
                                <TableCell>{prod.inStock ? 'avable' : 'out of stock'}</TableCell>
                                <TableCell>
                                    <Controls.ActionButton onClick={() => { openInPopup(prod); }} color='primary'><Edit /></Controls.ActionButton>
                                    <Controls.ActionButton onClick={() => {
                                        setConfirmDialog({
                                            isOpen: true,
                                            title: 'Are you sure to delete this record',
                                            subTitle: 'You can\'t undo this operation?',
                                            onConfirm: () => onDelete(prod.id)
                                        });
                                    }} color='secondary'><DeleteOutline /></Controls.ActionButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
            <Popup title='Product Form' openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <ProductForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
            </Popup>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog}></ConfirmDialog>
        </>
    );
}
