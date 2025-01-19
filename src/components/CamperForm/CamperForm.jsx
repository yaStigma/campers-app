import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CSS from "./CamperForm.module.css"
export default function CamperForm() {
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").email('Invalid email')
                .required('Email required'),
        date: Yup.date().required('Date required'),
    });
    const nameFieldId = nanoid();
    const emailFieldId = nanoid();
    const dateFieldId = nanoid();
    const commentFieldId = nanoid();

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form data:', values);
             toast.success('Camper booked successfully!');
        resetForm();
    };

    return(
<>
        <ToastContainer />

        
        <Formik
        initialValues={{ name: '', email: '', date: '', comment:'' }} 
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
    >
        {({ setFieldValue, values }) => (
            <Form className={CSS.form}>

                <h2 className={CSS.title}>Book your campervan now</h2>
                <p className={CSS.text}>Stay connected! We are always ready to help you.</p>
                <div className={CSS.blok}>
                    <Field className={CSS.field} type="text" name="name" id={nameFieldId} placeholder="Name*" />
                    <ErrorMessage className={CSS.error} name="name" component="span" />
                </div>
                <div className={CSS.blok}>
                     <Field className={CSS.field} type="email" name="email" id={emailFieldId} placeholder="Email*" />
                    <ErrorMessage className={CSS.error} name="email" component="span" />
                </div>
                <div className={CSS.blok}>
                <ReactDatePicker
                            selected={values.date}
                            onChange={(date) => setFieldValue('date', date)}
                            placeholderText="Date*"
                            className={CSS.field}
                            id={dateFieldId}
                            
                        />
                    <ErrorMessage className={CSS.error} name="date" component="span" />
                </div>
                <div className={CSS.blok}>
                     <Field className={`${CSS.field} ${CSS.comment}`} type="text" name="comment" id={commentFieldId} placeholder="Comment" />
                 </div>
                 <div className={CSS.buttonBox}>
                <button className={CSS.button} type="submit">Send</button></div>
            </Form>
        )}
    </Formik></>
    )
};
