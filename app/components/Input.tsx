import React from "react";

export const Input = ({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: () => void;
  placeholder?: string;
}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium  text-white"
      >
        {label}
      </label>
      <input
        type="text"
        id="email"
        className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
