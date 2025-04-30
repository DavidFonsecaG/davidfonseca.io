<script>
  import Hero from "../lib/components/Hero.svelte"
  import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
  } from "$lib/components/ui/card";
  import Button from "$lib/components/ui/Button.svelte";
</script>

<div class="flex flex-col items-center justify-center text-center py-30 gap-20 max-w-15/16">

  <Hero 
    title={"Hey there, I'm David."} 
    subtitle={"I’m a software engineer passionate about building fast, beautiful applications and websites."}
  />
  
  <section id="projects" class="flex flex-col w-full p-6 text-card gap-5">
    <Card>
      <CardContent className={"gap-4"}>
        <div class="flex items-center justify-center p-4 w-2/8">
          <img class="max-h-35 brightness-50 relative filter  blur-lg contrast-100" src="email-ai.png" alt="email-ai"/>
          <svg class="max-h-30 absolute" data-testid="geist-icon" height="full" stroke-linejoin="round" viewBox="0 0 16 16" width="full" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.57757 0 0 3.61682 0 8.03093C0 12.411 3.54999 16 7.9384 16C9.42621 16 10.8841 15.5819 12.1457 14.7934L12.3975 14.636L11.6025 13.364L11.3507 13.5214C10.3275 14.1609 9.14508 14.5 7.9384 14.5C4.38672 14.5 1.5 11.5909 1.5 8.03093C1.5 4.43692 4.4143 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8V8.60714C14.5 9.3764 13.8764 10 13.1071 10C12.2195 10 11.5 9.28046 11.5 8.39286V8V4.5H10V5.12734C9.43308 4.73191 8.74362 4.5 8 4.5C6.067 4.5 4.5 6.067 4.5 8C4.5 9.933 6.067 11.5 8 11.5C9.05713 11.5 10.0048 11.0313 10.6466 10.2904C11.2148 11.0262 12.1056 11.5 13.1071 11.5C14.7048 11.5 16 10.2048 16 8.60714V8C16 3.58172 12.4183 0 8 0ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z" fill="currentColor"></path></svg>
        </div>
        <div class="flex flex-col items-start w-6/8 gap-3">
          <div class="flex p-1 px-3 rounded-full text-xs bg-gradient-to-r from-indigo-300/30 to-gray-400/20">
            Retrieval Augmented Generation
          </div>
          <CardTitle>AI Powered Email Assistant</CardTitle>
          <CardDescription>
            An AI-powered email assistant that connects to Outlook 
            to summarize emails, show past context, and suggest replies.
          </CardDescription>
          <Button variant={"secondary"} size={"lg"} className={"pr-1"}>
            Learn more
            <span class="inline-flex items-center justify-center size-9 bg-secondary-foreground rounded-md">
              <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z" fill="currentColor"></path></svg>
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
    
    <Card variant={"secondary"}>
      <CardContent className={"gap-4"}>
        <div class="flex items-center justify-center p-4 w-2/8 ">
          <img class="max-h-40" src="https://zenodo.org/record/7742997/files/Tops_Badge_Nasa.png" alt="NASA TOPS"/>
        </div>
        <div class="flex flex-col items-start w-6/8 gap-3">
          <div class="flex p-1 px-3 rounded-full text-xs bg-gradient-to-r from-indigo-300/20 via-purple-300/20 to-gray-400/20">
            Raster - Tiff
          </div>
          <CardTitle>Mapping wildfires using AVIIRIS</CardTitle>
          <CardDescription className={"text-primary/70"}>
            An AI-powered email assistant that connects to Outlook 
            to summarize emails, show past context, and suggest replies.
          </CardDescription>
          <Button variant={"secondary"} size={"lg"} className={"pr-1"}>
            Learn more
            <span class="inline-flex items-center justify-center size-9 bg-primary rounded-md">
              <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z" fill="white"></path></svg>
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>

    <div class="flex flex-wrap justify-center m-2">
        <a href="/projects" class="inline-flex items-center justify-center gap-2 bg-transparent hover:text-primary text-muted-foreground text-lg">
          See all projects
          <svg data-testid="geist-icon" height="16" stroke-linejoin="round" viewBox="0 0 16 16" width="16" style="color: currentcolor;"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z" fill="currentColor"></path></svg>
        </a>
    </div>
  </section>
  
  <section id="about" class="flex flex-col w-full p-6 text-card gap-5">
    <Card variant={"secondary"} className={"px-16 pt-18"}>
      <CardContent className={"gap-4"}>
        <div class="flex flex-col items-start gap-3">
          <CardTitle>A bit about me.</CardTitle>
          <CardDescription className={"text-primary/70 text-md lg:text-md leading-relaxed"}>
            Hey, I'm David, a software engineer and recently graduated from National Louis University, where I did my undergraduate studies in computer science. I have a huge passion for quality software, beautiful user interfaces, and automation. I've been coding for over 4 years, working on projects ranging anywhere from desktop and mobile applications to websites and web APIs, many of which you'll find here on my site.
          </CardDescription>

          <div class="flex flex-col w-full items-center justify-center mt-8 gap-3">
            <Card variant={"secondary"}>
              <CardContent className={"gap-4"}>
                <div class="flex items-center justify-center p-2 w-1/8">
                  <img class="max-h-50" src="NLU.png" alt="NLU logo">
                </div>
                <div class="flex flex-col items-start w-6/8">
                  <CardTitle className={"text-sm lg:text-md"}>2022 - 2025</CardTitle>
                  <CardTitle className={"text-xl lg:text-2xl"}>National Louis University</CardTitle>
                  <CardDescription>
                    <p>Bachelor of Science, Computer Science</p>
                    <p class="text-sm text-primary/70">Member of the National Society of leadership and success</p>
                  </CardDescription>
                </div>
                <div class="flex items-center justify-center gap-3">
                  <p class="text-sm font-semibold text-indigo-500">EDUCATION</p>
                  <div class=" h-4 w-4 rounded-sm bg-indigo-500"></div>
                </div>
              </CardContent>
            </Card>

            <Card variant={"secondary"}>
              <CardContent className={"gap-4"}>
                <div class="flex items-center justify-center p-2 w-1/8">
                  <img class="max-h-50" src="NSLS.png" alt="NLU logo">
                </div>
                <div class="flex flex-col items-start w-6/8">
                  <CardTitle className={"text-sm lg:text-md"}>2022 - 2025</CardTitle>
                  <CardTitle className={"text-xl lg:text-2xl"}>National Louis University</CardTitle>
                  <CardDescription>
                    <p>Bachelor of Science, Computer Science</p>
                    <p class="text-sm text-primary/70">Member of the National Society of leadership and success</p>
                  </CardDescription>
                </div>
                <div class="flex items-center justify-center gap-3">
                  <p class="text-sm font-semibold text-indigo-500">EDUCATION</p>
                  <div class=" h-4 w-4 rounded-sm bg-indigo-500"></div>
                </div>
              </CardContent>
            </Card>

            <Card variant={"secondary"}>
              <CardContent className={"gap-4"}>
                <div class="flex items-center justify-center p-2 w-1/8">
                  <img class="max-h-50" src="MCC.jpg" alt="NLU logo">
                </div>
                <div class="flex flex-col items-start w-6/8">
                  <CardTitle className={"text-sm lg:text-md"}>2022 - 2025</CardTitle>
                  <CardTitle className={"text-xl lg:text-2xl"}>National Louis University</CardTitle>
                  <CardDescription>
                    <p>Bachelor of Science, Computer Science</p>
                    <p class="text-sm text-primary/70">Member of the National Society of leadership and success</p>
                  </CardDescription>
                </div>
                <div class="flex items-center justify-center gap-3">
                  <p class="text-sm font-semibold text-indigo-500">EDUCATION</p>
                  <div class=" h-4 w-4 rounded-sm bg-indigo-500"></div>
                </div>
              </CardContent>
            </Card>

            <Card variant={"secondary"}>
              <CardContent className={"gap-4"}>
                <div class="flex items-center justify-center p-2 w-1/8">
                  <img class="max-h-50" src="CU.png" alt="NLU logo">
                </div>
                <div class="flex flex-col items-start w-6/8">
                  <CardTitle className={"text-sm lg:text-md"}>2022 - 2025</CardTitle>
                  <CardTitle className={"text-xl lg:text-2xl"}>National Louis University</CardTitle>
                  <CardDescription>
                    <p>Bachelor of Science, Computer Science</p>
                    <p class="text-sm text-primary/70">Member of the National Society of leadership and success</p>
                  </CardDescription>
                </div>
                <div class="flex items-center justify-center gap-3">
                  <p class="text-sm font-semibold text-indigo-500">EDUCATION</p>
                  <div class=" h-4 w-4 rounded-sm bg-indigo-500"></div>
                </div>
              </CardContent>
            </Card>

            <Card variant={"secondary"}>
              <CardContent className={"gap-4"}>
                <div class="flex items-center justify-center p-2 w-1/8">
                  <img class="max-h-50" src="NASA_TOPS.png" alt="NLU logo">
                </div>
                <div class="flex flex-col items-start w-6/8">
                  <CardTitle className={"text-sm lg:text-md"}>2022 - 2025</CardTitle>
                  <CardTitle className={"text-xl lg:text-2xl"}>National Louis University</CardTitle>
                  <CardDescription>
                    <p>Bachelor of Science, Computer Science</p>
                    <p class="text-sm text-primary/70">Member of the National Society of leadership and success</p>
                  </CardDescription>
                </div>
                <div class="flex items-center justify-center gap-3">
                  <p class="text-sm font-semibold text-indigo-500">EDUCATION</p>
                  <div class=" h-4 w-4 rounded-sm bg-indigo-500"></div>
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </CardContent>
    </Card>
  </section>

</div>