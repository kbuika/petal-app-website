"use client";

export default function PasswordResetRedirectPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_#eef4ff,_#f8fafc_45%,_#ffffff)] px-4 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(155,188,255,0.35),transparent_42%),radial-gradient(circle_at_80%_10%,rgba(214,180,255,0.28),transparent_40%)]" />

      <section
        aria-labelledby="reset-redirect-heading"
        className="shadow-3xl relative w-full max-w-lg rounded-3xl border border-white/70 bg-white/85 p-6 backdrop-blur md:p-8"
      >
        <p className="text-muted-foreground text-sm font-medium">Password reset complete</p>
        <h1 id="reset-redirect-heading" className="text-foreground mt-2 text-3xl font-semibold tracking-tight">
          Your password has been updated
        </h1>
        <p className="text-muted-foreground mt-3 text-base leading-relaxed">
          Open Petal to continue securely in your account.
        </p>
      </section>
    </main>
  );
}
