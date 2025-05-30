<script lang="ts">
  export let scrolled: boolean;
</script>

<div class="flex w-auto">
  <a class="flex h-full w-full items-center" href="/">
    <div
      class="flex rounded-md bg-primary text-xs text-background font-semibold in-w-9 size-9 items-center justify-center"
    >
      <svg
        class="w-4 h-4"
        viewBox="0 0 446 405"
        xmlns="https://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          d="M246.312928,5.62892705 C252.927596,9.40873724 258.409564,14.8907053 262.189374,21.5053731 L444.667042,340.84129 C456.358134,361.300701 449.250007,387.363834 428.790595,399.054926 C422.34376,402.738832 415.04715,404.676552 407.622001,404.676552 L42.6666667,404.676552 C19.1025173,404.676552 0,385.574034 0,362.009885 C0,354.584736 1.93772021,347.288125 5.62162594,340.84129 L188.099293,21.5053731 C199.790385,1.04596203 225.853517,-6.06216498 246.312928,5.62892705 Z"
        />
      </svg>
    </div>
    <span class={`transition-all duration-500 overflow-hidden ${!scrolled 
    ? "w-fit opacity-100 ml-2"
    : "w-0 opacity-0"
    }`}>
      <p
        class={`font-medium leading-none tracking-tight transition-all duration-500 ${!scrolled
        ? "text-xl md:text-2xl"
        : "text-[0px]"
        }`}
      >
        David Fonseca
      </p>
    </span>
  </a>
</div>
