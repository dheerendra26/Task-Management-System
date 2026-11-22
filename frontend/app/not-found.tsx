
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
        <main className="fixed inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide bg-background px-5 py-4 text-foreground">
            <div className="flex min-h-full items-center justify-center">
                <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative z-10 w-full max-w-3xl">
                    <div className="mb-5 flex items-center justify-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                            <ListTodo size={18} />
                        </div>
                        <span className="text-lg font-semibold tracking-tight">
                            FlowBit
                        </span>
                    </div>

                    <div className="rounded-3xl border border-border bg-surface/90 p-5 text-center shadow-xl shadow-black/5 backdrop-blur-sm sm:p-8">
                        <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center">
                            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/10" />
                            <div className="absolute inset-2 rounded-full border border-dashed border-primary/30 animate-spin [animation-duration:12s]" />

                            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                                <ListTodo size={32} strokeWidth={1.5} />
                            </div>

                            <span className="absolute right-1 top-2 h-3 w-3 animate-bounce rounded-full bg-primary" />
                            <span className="absolute bottom-2 left-1 h-2.5 w-2.5 animate-pulse rounded-full bg-primary/60" />
                        </div>

                        <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-primary">
                            ERROR 404
                        </p>

                        <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
                            Looks like this page is missing.
                        </h1>

                        <p className="mx-auto mt-3 max-w-md text-sm leading-5 text-foreground-secondary">
                            We couldn't find the page you're looking for.
                            It may have been moved, deleted, or never existed.
                        </p>

                        <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3 rounded-xl border border-border bg-background p-2.5">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Circle size={16} className="animate-pulse" />
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
                            className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20"
                        >
                            Back to tasks
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    <section className="mt-6">
                        <div className="mb-3 flex items-center justify-center gap-2">
                            <Sparkles size={14} className="text-primary" />
                            <h2 className="text-sm font-semibold text-foreground-secondary">
                                A little productivity inspiration
                            </h2>
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2">
                            {taskFacts.map((fact, index) => {
                                const Icon = fact.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 rounded-xl border border-border bg-surface/80 p-3 transition-colors hover:border-primary/40"
                                    >
                                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <Icon size={15} />
                                        </div>

                                        <p className="text-xs leading-5 text-foreground-secondary">
                                            {fact.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    <p className="mt-5 text-center text-xs text-foreground-secondary">
                        FlowBit · Keep your work moving.
                    </p>
                </div>
            </div>
        </main>
    );
}
