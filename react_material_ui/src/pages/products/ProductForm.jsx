import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useForm, Form } from '../../components/useForm';
import { Controls } from '../../components/controls';
import * as employeeService from '../../service/productService';

const quantities = [
    { id: '5', title: 'Five' },
    { id: '10', title: 'Ten' },
    { id: '20', title: 'Twenty' }
];
const initialFormValues = {
    id: 0,
    name: '',
    description: '',
    quantity: '10',
    categoryId: '',
    price: 500,
    prodDate: new Date(),
    inStock: true
};
export default function ProductForm(props) {
    const { addOrEdit, recordForEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ('name' in fieldValues)
            temp.name = values.name ? '' : 'Name field is required.';
        if ('description' in fieldValues)
            temp.description = values.description ? '' : 'Description field is required.';
        if ('categoryId' in fieldValues)
            temp.categoryId = values.categoryId.length !== 0 ? '' : 'Please select category.';
        if ('price' in fieldValues)
            temp.price = Number(values.price) > 0 ? '' : 'Price must greater than zero.';
        setErrors({ ...temp });
        if (fieldValues === values)
            return Object.values(temp).every(x => x === '');
    }
    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFormValues, true, validate);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addOrEdit(values, resetForm);
        } else
            window.alert('error')
    }
    useEffect(() => {
        if (recordForEdit !== null) {
            console.log(recordForEdit);
            setValues({ ...recordForEdit });
        }
    }, [recordForEdit, setValues])
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input error={errors.name} name='name' label='Name' value={values.name} onChange={handleInputChange} />
                    <Controls.Input error={errors.description} name='description' label='Description' value={values.description} onChange={handleInputChange} multiline rows={5} />
                    <Controls.RangePicker error={errors.price} name='price' label='Price' value={values.price} onChange={handleInputChange} steps={100} marks min={0} max={10000} />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup name='quantity' label='Quantity' value={values.quantity} onChange={handleInputChange} items={quantities} />
                    <Controls.Select name='categoryId' error={errors.categoryId} label='Category' value={values.categoryId} onChange={handleInputChange} options={employeeService.getCategory()} />
                    <Controls.DatePicker name='prodDate' label='Mrf Date' value={values.prodDate} onChange={handleInputChange} />
                    <Controls.Checkbox name='inStock' label='Stock available' value={values.inStock} onChange={handleInputChange} />
                    <div>
                        <Controls.Button color='primary' type='submit' text='Submit' />
                        <Controls.Button text='Reset' onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
