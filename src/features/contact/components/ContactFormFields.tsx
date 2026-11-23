import { useFormContext } from 'react-hook-form';
import { type ContactFormData } from '../schemas/contactSchema';

export const ContactFormFields = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext<ContactFormData>();

  return (
    <>
      <div className='stack-column'>
        <input
          className='input-field'
          placeholder='Your Name'
          {...register('name')}
        />
        {errors.name && <p className='error-message'>{errors.name.message}</p>}
      </div>

      <div className='stack-column'>
        <input
          className='input-field'
          placeholder='Your Email'
          type='email'
          {...register('email')}
        />
        {errors.email && <p className='error-message'>{errors.email.message}</p>}
      </div>

      <div className='stack-column'>
        <textarea
          className='w-full h-32 input-field resize-none'
          placeholder='Your Message'
          {...register('message')}
        />
        {errors.message && <p className='error-message'>{errors.message.message}</p>}
      </div>
    </>
  );
};
