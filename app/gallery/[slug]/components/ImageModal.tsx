"use client";

import React, { useEffect } from "react";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

export type GalleryPhoto = {
    id: number;
    url: string;
    title: string;
};

export type ImageModalProps = {
    images: GalleryPhoto[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
};

const ImageModal: React.FC<ImageModalProps> = ({
    images,
    currentIndex,
    isOpen,
    onClose,
    onNavigate,
}) => {
    const currentImage = images[currentIndex];

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isOpen) return;

            if (event.key === "Escape") onClose();
            if (event.key === "ArrowLeft") {
                onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
            }
            if (event.key === "ArrowRight") {
                onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, images.length, isOpen, onClose, onNavigate]);

    useEffect(() => {
        if (!isOpen) return;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen]);

    if (!isOpen) return null;
    if (!currentImage) return null;

    const goPrev = () =>
        onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    const goNext = () =>
        onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            role="dialog"
            aria-modal="true"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close"
            >
                <IoClose className="w-6 h-6 text-white" />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                }}
                className="absolute left-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous image"
            >
                <IoChevronBack className="w-8 h-8 text-white" />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                }}
                className="absolute right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next image"
            >
                <IoChevronForward className="w-8 h-8 text-white" />
            </button>

            <div className="relative max-w-[92vw] max-h-[92vh] w-full px-4 md:px-10">
                <div className="relative w-full h-[72vh] md:h-[80vh]">
                    <img
                        src={currentImage.url}
                        alt={currentImage.title || "Gallery image"}
                        className="w-full h-full object-contain"
                    />
                </div>

                {(currentImage.title || images.length > 1) && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                        {currentImage.title && (
                            <h3 className="text-lg font-semibold">{currentImage.title}</h3>
                        )}
                        <p className="text-sm text-gray-300 mt-1">
                            {currentIndex + 1} / {images.length}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageModal;
