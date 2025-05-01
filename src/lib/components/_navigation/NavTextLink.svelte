<script lang="ts">
    import { afterNavigate } from '$app/navigation';
  
    export let to: string;
    export let title: string;
    export let scrolled: boolean;
  
    let active = false;
  
    afterNavigate(() => {
      active = window.location.pathname.startsWith(to);
    });
  </script>
  
  <li 
    class="text-center px-2 hover:text-blue-500"
    class:nav-link={!scrolled}
  >
    <a class:active href={to} on:click>{title}</a>
  </li>