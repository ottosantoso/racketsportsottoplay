import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Masuk — Peternak Kodin by SHN" },
      { name: "description", content: "Masuk ke akun Peternak Kodin untuk mengelola peternakan Anda." },
      { property: "og:title", content: "Masuk — Peternak Kodin by SHN" },
      { property: "og:description", content: "Masuk ke akun Peternak Kodin untuk mengelola peternakan Anda." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Login,
});

function Login() {
  const [show, setShow] = useState(false);
  return (
    <main className="login-bg flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border bg-card/90 p-8 shadow-soft backdrop-blur animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl text-primary-foreground">
            🐐
          </div>
          <h1 className="font-display text-3xl text-foreground">Selamat datang</h1>
          <p className="mt-1 text-sm text-muted-foreground">Masuk ke Peternak Kodin by SHN</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-foreground">Email</span>
            <input type="email" required placeholder="nama@email.com" className="w-full rounded-xl border bg-background px-4 py-3 text-foreground outline-none transition focus:ring-2 focus:ring-ring" />
          </label>
          <label className="block">
            <span className="mb-1 flex justify-between text-sm font-medium text-foreground">
              Kata sandi
              <a href="#" className="font-normal text-primary hover:underline">Lupa?</a>
            </span>
            <div className="relative">
              <input type={show ? "text" : "password"} required placeholder="••••••••" className="w-full rounded-xl border bg-background px-4 py-3 pr-16 text-foreground outline-none transition focus:ring-2 focus:ring-ring" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground hover:text-foreground">
                {show ? "Sembunyi" : "Lihat"}
              </button>
            </div>
          </label>
          <button type="submit" className="w-full rounded-xl bg-primary py-3 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-soft">
            Masuk
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Belum punya akun? <a href="#" className="font-medium text-primary hover:underline">Daftar</a>
        </p>
      </div>
    </main>
  );
}
