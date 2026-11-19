import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-6 py-32 text-center">
      <p className="text-gradient text-7xl font-extrabold">404</p>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist or has moved.</p>
      <Button href="/" size="lg" className="mt-8">Back to home</Button>
    </section>
  );
}
