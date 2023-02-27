const API = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33283a5c7amsh7860f15ec94d5a7p1a8ad8jsn167f6a1e9f50',
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
	const response = await fetch(urlApi, options);
	const news = await response.json();
	console.log(news);
	return news;
}

(async() => {
	try {
		const covids = await fetchData(API);
		let view = `
		${covids.news.map(covid => `
			<div class="group relative">
				<div
				class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<p> ${covid.pubDate}</p>
					<p> ${covid.content}</p>
					<p> ${covid.reference}</p>
					</div>
					<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						<strong>${covid.title}</strong> 
						<a href=${covid.link} target="_blank"> Ver </a>
					</h3>
				</div>
            </div>
		`).slice(0,8).join('')}		
		`;
		content.innerHTML = view;
	} catch(error) {
		console.log(error);
	}
})();