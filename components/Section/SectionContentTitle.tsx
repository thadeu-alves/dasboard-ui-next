export function SectionContentTitle({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex justify-between items-center">
            {children}
        </div>
    );
}
