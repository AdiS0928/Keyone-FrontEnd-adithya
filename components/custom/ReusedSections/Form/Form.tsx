"use client";

import { Formik, Form } from "formik";
import MyInput from "../../MyComponents/MyInput";
import MyDropdown from "../../MyComponents/MyDropdown";
import MyButton from "../../MyComponents/MyButton";
import { propertyTypes, bedroomOptions, initialValues, validationSchema } from "./data";

export default function PropertyForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          console.log('entered')
          const response = await fetch('https://keyone-backend-5c4c7d5eeddb.herokuapp.com/api/leads', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          if (!response.ok) {
            throw new Error('Failed to submit form');
          }

          // Reset form on success
          resetForm();
          console.log('Form submitted successfully');
        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="w-full">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <MyInput name="name" placeholder="Name" errors={errors} touched={touched} />
            <MyInput name="email" placeholder="Email" errors={errors} touched={touched} />
            <MyInput name="phone" placeholder="Phone Number" errors={errors} touched={touched} />
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <MyInput name="location" placeholder="Location" errors={errors} touched={touched} />
            <MyDropdown
              name="type"
              options={propertyTypes}
              placeholder="Type"
              errors={errors}
              touched={touched}
            />
            <MyDropdown
              name="bedrooms"
              options={bedroomOptions}
              placeholder="Number of Bedrooms"
              errors={errors}
              touched={touched}
            />
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-4">
            <MyInput
              name="message"
              placeholder="Message"
              isTextarea={true}
              errors={errors}
              touched={touched}
            />
            <MyButton 
              type="submit" 
              disabled={isSubmitting}
              onClick={() => console.log('Button clicked', errors)}
            >
              {isSubmitting ? 'Submitting...' : 'Request Evaluation'}
            </MyButton>
          </div>
          {Object.keys(errors).length > 0 && (
            <div className="text-red-500 mt-2">
              {JSON.stringify(errors, null, 2)}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
