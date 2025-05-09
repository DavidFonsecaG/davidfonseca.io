<script lang="ts">
	import { onMount } from 'svelte';
  
	import NavDesktopLinks from './ui/navigation/NavDesktopLinks.svelte';
	import NavMobileBurger from './ui/navigation/NavMobileBurger.svelte';
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
	class="z-100 flex p-4 h-22 md:p-6 w-full md:max-w-15/16 items-center justify-center sticky top-0 transition-all duration-300"
	class:big
	class:open
  >
	<div
	  class="flex items-center justify-between"
	  class:nav-glass={!scrolled}
	  class:nav-glass-scrolled={scrolled}
	>
	  	<NavTitle on:click={close} />
		<NavDesktopLinks {scrolled}/>
		<NavMobileBurger
		  {open}
		  on:click={() => {
			open = !open;
		  }}
		/> 
	</div>
  </nav>
  
  <!-- 
  <div class="overlay" class:open>
	<NavMobileLinks {big} on:click={close} />
  </div> 
  -->
  