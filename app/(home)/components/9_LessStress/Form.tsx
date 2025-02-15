'use client';

import { Formik, Form } from 'formik';
import MyInput from '@/components/custom/MyComponents/MyInput';
import MyDropdown from '@/components/custom/MyComponents/MyDropdown';
import { bedroomOptions, propertyTypes, initialValues, validationSchema } from '@/components/custom/ReusedSections/Form/data';
import { useState } from 'react';

type FormValues = typeof initialValues;

export default function FormSection() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [step1Data, setStep1Data] = useState<Partial<FormValues>>({});

  const handleNext = (values: FormValues) => {
    if (step === 1) {
      setStep1Data({
        location: values.location,
        bedrooms: values.bedrooms,
        type: values.type
      });
      setStep(2);
      setProgress(50);
    }
  };

  const handleSubmit = async (values: FormValues, { resetForm }: { resetForm: () => void }) => {
    if (step === 2) {
      try {
        const combinedData = {
          ...step1Data,
          name: values.name,
          email: values.email,
          phone: values.phone,
          formType: 'lessStress'
        };

        const response = await fetch('https://keyone-backend-5c4c7d5eeddb.herokuapp.com/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(combinedData),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        console.log('Form submitted successfully');
        setProgress(100);
        
        // Reset everything
        resetForm();
        setStep1Data({});
        setStep(1);
        setProgress(0);
        
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  const isFirstStepFilled = (values: FormValues) => {
    return values.location && values.bedrooms && values.type;
  };

  return (
    <div className="relative z-2 flex flex-col items-center w-full max-w-[600px] bg-white p-6 rounded-lg shadow-lg mt-8">
      <p className='mb-4'>Fill in the Form below to <span className='font-semibold'>get a free valuation</span> right away!</p>
      <div className="w-full max-w-[200px] h-2 bg-gray-300 rounded-full mb-4">
        <div className={`h-2 rounded-full ${progress === 100 ? 'bg-green-600' : 'bg-green-600'}`} style={{ width: `${progress}%` }} />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => (
          <Form className="w-full flex flex-col gap-4">
            {step === 1 && (
              <>
                <MyInput name="location" placeholder="Area" errors={errors} touched={touched} />
                <MyDropdown name="bedrooms" options={bedroomOptions} placeholder="Number of Bedrooms" errors={errors} touched={touched} />
                <MyDropdown name="type" options={propertyTypes} placeholder="Property Type" errors={errors} touched={touched} />
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={() => handleNext(values)}
                    disabled={!isFirstStepFilled(values)}
                    className={`bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition-all ${!isFirstStepFilled(values) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <MyInput name="name" placeholder="Name" errors={errors} touched={touched} />
                <MyInput name="email" placeholder="Email" errors={errors} touched={touched} />
                <MyInput name="phone" placeholder="Phone Number" errors={errors} touched={touched} />
                <div className="flex justify-end mt-4">
                  <button type="submit" className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition-all">
                    Submit
                  </button>
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
