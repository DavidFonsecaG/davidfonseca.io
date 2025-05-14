<script lang="ts">
	import { onMount } from 'svelte';
  
	import NavDesktopLinks from './ui/navigation/NavDesktopLinks.svelte';
	import NavTitle from './ui/navigation/NavTitle.svelte';
    import NavMobileButtons from './ui/navigation/NavMobileButtons.svelte';
	import Card from './ui/card/Card.svelte';
  	import NavTextLinks from './ui/navigation/NavTextLinks.svelte';
  import FooterLegal from './ui/FooterLegal.svelte';
  
	let body: HTMLElement | undefined = undefined;
  
	let open = false;
	let scrolled = false;
  
	function update() {
	  const scrollTop = window.scrollY || document.documentElement.scrollTop;
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
	  update();
  
	  return () => {
		window.removeEventListener('scroll', update);
	  };
	});

	let close = () => {open = false};
</script>

<nav
class="flex p-4 h-22 w-full md:p-6 md:max-w-15/16 items-center justify-center sticky top-0 z-100 transition-all duration-300"
>
	<div
		class="flex w-full items-center justify-between"
		class:nav-glass={!scrolled}
		class:nav-glass-scrolled={scrolled}
	>
		<NavTitle />
		<NavMobileButtons bind:open {scrolled} />
		<NavDesktopLinks {scrolled} />
	</div>
</nav>

{#if open}
	<div 
		class="fixed w-full top-0 bg-background/90 backdrop-blur-sm z-90" 
		class:h-full={open}
		role="dialog"
		aria-modal="true"
		aria-label="Mobile navigation menu" 
		aria-hidden={!open}
		on:click={close}
		>
			<div class="relative top-22 p-4">
				<Card variant="default" className="items-start rounded-xl gap-10">
					<NavTextLinks scrolled={false} className={"flex-col gap-4 text-lg"}/>				
					<div class="w-full px-2">
						<FooterLegal />
					</div>
				</Card>
			</div>
	</div>
{/if}
 
