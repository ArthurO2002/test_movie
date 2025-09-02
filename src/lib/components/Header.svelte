<script>
	import profilePicture from '$lib/images/profile/profilePicture.jpg';
	import menu from '$lib/images/menu.svg';
</script>

<div class="flex justify-between">
	<div class="flex items-center gap-3">
		<div class="w-10 h-10 rounded-full overflow-hidden">
			<img class=" w-full h-full" src={profilePicture} alt="Profile">
		</div>
		<div>
			<p class="text-primary-100 text-xs">Welcome back</p>
			<p class="">Aymen Missaoui</p>
		</div>
	</div>
	<div>
		<img src={menu} alt="MenuIcon">
	</div>
</div>