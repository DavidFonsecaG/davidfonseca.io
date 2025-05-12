<script lang="ts">
    import { projects } from "$lib/data/siteContent";
    const projectSections = Object.entries(projects);

    import {
        Card,
        CardTitle,
        CardDescription,
        CardContent,
    } from "$lib/components/ui/card";
</script>

<svelte:head>
    <title>Projects - David Fonseca</title>
</svelte:head>

<div class="flex flex-col items-center justify-center text-center px-4 pt-5 pb-10 md:px-6 md:pb-30 w-full md:max-w-15/16 gap-20 ">

    <Card variant="default" className={"flex md:flex-row px-8 w-full gap-5 md:px-16 md:py-18"}> 
        <CardContent className="flex flex-col md:w-3/5 justify-start text-start gap-5">
            <CardTitle className={"text-4xl md:text-5xl"}><h2>My Projects</h2></CardTitle>
            <CardDescription className="text-md"><p>Here you can find the projects I've created or am working on</p></CardDescription>
        </CardContent>
        <div class="h-62 md:w-2/5 bg-[url(/snap.png)] bg-cover bg-left rounded-xl"></div>
    </Card>

    <Card variant="secondary" className={"px-8 gap-20 md:px-16 md:py-18"}>
        {#each projectSections as [sectionName, sectionProjects]}
        <CardContent className="flex flex-col gap-5">
            <div class="flex flex-col w-full text-start gap-4">
                <CardTitle className="text-2xl md:text-3xl">
                <h2>{sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}</h2>
                </CardTitle>
                <CardDescription className="text-md">
                <p>Desktop, mobile, and web applications I've created or am working on</p>
                </CardDescription>
            </div>

            <div class="grid md:grid-cols-2 gap-7 text-card">
                {#each sectionProjects as project (project.buttonLink)}
                <a href={`/projects/${project.buttonLink}`}>
                    <Card variant={project.cardVariant} className="p-6 md:p-8 items-center justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101 hover:shadow-lg">
                    <CardContent className="flex flex-col">
                        <div class="flex flex-col items-start text-start w-full gap-3">
                        <CardTitle className="font-medium text-lg md:text-xl">{project.title}</CardTitle>
                        <CardDescription className="font-light text-sm lg:text-sm">{project.description}</CardDescription>
                        </div>
                    </CardContent>
                    </Card>
                </a>
                {/each}
            </div>
        </CardContent>
        {/each}

        <div class="flex flex-wrap justify-center m-2">
            <a href="https://github.com/DavidFonsecaG" class="inline-flex items-center justify-center gap-2 bg-transparent hover:text-blue-500 text-muted-foreground text-lg" target="_blank">
                <svg class="w-5 h-5" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"/>
                </svg>  
                Check out my projects on Github
            </a>
        </div>
    </Card>
</div>