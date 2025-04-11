export function SectionContent({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    );
}
