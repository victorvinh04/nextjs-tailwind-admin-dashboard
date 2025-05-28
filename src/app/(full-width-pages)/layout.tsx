"use client";
export default function FullWidthPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen flex flex-1 flex-col pb-2">{children}</div>;
}
