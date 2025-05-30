<script lang="ts">
    import FooterLegal from "./ui/FooterLegal.svelte";
</script>

<div class="w-full">
    <footer class="w-full p-2">
        <div class="flex w-full bg-primary rounded-2xl md:rounded-3xl items-center justify-center ">
            <div class="flex flex-col w-full p-8 md:6 md:pt-12 bg-primary rounded-3xl space-between font-normal gap-10 md:max-w-15/16">
                <div class="flex flex-col text-card gap-10 md:flex-row md:justify-between">
                    <div class="flex flex-col w-full gap-5">
                        <div>
                            <a class="flex text-card gap-3 items-center" href="/">
                                <svg class="w-4 h-4" viewBox="0 0 446 405" xmlns="https://www.w3.org/2000/svg" fill="currentColor">
                                    <path d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 0,385.574034 0,362.009885 C0,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"/>
                                </svg>                                  
                                <h4 class="text-lg tracking-tight leading-none font-bold">David Fonseca</h4>
                            </a>
                        </div>
                        <p class="text-sm">Full-stack developer passionate about building fast, beautiful websites and applications.</p>
                    </div>
                    <div class="flex flex-col w-full gap-3 text-sm">
                        <p class="text-muted-foreground">Links</p>
                        <div class="flex flex-col gap-2">
                            <div><a  class="hover:text-blue-500" href="/">Home</a></div>
                            <div><a  class="hover:text-blue-500" href="/projects">Projects</a></div>
                            <div><a  class="hover:text-blue-500" href="/contact">Contact Me</a></div>
                        </div>
                    </div>
                </div>

                <FooterLegal showCopyrights={true}/>
            </div>
        </div>
    </footer>
</div>
