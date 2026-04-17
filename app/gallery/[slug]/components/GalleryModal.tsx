"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import  ImageModal, {type GalleryPhoto } from "./ImageModal";

type GalleryModalProps = {
    images: GalleryPhoto[];
};

const GalleryModal: React.FC<GalleryModalProps> = ({ images }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const raw = searchParams.get("photo");
    const index = raw ? Number(raw) : NaN;
    const isOpen = Number.isFinite(index) && index >= 0 && index < images.length;

    const setPhoto = (nextIndex: number | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (nextIndex === null) params.delete("photo");
        else params.set("photo", String(nextIndex));

        const qs = params.toString();
        router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    };

    return (
        <ImageModal
            images={images}
            currentIndex={isOpen ? index : 0}
            isOpen={isOpen}
            onClose={() => setPhoto(null)}
            onNavigate={(i: number) => setPhoto(i)}
        />
    );
};

export default GalleryModal;
