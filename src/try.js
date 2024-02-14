let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogory}&apiKey=6cf050527fff4b4884fb0299e2149015&page=1&pageSize=${this.props.pagesize}`;
try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
} catch (error) {
    console.error("Error fetching data:", error);
}