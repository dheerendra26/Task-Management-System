
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Circle,
    Clock3,
    ListTodo,
    Sparkles,
} from "lucide-react";

const taskFacts = [
    {
        icon: ListTodo,
        text: "Breaking large tasks into smaller steps improves clarity.",
    },
    {
        icon: CheckCircle2,
        text: "Kanban boards visualize work across workflow stages.",
    },
    {
        icon: Sparkles,
        text: "Clear priorities help teams focus on important work.",
    },
    {
        icon: Clock3,
        text: "Due dates make expectations easier to manage.",
    },
];

export default function NotFound() {
    return (
        <main className="fixed inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide bg-background px-5 py-6 text-foreground">
            <div className="flex min-h-full items-center justify-center">
                <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative z-10 w-full max-w-3xl">
                    <div className="mb-10 flex items-center justify-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                            <ListTodo size={20} />
                        </div>
                        <span className="text-xl font-semibold tracking-tight">
                            FlowBit
                        </span>
                    </div>

                    <div className="rounded-3xl border border-border bg-surface/90 p-7 text-center shadow-xl shadow-black/5 backdrop-blur-sm sm:p-12">
                        <div className="relative mx-auto mb-8 flex h-32 w-32 items-center justify-center">
                            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10" />
                            <div className="absolute inset-3 rounded-full border border-dashed border-primary/30 animate-spin [animation-duration:12s]" />

                            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                <ListTodo size={38} strokeWidth={1.5} />
                            </div>

                            <span className="absolute right-1 top-3 h-3 w-3 animate-bounce rounded-full bg-primary" />
                            <span className="absolute bottom-3 left-1 h-2.5 w-2.5 animate-pulse rounded-full bg-primary/60" />
                        </div>

                        <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-primary">
                            ERROR 404
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                            Looks like this page is missing.
                        </h1>

                        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-foreground-secondary sm:text-base">
                            We couldn't find the page you're looking for.
                            It may have been moved, deleted, or never existed.
                        </p>

                        <div className="mx-auto mt-9 flex max-w-xs items-center justify-center gap-3 rounded-xl border border-border bg-background p-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Circle size={17} className="animate-pulse" />
                            </div>

                            <div className="flex-1 space-y-2 text-left">
                                <div className="h-2 w-24 animate-pulse rounded-full bg-foreground/15" />
                                <div className="h-2 w-36 animate-pulse rounded-full bg-foreground/10" />
                            </div>

                            <span className="text-xs text-foreground-secondary">
                                Not found
                            </span>
                        </div>

                        <Link
                            href="/tasks"
                            className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
                        >
                            Back to tasks
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <section className="mt-10">
                        <div className="mb-5 flex items-center justify-center gap-2">
                            <Sparkles size={15} className="text-primary" />
                            <h2 className="text-sm font-semibold text-foreground-secondary">
                                A little productivity inspiration
                            </h2>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {taskFacts.map((fact, index) => {
                                const Icon = fact.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 rounded-xl border border-border bg-surface/80 p-4 transition-colors hover:border-primary/40"
                                    >
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Icon size={16} />
                                        </div>

                                        <p className="text-sm leading-6 text-foreground-secondary">
                                            {fact.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <p className="mt-8 text-center text-xs text-foreground-secondary">
                        FlowBit · Keep your work moving.
                    </p>
                </div>
            </div>
        </main>
    );
}
