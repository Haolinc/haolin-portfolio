'use client'
import { useState } from 'react';

const FALLBACK_IMAGE = "/images/not_available.png";

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement>;

export default function ImageWithFallback({ src, onError, ...props }: ImageWithFallbackProps){
    const [imageSrc, setImageSrc] = useState(src);

    return (
        <img
            {...props}
            src={imageSrc}
            onError={(event) => {
                if (imageSrc !== FALLBACK_IMAGE)
                    setImageSrc(FALLBACK_IMAGE);
                onError?.(event);
            }}
        />
    );
}
