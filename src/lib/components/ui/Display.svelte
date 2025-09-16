<script lang="ts">
  import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
  } from "$lib/components/ui/card";

  export let title = "";
  export let description = "";
  export let imgSrc = "";
  export let badgeText = "";
  export let cardVariant: "secondary" | "default" | "outline";
  export let buttonText = "";
  export let buttonLink = "";
  export let target = "";
</script>

<Card variant={cardVariant} className={"p-8 md:p-10"}>
  <CardContent className="flex flex-col md:flex-row gap-9 md:gap-4">
    <div
      class="hidden md:flex items-center justify-center p-4 w-2/8 min-w-30"
    >
      <div class="rounded-full bg-current/20 size-30 min-w-30"></div>
      <img
        src={imgSrc}
        alt={imgSrc}
        class="absolute rounded-full size-20"
      />
    </div>
    <div class="flex flex-col items-start text-start w-full md:w-6/8 gap-3">
      <div
        class="flex p-1 px-3 rounded-full text-xs bg-linear-to-r from-indigo-300/30 to-gray-400/20"
      >
        <p>{badgeText}</p>
      </div>
      <CardTitle className={"text-2xl md:text-3xl lg:text-4xl"}
        >{title}</CardTitle
      >
      <CardDescription>{description}</CardDescription>
      <a href={buttonLink} target={target}>
        <div class="inline-flex pr-1 h-11 rounded-md px-6 bg-current/20 hover:bg-current/10 items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer">
          {buttonText}
          <span
            class="inline-flex items-center justify-center size-9 bg-secondary-foreground rounded-md"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-4 h-4"
              ><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
            >
          </span>
        </div>
      </a>
    </div>
  </CardContent>
</Card>
