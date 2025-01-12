"use client";

import { Field } from "formik";

interface Option {
  value: string;
  label: string;
}

interface MyDropdownProps {
  name: string;
  options: Option[];
  placeholder: string;
  errors: Record<string, string | undefined>;
  touched: Record<string, boolean | undefined>;
}

export default function MyDropdown({
  name,
  options,
  placeholder,
  errors,
  touched,
}: MyDropdownProps) {
  const dropdownClass =
    "px-4 py-2 h-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black w-full";

  return (
    <div className="flex-1"> 
      <Field as="select" name={name} className={dropdownClass}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <div className="h-2">
        {errors[name] && touched[name] && (
          <div className="text-red-500 text-xs text-left">{errors[name]}</div>
        )}
      </div>
    </div>
  );
}
