<script lang="ts">
	import type { IMovie } from '../../types';
	import { IMAGE_URL_PATH } from '../../constants';
	import CarouselContainer from '$lib/components/ui/carousel/CarouselContainer.svelte';
	import CarouselItem from '$lib/components/ui/carousel/CarouselItem.svelte';
	import StarRating from '$lib/components/ui/rating/StarRating.svelte';
	import arrowRight from '$lib/images/arrowRight.svg';

	export let title: string;
	export let list: IMovie[];

	function handleMovieClick(movie: IMovie) {
		console.log('Movie clicked:', movie.title);
	}
</script>

<div class="py-2.5">
	<div class="flex justify-between">
		<h3 class="text-xl font-semibold">{title}</h3>
		<div class="cursor-pointer">
			<img src={arrowRight} alt="ArrowRight" />
		</div>
	</div>
	{#if list && list.length === 0}
		<div class="flex flex-col items-center justify-center px-4 py-16">
			<div class="text-center">
				<h3 class="mb-4 text-xl font-semibold">No Results Found</h3>
				<p class=" font-normal text-primary-100">
					Try adjusting your search criteria or filters to find more movies.
				</p>
			</div>
		</div>
	{/if}
	<div class="mt-7.5">
		<CarouselContainer items={list} itemWidth={150} itemHeight={275}>
			{#snippet children(listItem: IMovie)}
				<div class="flex flex-col justify-center">
					<CarouselItem
						title={listItem.title}
						imageUrl={`${IMAGE_URL_PATH}${listItem.poster_path}`}
						imageAlt={listItem.title}
						aspectRatio="2/3"
						onclick={() => handleMovieClick(listItem)}
					/>
					<div class="flex w-full justify-center">
						<StarRating rating={listItem.vote_average} />
					</div>
				</div>
			{/snippet}
		</CarouselContainer>
	</div>
</div>
