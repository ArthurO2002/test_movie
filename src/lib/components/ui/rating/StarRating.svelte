<script>
	import starFull from '$lib/images/starFull.svg';
	import starHalf from '$lib/images/starHalf.svg';
	import starEmpty from '$lib/images/starEmpty.svg';

	let { rating = 0 } = $props()

	// Convert 1-10 scale to 5-star scale
	const starRating = $derived(Math.min(Math.max(rating / 2, 0), 5))
	const fullStars = $derived(Math.floor(starRating))
	const hasHalfStar = $derived(starRating % 1 >= 0.5)
	const emptyStars = $derived(5 - fullStars - (hasHalfStar ? 1 : 0))
</script>

<div class="flex items-center gap-0.5">
	<!-- Full stars -->
	{#each Array(fullStars) as _}
		<img src={starFull} alt="fullStar">
	{/each}

	<!-- Half star -->
	{#if hasHalfStar}
		<img src={starHalf} alt="halfStar">
	{/if}

	<!-- Empty stars -->
	{#each Array(emptyStars) as _}
		<img src={starEmpty} alt="emptyStar">
	{/each}
</div>