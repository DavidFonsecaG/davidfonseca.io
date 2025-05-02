<script lang="ts">
	import { onMount } from 'svelte';
  
	import NavDesktopLinks from './ui/navigation/NavDesktopLinks.svelte';
	// import NavMobileBurger from './_navigation/NavMobileBurger.svelte';
	// import NavMobileLinks from './_navigation/NavMobileLinks.svelte';
	import NavTitle from './ui/navigation/NavTitle.svelte';
  
	let body: HTMLElement | undefined = undefined;
  
	let big = true;
	let open = false;
	let scrolled = false;
  
	function update() {
	  const scrollTop = window.scrollY || document.documentElement.scrollTop;
	  big = scrollTop < 32;
	  scrolled = scrollTop > 50;
	}
  
	$: {
	  if (body) {
		if (open) {
		  document.body.style.overflow = 'hidden';
		  update();
		} else {
		  document.body.style.overflow = 'auto';
		}
	  }
	}
  
	onMount(() => {
	  body = document.body;
	  window.addEventListener('scroll', update);
	  window.addEventListener('resize', () => (open = false));
	  update();
  
	  return () => {
		window.removeEventListener('scroll', update);
	  };
	});
  
	const close = () => (open = false);
  </script>
  
  <nav
	class="flex p-6 w-full max-w-15/16 items-center justify-center sticky top-0 transition-all duration-300"
	class:big
	class:open
  >
	<div
	  class="flex items-center justify-between"
	  class:nav-glass={!scrolled}
	  class:nav-glass-scrolled={scrolled}
	>
	  	<NavTitle {big} {open} on:click={close} />
		<NavDesktopLinks {big} {scrolled}/>
	</div>
  
	<!-- 
	<NavMobileBurger
	  {big}
	  {open}
	  on:click={() => {
		open = !open;
	  }}
	/> 
	-->
  </nav>
  
  <!-- 
  <div class="overlay" class:open>
	<NavMobileLinks {big} on:click={close} />
  </div> 
  -->
  