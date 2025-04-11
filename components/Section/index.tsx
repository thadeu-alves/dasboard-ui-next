export function Section({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <section className={`p-8 space-y-8 ${className}`}>
            {children}
        </section>
    );
}
