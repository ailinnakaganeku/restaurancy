"use client";

export default function Footer() {
  return (
    <footer className="border border-gray-200 text-center leading-[3rem] opacity-70 md:border-transparent">
      © {new Date().getFullYear()} Restaurancy
    </footer>
  );
}
