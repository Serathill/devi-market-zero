import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('should render with label and input', () => {
    render(<FormInput id="test-input" label="Test Label" />);
    
    const label = screen.getByText('Test Label');
    const input = screen.getByLabelText('Test Label');
    
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'test-input');
  });
  
  it('should mark required fields with an asterisk', () => {
    render(<FormInput id="test-input" label="Test Label" required />);
    
    const asterisk = screen.getByText('*');
    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveAttribute('aria-hidden', 'true');
    
    // Input should have aria-required attribute
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('aria-required', 'true');
  });
  
  it('should display help text when provided', () => {
    const helpText = 'This is some help text';
    render(<FormInput id="test-input" label="Test Label" helpText={helpText} />);
    
    const helpTextElement = screen.getByText(helpText);
    expect(helpTextElement).toBeInTheDocument();
    
    // Input should reference the help text ID via aria-describedby
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('aria-describedby', 'test-input-help');
  });
  
  it('should display error message when provided', () => {
    const errorMessage = 'This field is required';
    render(<FormInput id="test-input" label="Test Label" error={errorMessage} />);
    
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveAttribute('role', 'alert');
    
    // Input should reference the error ID via aria-describedby
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('aria-describedby', 'test-input-error');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
  
  it('should handle both helpText and error with appropriate aria-describedby', () => {
    render(
      <FormInput 
        id="test-input" 
        label="Test Label" 
        helpText="This is help" 
        error="This is an error" 
      />
    );
    
    // Error message should be displayed, but not help text
    expect(screen.queryByText('This is help')).not.toBeInTheDocument();
    expect(screen.getByText('This is an error')).toBeInTheDocument();
    
    // Input should reference both IDs in aria-describedby
    const input = screen.getByLabelText('Test Label');
    expect(input).toHaveAttribute('aria-describedby', 'test-input-help test-input-error');
  });
  
  it('should pass input props to the input element', async () => {
    const onChangeMock = vi.fn();
    
    render(
      <FormInput 
        id="test-input" 
        label="Test Label" 
        placeholder="Enter text" 
        onChange={onChangeMock}
        type="email"
      />
    );
    
    const input = screen.getByLabelText('Test Label');
    
    // Check that props are passed correctly
    expect(input).toHaveAttribute('placeholder', 'Enter text');
    expect(input).toHaveAttribute('type', 'email');
    
    // Check that events work
    await userEvent.type(input, 'test@example.com');
    expect(onChangeMock).toHaveBeenCalled();
  });
}); 