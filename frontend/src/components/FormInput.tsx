import React from 'react';
import type { InputHTMLAttributes } from 'react';

/**
 * Props for the FormInput component.
 */
interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  /** The unique ID for the input */
  id: string;
  
  /** The label text to display */
  label: string;
  
  /** Optional error message to display */
  error?: string;
  
  /** Optional help text to display below the input */
  helpText?: string;
  
  /** Whether the field is required */
  required?: boolean;
}

/**
 * An accessible form input component.
 * 
 * This component provides a standardized, accessible input field with label,
 * error messaging, and help text.
 *
 * @param {FormInputProps} props - The component props
 * @returns {React.ReactElement} The FormInput component
 */
const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  error,
  helpText,
  required = false,
  className = '',
  ...inputProps
}) => {
  // Generate unique IDs for associated elements
  const helpTextId = `${id}-help`;
  const errorId = `${id}-error`;
  
  // Determine if the input is in an error state
  const hasError = !!error;
  
  // Build the aria-describedby value based on which descriptive elements exist
  const getAriaDescribedBy = () => {
    const descriptors = [];
    if (helpText) descriptors.push(helpTextId);
    if (hasError) descriptors.push(errorId);
    return descriptors.length > 0 ? descriptors.join(' ') : undefined;
  };

  return (
    <div className="mb-4">
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      
      <input
        id={id}
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-orange-500 
          ${hasError 
            ? 'border-red-500 focus:border-red-500' 
            : 'border-gray-300 focus:border-orange-500'
          }
          ${className}
        `}
        aria-invalid={hasError}
        aria-required={required}
        aria-describedby={getAriaDescribedBy()}
        {...inputProps}
      />
      
      {helpText && !hasError && (
        <p 
          id={helpTextId} 
          className="mt-1 text-sm text-gray-500"
        >
          {helpText}
        </p>
      )}
      
      {hasError && (
        <p 
          id={errorId} 
          className="mt-1 text-sm text-red-600" 
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput; 