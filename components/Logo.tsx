import Image from "next/image";
import logo from "../assets/logo.png";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image src={logo} alt="Antoine Blanco" className="h-9 w-auto" preload />
    </div>
  );
}
