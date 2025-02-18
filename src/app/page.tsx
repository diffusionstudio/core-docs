import { Metadata } from "next";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Nextra 4",
  description: "Nextra 4 is here.",
};

export default function Home() {
  redirect('/docs');
}
