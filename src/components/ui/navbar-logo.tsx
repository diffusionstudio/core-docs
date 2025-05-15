import Image from "next/image";

export function NavbarLogo() {
  return (
    <span className="font-medium text-lg items-center flex gap-2.5 tracking-tight">
      <Image src="/icon.png" alt="Diffusion Studio" width={28} height={28} />
    </span>
  )
}
