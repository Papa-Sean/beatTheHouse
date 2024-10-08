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
    <main className='align-element'>
      <div className='hero bg-base-200 min-h-fit mt-20 mb-20 rounded-2xl px-8 py-8 m-4 '>
        <div className='grid sm:grid-cols-2 gap-8'>
          <div className='grid'>
            <h1 className='grid place-content-center text-3xl font-bold'>
              Register now!
            </h1>
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <Form
              method='post'
              className='grid m-8'
            >
              <FormRow
                className='grid capitalize'
                type='text'
                name='name'
              />
              <FormRow
                className='form-control capitalize'
                type='text'
                name='lastName'
                labelText='last name'
              />
              <FormRow
                className='form-control capitalize'
                type='location'
                name='location'
              />
              <FormRow
                className='form-control capitalize'
                type='email'
                name='email'
              />
              <FormRow
                className='form-control capitalize'
                type='password'
                name='password'
              />
              <div className='form-control mt-6'>
                <button
                  type='submit'
                  className='btn btn-block btn-warning'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
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
    </main>
  );
};

export default Register;
