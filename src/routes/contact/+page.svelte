<script lang="ts">
  import Card from "$lib/components/ui/card/Card.svelte";
  import CardContent from "$lib/components/ui/card/CardContent.svelte";
  import CardDescription from "$lib/components/ui/card/CardDescription.svelte";
  import CardTitle from "$lib/components/ui/card/CardTitle.svelte";
</script>

<svelte:head>
    <title>Contact - David Fonseca</title>
</svelte:head>

<div class="flex flex-col items-center justify-center text-center px-4 py-16 md:py-32 h-full w-full gap-20 md:gap-32 md:px-6 md:max-w-15/16">
    <section class="flex flex-col items-center justify-center gap-5">
        <div class="p-1 px-3 border rounded-full text-xs bg-card">Reach Out</div>    
        <h1 class="text-4xl md:text-6xl font-medium">Get in touch with me</h1>
        <p class="text-md max-w-xl text-primary/70 md:text-lg">
            Contact me for inquiries of all kinds.
        </p>
    </section>
    <section class="flex flex-col md:flex-row w-full items-center gap-3">
        <Card variant="secondary" className="bg-primary/5 p-2 w-full md:w-1/2">
            <Card variant="secondary" className="p-6 rounded-2xl border border-primary/20">
                <CardContent className="flex flex-col gap-5 text-primary items-start">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                    </div>
                    <div class="pb-2">
                        <CardTitle className="text-xl font-medium">Message Me</CardTitle>
                    </div>
                    <div class="border-b w-full"></div>
                    <div>
                        <CardDescription>
                            <a href="mailto:support@davidfonseca.io" class="text-sm font-medium hover:text-blue-500"
                            title="Send me an email">support@davidfonseca.io</a>
                        </CardDescription>
                    </div>
                </CardContent>
            </Card>
        </Card>

        <Card variant="secondary" className="bg-primary/5 p-2 w-full md:w-1/2">
            <Card variant="secondary" className="p-6 rounded-2xl border border-primary/20">
                <CardContent className="flex flex-col gap-5 text-primary items-start">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </div>
                    <div class="pb-2">
                        <CardTitle className="text-xl font-medium">Connect with me on GitHub</CardTitle>
                    </div>
                    <div class="border-b w-full"></div>
                    <div>
                        <CardDescription>
                            <a href="https://github.com/DavidFonsecaG" class="text-sm font-medium hover:text-blue-500"
                            title="Visit my GitHub profile">DavidFonsecaG</a>
                        </CardDescription>
                    </div>
                </CardContent>
            </Card>
        </Card>
    </section>
</div>
