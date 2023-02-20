fetch("articles.json")
	.then(data => data.json())
	.then(json => {
		for (const item of json) {
			const IndexPage = document.getElementById("articles");

			const Link = document.createElement("a");
			Link.href = item.link;

			const Wrapper = document.createElement("article");
			Wrapper.classList.add("article-item");

			const Title = document.createElement("h3");
			Title.classList.add("article-title");
			Title.innerText = item.title;

			const Desc = document.createElement("p");
			Desc.classList.add("article-desc");
			Desc.innerText = item.desc;

			Wrapper.append(Title, Desc);
			Link.append(Wrapper);
			IndexPage.append(Link);
		}
	});
