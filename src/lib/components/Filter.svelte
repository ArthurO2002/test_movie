<script lang="ts">
	import searchIcon from '$lib/images/search.svg';
	import filterIcon from '$lib/images/filter.svg';
	import type { IGenre } from '../../types';
	import { createEventDispatcher } from 'svelte';

	let isFilterOpen = $state(false);
	let selectedGenre = $state('');
	let selectedYear = $state('');
	let searchQuery = $state('');
	let filterContainer: HTMLDivElement | null = $state(null);
	const dispatch = createEventDispatcher();

	let { genres }: { genres: IGenre[] } = $props();

	const currentYear = new Date().getFullYear();
	const startYear = 1900;
	const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => currentYear - i);

	function toggleFilter() {
		isFilterOpen = !isFilterOpen;
	}

	function clearFilters() {
		selectedGenre = '';
		selectedYear = '';
		searchQuery = '';
		dispatchFilters();
	}

	function applyFilters() {
		dispatchFilters();
		isFilterOpen = false;
	}

	function dispatchFilters() {
		dispatch('change', {
			genre: selectedGenre,
			year: selectedYear,
			search: searchQuery
		});
	}

	function handleOutsideClick(event: PointerEvent) {
		if (filterContainer && !filterContainer?.contains(event.target as Node)) {
			isFilterOpen = false;
		}
	}

	$effect(() => {
		if (isFilterOpen) {
			document.addEventListener('click', handleOutsideClick);
		} else {
			document.removeEventListener('click', handleOutsideClick);
		}

		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	});
</script>

<div>
	<div class="relative" bind:this={filterContainer}>
		<div class="flex items-center rounded-[10px] bg-background-input p-3">
			<img class="h-6 w-6" src={searchIcon} alt="Search Icon" />
			<input
				type="text"
				placeholder="Search"
				bind:value={searchQuery}
				oninput={dispatchFilters}
				class="mr-4 w-full bg-transparent pl-2 text-lg placeholder-gray-500 focus:outline-none"
			/>
			<div class="flex items-center justify-center">
				<button class="h-6 w-6 cursor-pointer" aria-label="Filter options" onclick={toggleFilter}>
					<img class="h-full w-full" src={filterIcon} alt="FilterIcon" />
				</button>
			</div>
		</div>
		{#if isFilterOpen}
			<div class="absolute top-full right-0 left-0 z-10 mt-2 rounded-lg bg-gray-800 p-4 shadow-lg">
				<div class="space-y-4">
					<!-- Genre -->
					<div>
						<label for="genre" class="mb-2 block text-sm font-medium">Genre</label>
						<select
							id="genre"
							bind:value={selectedGenre}
							class="w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						>
							<option value="">All Genres</option>
							{#each genres as genre (genre.id)}
								<option value={genre.id}>{genre.name}</option>
							{/each}
						</select>
					</div>

					<!-- Year -->
					<div>
						<label for="year" class="mb-2 block text-sm font-medium">Year</label>
						<select
							id="year"
							bind:value={selectedYear}
							class="w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						>
							<option value="">All Years</option>
							{#each years as year (year)}
								<option value={year}>{year}</option>
							{/each}
						</select>
					</div>

					<!-- Buttons -->
					<div class="flex gap-2 pt-2">
						<button
							class="rounded-md border border-gray-300 px-3 py-1 text-sm transition-colors hover:bg-gray-50"
							onclick={clearFilters}
						>
							Clear Filters
						</button>
						<button
							class="rounded-md bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-700"
							onclick={applyFilters}
						>
							Apply Filters
						</button>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
