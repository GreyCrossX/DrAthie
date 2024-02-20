import React from 'react'

interface Props {
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => any;
    id?: string;
    className?: string;
    target?: string;
    url: string;
}

export default function Button ({children, onClick, url, target, className, ...rest}: Props) {
    return (
        <a
        href={url}
        target={`${target ?? 'blank'}`}
        rel="noopner norefferer"
        onClick={onClick}
        className={
            `
            w-fit
            lg:text-2xl
            font-medium
            no-underline
            px-5
            py-3
            border
            border-solid
            border-white
            rounded-full
            uppercase
            ${className ?? ''}
            `
        }
        {...rest}
        >
            {children}
        </a>
    )
}