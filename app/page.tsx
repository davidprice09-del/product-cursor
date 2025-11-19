import { redirect } from "next/navigation";

export default function Home() {
  redirect("/products");
}

export const dynamic = "force-dynamic";

