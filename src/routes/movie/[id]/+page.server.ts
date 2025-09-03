export async function load({ params }) {
	// TODO: I'm hardcoding the API key here just to have minimal setup, but here we should use some env variable
	// Note: It's safe to hardcode the API key here because it's only used in this file and the file is not exposed to the client
	const BASE_URL = 'https://api.themoviedb.org/3';

	const { id } = params;

	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWMyY2VmMTRkZWI1Njg1NGE1ZTExZGE1MDIzMjQ4YiIsIm5iZiI6MTc1Njg0MTE2NS4zNTUsInN1YiI6IjY4Yjc0NGNkZDdhNDg5MTExMTE1OGQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SAszXMSVfYbacuZxCHY3Mwg5xOwelmCda3HTvrUHb3o'
			}
		};

		const detailsUrl = `${BASE_URL}/movie/${id}?language=en-US&append_to_response=credits`;
		const movieDetailsResponse = await fetch(detailsUrl, options);

		return await movieDetailsResponse.json();
	} catch (error) {
		console.error(error);
		return null;
	}
}
