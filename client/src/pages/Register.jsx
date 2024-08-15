import React from 'react';
import { Link, Form, useNavigation, redirect } from 'react-router-dom';
import { FormRow } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration Successful!');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div className='hero bg-base-200 min-h-fit mt-10 mb-10 rounded-2xl px-8 py-8'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Register now!</h1>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
          <Form
            method='post'
            className='card-body'
          >
            <FormRow
              className='form-control capitalize'
              type='text'
              name='name'
              defaultValue='Papa-Sean'
            />
            <FormRow
              className='form-control capitalize'
              type='text'
              name='lastName'
              labelText='last name'
              defaultValue='Doe'
            />
            <FormRow
              className='form-control capitalize'
              type='location'
              name='location'
              defaultValue='Detroit'
            />
            <FormRow
              className='form-control capitalize'
              type='email'
              name='email'
              defaultValue='papa@papa.com'
            />
            <FormRow
              className='form-control capitalize'
              type='password'
              name='password'
              defaultValue='secret123'
            />
            <div className='form-control mt-6'>
              <button
                type='submit'
                className='btn btn-block btn-warning'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'submitting...' : 'submit'}
              </button>
            </div>

            <p>
              Already a member? <span></span>
              <Link
                to='/login'
                className='member-btn'
              >
                Login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
