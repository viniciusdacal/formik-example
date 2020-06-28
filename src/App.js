import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import schema from './schema';
import './App.css';

function App() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          name: '',
          email: '',
        }}
        render={({ values, errors, touched, isValid }) => (
          <Form>
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
