<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Filter from '$lib/components/Filter.svelte';
	import MovieList from '$lib/components/MovieList.svelte';
	import type { IMovie, IMovieResponse } from '../types';

	export let data: IMovieResponse;
	let filtered: IMovie[] = data.popularMovies;

	function onFilterChange(event: CustomEvent<{ genre: string; year: string; search: string }>) {
		const { genre, year, search } = event.detail;

		filtered = data.popularMovies.filter((m) => {
			const matchGenre = !genre || m.genre_ids.includes(Number(genre));
			const matchYear = !year || (m.release_date && m.release_date.startsWith(year));
			const matchSearch = !search || m.title.toLowerCase().includes(search.toLowerCase());
			return matchGenre && matchYear && matchSearch;
		});
	}
</script>

<div class="px-4 py-8">
	<Header />
	<div class="mt-8 flex w-full justify-center">
		<div class="w-[85%]">
			<Filter genres={data.genres} on:change={onFilterChange} />
		</div>
	</div>
	<div class="mt-13">
		<MovieList title="Popular" list={filtered} />
	</div>
	<div class="mt-13">
		<MovieList title="Recommended" list={data.topRatedMovies} />
	</div>
</div>
