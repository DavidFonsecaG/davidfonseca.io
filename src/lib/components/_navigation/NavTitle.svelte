<script lang="ts">
    export let big: boolean;
    export let open: boolean;
</script>
  
<div class="flex w-auto"
    class:big 
    class:open
>
    <a class="flex h-full w-full inline-flex items-center hover:muted" href="/" on:click>
        <div class="flex rounded-md bg-primary text-xs text-background font-semibold transition-colors min-w-9 size-9 items-center justify-center ">
            <img class="w-5 h-5" src="/logo.png" alt="David Fonseca Logo" />
        </div>
        <span class="text-xl font-medium tracking-tight ml-2 min-w-42 title">David Fonseca</span>
    </a>
</div>