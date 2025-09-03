<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	interface CarouselItemProps {
		title: string;
		imageUrl: string;
		imageAlt: string;
		aspectRatio: string;
		onclick: () => void;
	}

	let {
		title = '',
		imageUrl = '',
		imageAlt = '',
		aspectRatio = '2/3',
		onclick = () => {}
	}: CarouselItemProps = $props();
</script>

<div
	class="group cursor-pointer"
	{onclick}
	tabindex="0"
	role="button"
	aria-label="Play carousel item"
	onkeydown={(event) => {
		if (event.key === 'Enter') onclick();
	}}
>
	<div
		class="bg-card hover:shadow-primary/20 w-full overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
	>
		<div class="relative overflow-hidden" style="aspect-ratio: {aspectRatio};">
			<img
				src={imageUrl}
				alt={imageAlt || title}
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
			/>
			<div
				class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			>
				<Button size="sm" class="bg-primary hover:bg-primary/90 cursor-pointer">Details</Button>
			</div>
		</div>

		<div class="pt-2 text-center">
			<h3
				class="text-card-foreground mb-2 line-clamp-2 w-full text-sm font-semibold text-balance overflow-ellipsis whitespace-nowrap"
				{title}
			>
				{title}
			</h3>
		</div>
	</div>
</div>

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
