<script lang="ts">
	import type { ICast, IMovieDetails } from '../../../types';
	import { IMAGE_URL_PATH, POSTER_URL_PATH } from '../../../constants';
	import backIcon from '$lib/images/back.svg';
	import shareIcon from '$lib/images/share.svg';
	import playIcon from '$lib/images/play.svg';
	import heart from '$lib/images/heart.svg';
	import { Button } from '$lib/components/ui/button';
	import Chip from '$lib/components/ui/chip/Chip.svelte';
	import starFull from '$lib/images/starFull.svg';
	import CarouselContainer from '$lib/components/ui/carousel/CarouselContainer.svelte';
	import CarouselItem from '$lib/components/ui/carousel/CarouselItem.svelte';

	export let data: IMovieDetails;
	let isExpanded = false;
</script>

<div>
	<div class="relative h-[482px] w-full">
		<div class="absolute top-0 flex w-full items-center justify-between px-6 pt-6">
			<Button class="cursor-pointer p-0" onclick={() => history.back()}>
				<img src={backIcon} alt="back" />
			</Button>
			<Button class="cursor-pointer p-0">
				<img src={shareIcon} alt="share" />
			</Button>
		</div>
		<div class="absolute top-0 right-0 bottom-0 left-0 m-auto h-10 w-10 cursor-pointer">
			<img src={playIcon} alt="Play" />
		</div>
		<div
			class="absolute right-0 bottom-0 left-0 h-16 w-full bg-gradient-to-t from-background-default to-transparent"
		></div>
		<div class="absolute right-0 bottom-8 left-0 flex w-full justify-end pr-3 font-semibold">
			{Math.floor(data.runtime / 60)}h {data.runtime % 60}min
		</div>
		<img
			class="h-full w-full object-cover object-top"
			src={`${POSTER_URL_PATH}/${data.backdrop_path}`}
			alt="Poster"
		/>
	</div>
	<div class="mt-12 flex items-center justify-between px-3">
		<div class="flex w-[80%] flex-wrap gap-3">
			<Chip>18+</Chip>
			{#each data.genres as genre (genre.id)}
				<Chip>{genre.name}</Chip>
			{/each}
			<Chip>
				<div class="flex gap-1">
					<img src={starFull} alt="Rating" />
					{(data.vote_average / 2).toFixed(1)}
				</div>
			</Chip>
		</div>
		<div>
			<img src={heart} alt="Like" />
		</div>
	</div>
	<h1 class="mt-5 px-3 text-2xl font-semibold">{data.title}</h1>
	<div class="px-2.5">
		<p class="mt-4 text-lg font-normal">
			{#if data.overview.length <= 150}
				{data.overview}
			{:else}
				{#if isExpanded}
					{data.overview}
				{:else}
					{data.overview.slice(0, 150)}...
				{/if}
				<button
					on:click={() => (isExpanded = !isExpanded)}
					class="ml-1 inline cursor-pointer text-base font-bold text-secondary-default"
				>
					{#if isExpanded}
						Show Less
					{:else}
						Show More
					{/if}
				</button>
			{/if}
		</p>
	</div>
	<h1 class="mt-3 px-3 text-2xl font-semibold">Actors</h1>
	<div class="mt-4 px-2.5">
		<CarouselContainer items={data.credits.cast} itemWidth={108} itemHeight={108}>
			{#snippet children(actor: ICast)}
				<div class="flex flex-col justify-center">
					<CarouselItem
						title=""
						imageUrl={`${IMAGE_URL_PATH}${actor.profile_path}`}
						imageAlt={actor.name}
						aspectRatio="1"
						onclick={() => console.log('Clicked on Actor')}
					/>
				</div>
			{/snippet}
		</CarouselContainer>
	</div>
	<div class="flex justify-center">
		<div class="mt-4 w-full px-3 pb-2 md:w-[500px]">
			<Button class="h-10 w-full cursor-pointer bg-rating-100 text-lg">Open IMDb</Button>
		</div>
	</div>
</div>
