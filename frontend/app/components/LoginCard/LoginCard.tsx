"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";

const GoogleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.805 10.023H12v4.013h5.637c-.59 2.04-2.913 3.89-5.637 3.89a5.926 5.926 0 1 1 0-11.852c1.47 0 2.81.527 3.855 1.4l2.988-2.987A9.937 9.937 0 0 0 12 2.073a9.927 9.927 0 1 0 0 19.854c8.18 0 9.673-7.615 9.673-9.673 0-.65.066-1.1.132-1.73Z"
      fill="currentColor"
    />
  </svg>
);

const PyramidMark = () => (
  <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-(--accent-color)">
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 3.5 4.5 17.8l7.5 2.7 7.5-2.7L12 3.5Z"
        stroke="var(--accent-foreground)"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M12 3.5v17M7.2 15.9 12 20.5l4.8-4.6"
        stroke="var(--accent-foreground)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default function LoginCard() {
  const router = useRouter();

  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      router.replace("/tasks");
    }
  }, [router]);

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  };

  const handleGuestLogin = async () => {
    setError("");
    setIsGuestLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/guest`,
        {
          method: "POST",
        },
      );

      if (!response.ok) {
        setError("Something went wrong. Please try again.");
        return;
      }

      const data = await response.json();

      localStorage.setItem("accessToken", data.accessToken);

      router.replace("/tasks");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsGuestLoading(false);
    }
  };

  return (
    <main className="grid h-dvh grid-cols-1 overflow-hidden bg-background text-foreground lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-surface lg:flex lg:flex-col lg:justify-between lg:p-12">
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-(--accent-color) opacity-20 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-(--accent-color) opacity-10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex items-center gap-2">
          <PyramidMark />

          <span className="text-[14px] font-semibold leading-none text-foreground">
            Pyramid
          </span>
        </div>

        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-foreground">
              Organize your work, beautifully.
            </h2>

            <p className="max-w-sm text-sm font-normal leading-5 text-foreground-secondary">
              Plan, track, and ship your tasks in one focused workspace.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <Image
              src="/Hero-Page.png"
              alt="Pyramid task board preview"
              width={3472}
              height={1802}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        <div className="relative" />
      </section>

      <section className="flex items-center justify-center px-4 py-10 sm:px-6">
        <div className="flex w-full max-w-95 flex-col items-center">
          <div className="flex h-9 items-center gap-2 lg:hidden">
            <PyramidMark />

            <span className="text-[14px] font-semibold leading-none text-foreground">
              Pyramid
            </span>
          </div>

          <div className="mt-10 flex w-full flex-col items-center lg:mt-0">
            <div className="flex w-full flex-col gap-1.5 text-center">
              <h1 className="text-2xl font-semibold leading-7 tracking-tight text-foreground">
                Let&apos;s get back on track
              </h1>

              <p className="text-sm font-normal leading-5 text-foreground-secondary">
                Enter your email below to login to your account.
              </p>
            </div>

            <div className="mt-8 flex w-full flex-col gap-3">
              <button
                type="button"
                className="flex h-10 w-full items-center justify-center gap-1.5 rounded-full bg-(--accent-color) px-3 py-2 text-sm font-medium leading-5 text-(--accent-foreground) transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-(--accent-color) focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60"
                onClick={handleGoogleLogin}
                disabled={isGuestLoading}
              >
                <span className="flex h-4 w-4 items-center justify-center">
                  <GoogleIcon />
                </span>

                <span>Continue with Google</span>
              </button>

              <div className="flex items-center gap-3 py-1">
                <div className="h-px flex-1 bg-border" aria-hidden="true" />

                <span className="text-xs font-normal text-foreground-secondary">
                  or
                </span>

                <div className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>

              <button
                type="button"
                className="flex h-10 w-full items-center justify-center rounded-full border border-border bg-surface px-3 py-2 text-sm font-medium leading-5 text-foreground transition-colors hover:bg-surface-secondary focus:outline-none focus:ring-2 focus:ring-(--accent-color) focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60"
                onClick={handleGuestLogin}
                disabled={isGuestLoading}
              >
                {isGuestLoading ? (
                  <span className="flex items-center gap-1.5">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Signing in…
                  </span>
                ) : (
                  "Continue as Guest"
                )}
              </button>

              {error && (
                <p className="text-center text-xs text-danger">{error}</p>
              )}
            </div>
          </div>

          <div className="mt-10 flex w-full justify-center px-4">
            <p className="max-w-52 text-center text-xs font-normal leading-4 text-foreground-secondary">
              By clicking continue, you agree to
              <br />
              our{" "}
              <a
                href="/terms"
                className="text-(--accent-color) underline transition-opacity hover:opacity-80"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-(--accent-color) underline transition-opacity hover:opacity-80"
              >
                Privacy
              </a>
              <br />
              <a
                href="/privacy"
                className="text-(--accent-color) underline transition-opacity hover:opacity-80"
              >
                Policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
