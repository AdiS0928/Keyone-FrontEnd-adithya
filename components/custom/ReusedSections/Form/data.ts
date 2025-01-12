// data.ts
export const propertyTypes = [
  { value: "residential", label: "Residential" },
  { value: "hotel", label: "Hotel" },
];

export const bedroomOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];

// Initial values for the form
export const initialValues = {
  name: "",
  email: "",
  phone: "",
  location: "",
  type: "",
  bedrooms: "",
  message: "",
};

// Validation schema for the form
import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be a valid phone number")
    .required("Phone number is required"),
  location: Yup.string().required("Location is required"),
  type: Yup.string().required("Type is required"),
  bedrooms: Yup.string().required("Number of bedrooms is required"),
  message: Yup.string(),
});
