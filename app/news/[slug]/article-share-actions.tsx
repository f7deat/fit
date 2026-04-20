"use client";

import { useEffect, useState } from "react";
import { FaFacebook, FaVolumeUp } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

type ArticleShareActionsProps = {
    title: string;
    content: string;
    publicUrl: string;
};

const ArticleShareActions: React.FC<ArticleShareActionsProps> = ({
    title,
    content,
    publicUrl,
}) => {
    const [isReading, setIsReading] = useState(false);

    useEffect(() => {
        return () => {
            if ("speechSynthesis" in window) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const handleShareZalo = () => {
        const zaloUrl = `https://chat.zalo.me/share?url=${encodeURIComponent(publicUrl)}&title=${encodeURIComponent(title)}`;
        window.open(zaloUrl, "_blank", "width=600,height=600");
    };

    const handleShareFacebook = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(publicUrl)}`;
        window.open(facebookUrl, "_blank", "width=600,height=600");
    };

    const cleanText = (html: string) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    const normalizeText = (text: string) => {
        return text
            .replace(/\s+/g, " ")
            .replace(/\n+/g, ". ");
    };

    const handleTextToSpeech = () => {
        if (!("speechSynthesis" in window)) return;

        if (isReading) {
            window.speechSynthesis.cancel();
            setIsReading(false);
            return;
        }

        const rawText = cleanText(content);
        const finalText = normalizeText(rawText);
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = `${title}. ${finalText}`;
        utterance.lang = "vi-VN";
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        utterance.onend = () => setIsReading(false);
        utterance.onerror = () => setIsReading(false);

        window.speechSynthesis.speak(utterance);
        setIsReading(true);
    };

    return (
        <div className="flex flex-col gap-2 z-50 sticky top-32 self-start">
            <button
                type="button"
                onClick={handleShareZalo}
                className="w-9 h-9 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all hover:scale-105"
                title="Chia sẻ qua Zalo"
            >
                <SiZalo className="w-5 h-5 text-blue-600" />
            </button>

            <button
                type="button"
                onClick={handleShareFacebook}
                className="w-9 h-9 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all hover:scale-105"
                title="Chia sẻ qua Facebook"
            >
                <FaFacebook className="w-5 h-5 text-blue-600" />
            </button>

            <button
                type="button"
                onClick={handleTextToSpeech}
                className={`w-9 h-9 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-all hover:scale-105 ${isReading ? "bg-blue-50 border-blue-400" : ""
                    }`}
                title={isReading ? "Dừng đọc" : "Đọc tin tức"}
            >
                <FaVolumeUp
                    className={`w-5 h-5 ${isReading ? "text-blue-600 animate-pulse" : "text-gray-700"
                        }`}
                />
            </button>
        </div>
    );
};

export default ArticleShareActions;
