import Header from "@/components/Header/page";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
