<script>
	let {
		items = [],
		itemWidth = 150,
		children,
		itemHeight = 275
	} = $props();

</script>

<div class="relative w-full">
	<div
		class="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
		style="scroll-snap-type: x mandatory;"
	>
		{#each items as item, index (item.id || index)}
			<div
				class="flex-shrink-0"
				style="scroll-snap-align: start; width: {itemWidth}px; height: {itemHeight}px"
			>
				{@render children(item, index)}
			</div>
		{/each}
	</div>
</div>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
