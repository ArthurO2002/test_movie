<script>
	import searchIcon from '$lib/images/search.svg';
	import filterIcon from '$lib/images/filter.svg';
</script>

<div>
		<div class="flex items-center bg-background-input rounded-[10px] p-3">
			<img class="w-6 h-6" src={searchIcon} alt="Search Icon">
			<input
				type="text"
				placeholder="Search"
				class="w-full pl-2 mr-4 bg-transparent placeholder-gray-500 text-lg focus:outline-none"
			/>
			<div class="flex items-center justify-center">
				<button
					class="w-6 h-6 "
					aria-label="Filter options"
				>
					<img class="w-full h-full" src={filterIcon} alt="FilterIcon">
				</button>
			</div>
		</div>
</div>
