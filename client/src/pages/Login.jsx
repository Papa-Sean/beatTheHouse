import React from 'react';
import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import { FormRow } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Logged in!');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <>
      <div className='hero bg-base-200 min-h-fit mt-20 mb-20 rounded-2lg px-8 py-8'>
        <div className='hero-content items-center flex-col lg:flex-row-reverse'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
          </div>
          <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <Form
              className='card-body'
              method='post'
            >
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
              <p>
                Not a member? Register <span></span>
                <Link
                  to='/register'
                  className='member-btn'
                >
                  Here!
                </Link>
              </p>

              <div className='form-control mt-6'>
                <button
                  className='btn btn-warning'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'submitting...' : 'submit'}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
