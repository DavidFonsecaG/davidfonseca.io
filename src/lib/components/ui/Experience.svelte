<script lang="ts">
  import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
  } from "$lib/components/ui/card";
  import { cn } from "$lib/utils/utils";

  export let imgSrc: string;
  export let year: string;
  export let company: string;
  export let role: string;
  export let achivement: string;
  export let type: "education" | "organization" | "work" | "default";
  export let prev = false;
  export let next = false;

  let color: string;
  let label: string | undefined = undefined;

  switch (type) {
    case "education":
      color = "bg-indigo-500";
      if (!prev) label = "EDUCATION";
      break;
    case "organization":
      color = "bg-yellow-500";
      if (!prev) label = "ORGANIZATIONS";
      break;
    case "work":
      color = "bg-pink-500";
      if (!prev) label = "WORK";
      break;
  }
</script>

<Card
  variant={"secondary"}
  className={"p-0 w-full md:h-[164px] lg:max-w-[800px]"}
>
  <CardContent className={"h-full gap-3"}>
    <div class="flex flex-col w-full py-6 md:py-8 gap-2 md:gap-5 md:flex-row">
      <div class="flex md:p-2 md:items-center md:justify-center">
        <img class="max-w-18" src={imgSrc} alt="logo" />
      </div>
      <div class="flex flex-col text-start items-start">
        <CardTitle className={"text-sm lg:text-md"}>{year}</CardTitle>
        <CardTitle className={"text-lg md:text-xl lg:text-2xl"}
          >{company}</CardTitle
        >
        <CardDescription>
          <p class="text-base md:text-lg">{role}</p>
          <p class="text-sm text-primary/70">{achivement}</p>
        </CardDescription>
      </div>
    </div>
    <div class="flex flex-col h-full w-5 items-center justify-center relative">
      {#if prev}
        <div class={cn(color, "absolute top-0 h-1/2 w-1.5")}></div>
      {/if}
      <div class={cn(color, "absolute inset-x-0 h-5 w-5 rounded-sm")}></div>
      {#if next}
        <div class={cn(color, "absolute bottom-0 h-1/2 w-1.5")}></div>
      {/if}
      {#if !prev}
        <p
          class={cn(
            color,
            "hidden absolute bg-clip-text text-transparent lg:inline right-7 text-sm font-semibold"
          )}
        >
          {label}
        </p>
      {/if}
    </div>
  </CardContent>
</Card>
