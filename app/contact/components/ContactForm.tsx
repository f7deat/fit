"use client";

import { useState } from "react";
import { Button, Form, Input, message, notification } from "antd";
import {
  CheckCircleFilled,
  SendOutlined,
  SyncOutlined,
} from "@ant-design/icons";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormSectionProps {
  imageUrl: string;
  imageAlt?: string;
}


export default function ContactFormSection({
  imageUrl,
  imageAlt = "Contact us",
}: ContactFormSectionProps) {
  const [form] = Form.useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
    
  const maxLength = 500;
  const inputCls =
  "!bg-transparent !border-0 !border-b !border-gray-300 hover:!border-[#b91c3b] focus-within:!border-[#b91c3b] !rounded-none !shadow-none !px-0 !py-3 !text-sm !text-gray-800 placeholder-gray-400";

  const messageValue = Form.useWatch("message", form) ?? "";

  const handleFinish = async (values: FormValues) => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", values);

      setIsSuccess(true);

      notification.success({
        title: "Thông báo đã được gửi thành công",
        description:
          "Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ liên lạc lại với bạn trong thời gian sớm nhất.",
        icon: <CheckCircleFilled style={{ color: "#52c41a" }} />,
        placement: "topRight",
        duration: 4,
      });

      setTimeout(() => {
        form.resetFields();
        setIsSuccess(false);
      }, 2000);
    } catch {
      notification.error({
        title: "Không thể gửi tin nhắn",
        description:
          "Đã xảy ra lỗi khi gửi tin nhắn của bạn. Vui lòng thử lại sau.",
        placement: "topRight",
        duration: 4,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinishFailed = () => {
    message.error({
      content: "Vui lòng sửa lỗi trước khi gửi",
      duration: 3,
    });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-shadow duration-300 group">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="flex-1 px-10 py-12 lg:px-14">
          <Form
            form={form}
            onFinish={handleFinish}
            requiredMark={false}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Trường name là bắt buộc",
                },
                {
                  min: 2,
                  message: "Trường tên phải có trên 2 kí tự",
                },
                {
                  whitespace: true,
                  message: "Tên không được để trống.",
                },
              ]}
            >
              <Input
                placeholder="Name"
                disabled={isSubmitting}
                className={inputCls}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Trường Email là bắt buộc",
                },
                {
                  type: "email",
                  message: "Vui lòng nhập địa chỉ email hợp lệ.",
                },
              ]}
            >
              <Input
                type="email"
                placeholder="Email"
                disabled={isSubmitting}
                className={inputCls}
              />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Trường Số điện thoại là bắt buộc",
                },
                {
                  pattern: /^[\d\s\-\+\(\)]+$/,
                  message: "Vui lòng nhập số điện thoại hợp lệ.",
                },
              ]}
            >
              <Input
                type="tel"
                placeholder="Phone"
                disabled={isSubmitting}
                className={inputCls}
              />
            </Form.Item>

            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Thông báo là bắt buộc",
                },
                {
                  min: 10,
                  message: "Tin nhắn phải có ít nhất 10 ký tự.",
                },
                {
                  max: maxLength,
                  message: `Thông báo phải ngắn hơn ${maxLength} kí tự`,
                },
              ]}
            >
              <Input.TextArea
                placeholder="Your message"
                rows={5}
                maxLength={maxLength}
                disabled={isSubmitting}
                className={`${inputCls} !resize-y`}
              />
            </Form.Item>

            <div className="-mt-3 mb-6 text-right text-xs text-gray-400">
              {messageValue.length}/{maxLength}
            </div>

            <div className="mt-8">
              <Button
                htmlType="submit"
                disabled={isSubmitting || isSuccess}
                icon={
                  isSubmitting ? (
                    <SyncOutlined spin />
                  ) : isSuccess ? (
                    <CheckCircleFilled />
                  ) : (
                    <SendOutlined />
                  )
                }
                className="!inline-flex !items-center !gap-2 !bg-[#b91c3b] hover:!bg-[#9a1530] active:!bg-[#7f1129] disabled:!opacity-60 disabled:!cursor-not-allowed !text-white !px-8 !py-3 !h-auto !rounded !border-0 !shadow-none transition-colors duration-300 !uppercase tracking-widest !text-sm"
              >
                {isSubmitting
                  ? "Sending..."
                  : isSuccess
                    ? "Sent!"
                    : "Send Now"}
              </Button>
            </div>
          </Form>
        </div>

        <div className="hidden lg:block relative w-[380px] xl:w-[420px] shrink-0 overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f3351]/20 via-transparent to-[#b91c3b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
