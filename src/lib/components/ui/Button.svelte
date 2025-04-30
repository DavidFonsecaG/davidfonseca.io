<script lang="ts">
    import { cva, type VariantProps } from "class-variance-authority";
    import { cn } from "$lib/utils/utils";
  
    const buttonVariants = cva(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            secondary: "bg-current/20 hover:bg-current/10",
            ghost: "hover:text-blue-500 dark:hover:bg-accent/50",
            link: "underline-offset-4 hover:underline",
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            xs: "h-6 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-11 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
          },
        },
        defaultVariants: {
          variant: "default",
          size: "default",
        },
      }
    );
  
    type ButtonVariants = VariantProps<typeof buttonVariants>;
  
    export let variant: ButtonVariants["variant"] = "default";
    export let size: ButtonVariants["size"] = "default";
    export let asChild: boolean = false;
    export let className: string = "";
    export let disabled: boolean = false;
    export let type: "button" | "submit" | "reset" = "button";
</script>
  
<svelte:element
    this={asChild ? "slot" : "button"}
    class={cn(buttonVariants({ variant, size }), className)}
    type={asChild ? undefined : type}
    disabled={disabled}
    data-slot="button"
>
    <slot />
</svelte:element>
  