export async function load() {
	// TODO: I'm hardcoding the API key here just to have minimal setup, but here we should use some env variable
	// Note: It's safe to hardcode the API key here because it's only used in this file and the file is not exposed to the client
	const BASE_URL = 'https://api.themoviedb.org/3';

	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWMyY2VmMTRkZWI1Njg1NGE1ZTExZGE1MDIzMjQ4YiIsIm5iZiI6MTc1Njg0MTE2NS4zNTUsInN1YiI6IjY4Yjc0NGNkZDdhNDg5MTExMTE1OGQ0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SAszXMSVfYbacuZxCHY3Mwg5xOwelmCda3HTvrUHb3o'
			}
		};

		const popularUrl = `${BASE_URL}/movie/popular?language=en-US&page=1`;
		const topRatedUrl = `${BASE_URL}/movie/top_rated?language=en-US&page=1`;
		const genreUrl = `${BASE_URL}/genre/movie/list?language=en`;

		const [popularRes, topRatedRes, genreRes] = await Promise.all([
			fetch(popularUrl, options),
			fetch(topRatedUrl, options),
			fetch(genreUrl, options)
		]);

		const [popularData, topRatedData, genreData] = await Promise.all([
			popularRes.json(),
			topRatedRes.json(),
			genreRes.json()
		]);

		return {
			popularMovies: popularData.results,
			topRatedMovies: topRatedData.results,
			genres: genreData.genres
		};
	} catch (error) {
		console.error(error);
		return {
			popularMovies: [],
			topRatedMovies: [],
			genres: []
		};
	}
}
