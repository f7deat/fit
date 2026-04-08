"use client"

import { useState } from 'react';
import { HiCheckCircle, HiOutlineRefresh } from "react-icons/hi";
import { notification, message } from 'antd';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface ContactFormSectionProps {
  /**
   * Image URL to display alongside the form
   */
  imageUrl: string;
  /**
   * Alt text for the image
   */
  imageAlt?: string;
}

export default function ContactFormSection({ 
  imageUrl, 
  imageAlt = 'Contact us' 
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const MAX_MESSAGE_LENGTH = 500;

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return '';
      
      case 'phone':
        if (!value.trim()) return 'Phone is required';
        if (!/^[\d\s\-\+\(\)]+$/.test(value)) return 'Please enter a valid phone number';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.length > MAX_MESSAGE_LENGTH) return `Message must be less than ${MAX_MESSAGE_LENGTH} characters`;
        return '';
      
      default:
        return '';
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      message.error({
        content: 'Vui lòng sửa lỗi trước khi gửi',
        duration: 3,
        icon: <span className="text-red-500">⚠️</span>,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      
      setIsSuccess(true);
      
      // Success notification with Ant Design
      notification.success({
        message: 'Thông báo đã được gửi thành công',
        description: 'Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ liên lạc lại với bạn trong thời gian sớm nhất.',
        icon: <HiCheckCircle style={{ color: '#52c41a' }} />,
        placement: 'topRight',
        duration: 4,
        style: {
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      });

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setErrors({});
        setTouchedFields(new Set());
        setIsSuccess(false);
      }, 2000);
      
    } catch (error) {
      notification.error({
        message: 'Không thể gửi tin nhắn',
        description: 'Đã xảy ra lỗi khi gửi tin nhắn của bạn. Vui lòng thử lại sau.',
        placement: 'topRight',
        duration: 4,
        style: {
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation for touched fields
    if (touchedFields.has(name)) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setTouchedFields((prev) => new Set(prev).add(name));
    
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const getInputClasses = (fieldName: string) => {
    const baseClasses = `w-full px-5 py-3.5 border rounded-lg transition-all duration-300 ease-in-out bg-white text-gray-800 placeholder-gray-400 focus:outline-none`;
    
    if (errors[fieldName] && touchedFields.has(fieldName)) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20`;
    }
    
    if (touchedFields.has(fieldName) && formData[fieldName as keyof FormData] && !errors[fieldName]) {
      return `${baseClasses} border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20`;
    }
    
    return `${baseClasses} border-gray-200 focus:border-[#b91c3b] focus:ring-2 focus:ring-[#b91c3b]/20`;
  };

  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:shadow-2xl`}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Form Section */}
        <div className="p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={getInputClasses('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && touchedFields.has('name') && (
                <p id="name-error" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={getInputClasses('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && touchedFields.has('email') && (
                <p id="email-error" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                className={getInputClasses('phone')}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && touchedFields.has('phone') && (
                <p id="phone-error" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Message Field with Character Counter */}
            <div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  rows={6}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className={`${getInputClasses('message')} resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : 'message-counter'}
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {formData.message.length}/{MAX_MESSAGE_LENGTH}
                </div>
              </div>
              {errors.message && touchedFields.has('message') && (
                <p id="message-error" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 bg-red-500 rounded-full" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`
                bg-[#b91c3b] text-white px-10 py-3.5 rounded-lg
                hover:bg-[#a01830] transition-all duration-300 ease-in-out
                uppercase tracking-wide font-medium text-sm
                disabled:opacity-50 disabled:cursor-not-allowed
               shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-xl
                flex items-center justify-center gap-2
                min-w-[140px]
              `}
            >
              {isSubmitting && <HiOutlineRefresh className="w-4 h-4 animate-spin" />}
              {isSuccess && <HiOutlineRefresh className="w-4 h-4" />}
              {isSubmitting ? 'Sending...' : isSuccess ? 'Sent!' : 'Send Now'}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="relative h-[400px] lg:h-auto">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Subtle gradient overlay on mobile for better readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent lg:hidden" />
        </div>
      </div>
    </div>
  );
}