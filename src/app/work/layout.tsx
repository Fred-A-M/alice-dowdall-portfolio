import NavBar from '@/app/components/NavBar';

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}