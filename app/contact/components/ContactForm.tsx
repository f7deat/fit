"use client";
import { useState } from "react";
import { SHADOWS, TRANSITIONS } from "../constants/theme";
import { toast } from "sonner";
import { HiCheckCircle, HiOutlineRefresh } from "react-icons/hi";
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
  imageUrl: string;
  imageAlt?: string;
}

/**
 * ContactFormSection Component

 */
export default function ContactFormSection({
  imageUrl,
  imageAlt = "Contact us",
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  const MAX_MESSAGE_LENGTH = 500;

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email";
        return "";

      case "phone":
        if (!value.trim()) return "Phone is required";
        if (!/^[\d\s\-\+\(\)]+$/.test(value))
          return "Please enter a valid phone number";
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        if (value.length > MAX_MESSAGE_LENGTH)
          return `Message must be less than ${MAX_MESSAGE_LENGTH} characters`;
        return "";

      default:
        return "";
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
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", formData);

      setIsSuccess(true);
      toast.success("Message sent successfully!", {
        description: "We will get back to you as soon as possible.",
        icon: <HiCheckCircle className="w-5 h-5" />,
      });

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
        setTouchedFields(new Set());
        setIsSuccess(false);
      }, 2000);
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setTouchedFields((prev) => new Set(prev).add(name));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const getInputClasses = (fieldName: string) => {
    const baseClasses = `w-full px-5 py-3.5 border rounded-lg ${TRANSITIONS.default} bg-white text-gray-800 placeholder-gray-400 focus:outline-none`;

    if (errors[fieldName] && touchedFields.has(fieldName)) {
      return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20`;
    }

    if (
      touchedFields.has(fieldName) &&
      formData[fieldName as keyof FormData] &&
      !errors[fieldName]
    ) {
      return `${baseClasses} border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20`;
    }

    return `${baseClasses} border-gray-200 focus:border-[#b91c3b] focus:ring-2 focus:ring-[#b91c3b]/20`;
  };

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden ${SHADOWS.card} ${TRANSITIONS.default} hover:shadow-2xl`}
    >
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
                className={getInputClasses("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && touchedFields.has("name") && (
                <p
                  id="name-error"
                  className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                >
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
                className={getInputClasses("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && touchedFields.has("email") && (
                <p
                  id="email-error"
                  className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                >
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
                className={getInputClasses("phone")}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && touchedFields.has("phone") && (
                <p
                  id="phone-error"
                  className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                >
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
                  className={`${getInputClasses("message")} resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : "message-counter"
                  }
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  {formData.message.length}/{MAX_MESSAGE_LENGTH}
                </div>
              </div>
              {errors.message && touchedFields.has("message") && (
                <p
                  id="message-error"
                  className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                >
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
                hover:bg-[#a01830] ${TRANSITIONS.default}
                uppercase tracking-wide font-medium text-sm
                disabled:opacity-50 disabled:cursor-not-allowed
                ${SHADOWS.card} hover:shadow-xl
                flex items-center justify-center gap-2
                min-w-[140px]
              `}
            >
              {isSubmitting && (
                <HiOutlineRefresh className="w-4 h-4 animate-spin" />
              )}
              {isSuccess && <HiCheckCircle className="w-4 h-4" />}

              {isSubmitting ? "Sending..." : isSuccess ? "Sent!" : "Send Now"}
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
