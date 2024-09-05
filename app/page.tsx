import Image from "next/image";
import { AppLayout } from "@/components/app-layout";
import { AppPage } from "@/components/app-page";

export default function Home() {
  return (
    <AppLayout>
      <AppPage />
    </AppLayout>  
  );
}
