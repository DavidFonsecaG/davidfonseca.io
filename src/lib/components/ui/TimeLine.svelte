<script lang="ts">
    import { cva, type VariantProps } from "class-variance-authority";
    import { cn } from "$lib/utils/utils";
    const timeLineVariants = cva(
        "",
        {
        variants: {
            variant: {
            default: "bg-primary",
            education: "bg-indigo-500",
            organization: "bg-yellow-500",
            work: "bg-red-500",
            },
        },
        defaultVariants: {
            variant: "default",
        },
        }
    );
    type TimeLineVariants = VariantProps<typeof timeLineVariants>;
    export let variant: TimeLineVariants["variant"] = "default";
</script>

<div class="flex flex-col h-full items-center justify-center">
    <div class={cn(timeLineVariants({ variant }), "h-[74px] w-2")}></div>
    <div class={cn(timeLineVariants({ variant }), "h-4 w-4 rounded-sm")}></div>
    <div class={cn(timeLineVariants({ variant }), "h-[74px] w-2 ")}></div>
</div>