<script lang="ts">
  import Hero from "../lib/components/Hero.svelte"
  import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
  } from "$lib/components/ui/card";
  import ProjectsSection from "$lib/components/ProjectsSection.svelte";
</script>

<div class="flex flex-col items-center justify-center text-center py-30 gap-20 max-w-15/16">

  <Hero 
    title={"Hey there, I'm David."} 
    subtitle={"I’m a software engineer passionate about building fast, beautiful applications and websites."}
  />

  <ProjectsSection />
  
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