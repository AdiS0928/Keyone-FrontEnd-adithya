"use client";

import { Field } from "formik";

interface MyInputProps {
  name: string;
  placeholder: string;
  isTextarea?: boolean;
  errors: Record<string, string | undefined>;
  touched: Record<string, boolean | undefined>;
}

export default function MyInput({
  name,
  placeholder,
  isTextarea = false,
  errors,
  touched,
}: MyInputProps) {
  const inputClass =
    "flex-1 px-4 py-2 h-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black w-full";

  return (
    <div className="flex-1">
      {isTextarea ? (
        <Field
          as="textarea"
          name={name}
          placeholder={placeholder}
          className={`${inputClass} resize-none`}
          rows={1}
        />
      ) : (
        <Field name={name} placeholder={placeholder} className={inputClass} />
      )}
      <div className="h-2">
        {errors[name] && touched[name] && (
          <div className="text-red-500 text-xs text-left">{errors[name]}</div>
        )}
      </div>
    </div>
  );
}
