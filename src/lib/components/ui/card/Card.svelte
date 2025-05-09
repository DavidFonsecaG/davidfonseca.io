<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import { cn } from "$lib/utils/utils";
  const cardVariants = cva(
    "flex flex-col rounded-3xl",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground",
          secondary: "bg-white text-secondary-foreground",
          pastel: "bg-secondary/80 text-secondary-foreground",
          outline: "border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        },
        size: {
          default: "p-10",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  type CardVariants = VariantProps<typeof cardVariants>;

  export let variant: CardVariants["variant"] = "default";
  export let size: CardVariants["size"] = "default";
  export let className: string = "";
  export let styleName: string = "";
</script>

<svelte:element
  this={variant ? "slot" : "div"}
  data-slot="card"
  class={cn(cardVariants({ variant, size }), className)}
  style={styleName}
>
  <slot />
</svelte:element>