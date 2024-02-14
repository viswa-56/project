import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class Newscomp extends Component {
    // articles=[
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Yahoo Entertainment"
    //         },
    //         "author": "Kelly Coffey-Behrens",
    //         "title": "Jennifer Lopez Rips Out Hair Mid-'SNL' Performance [VIDEO] - Yahoo Entertainment",
    //         "description": "Jennifer Lopez suffered an on-air mishap as she ripped out her hair mid-‘Saturday Night Live’ performance. The singer appeared on ‘SNL’ to perform her new...",
    //         "url": "https://www.yahoo.com/entertainment/jennifer-lopez-rips-hair-mid-180005650.html",
    //         "urlToImage": "https://s.yimg.com/ny/api/res/1.2/9yyJth2ex61jImxg3YKr.g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD01NTU-/https://media.zenfs.com/en/theblast_73/9a54b66ded9684955ffda1973b86ff8d",
    //         "publishedAt": "2024-02-04T18:00:05Z",
    //         "content": "Jennifer Lopez suffered an on-air mishap as she ripped out her hair mid-'Saturday Night Live' performance.\r\nThe singer appeared on 'SNL' to perform her new song 'Cant Get Enough' with Latto and REDMA… [+2501 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": "",
    //         "title": "Purdue vs. Wisconsin live stream, watch online, TV channel, prediction, pick, spread, basketball game odds - CBS Sports",
    //         "description": "A big battle in the Big Ten between two conference powers awaits Sunday in Madison",
    //         "url": "https://www.cbssports.com/college-basketball/news/purdue-vs-wisconsin-live-stream-watch-online-tv-channel-prediction-pick-spread-basketball-game-odds/",
    //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/12/17/23032f9e-0435-445f-8719-aacc7b5d9a8f/thumbnail/1200x675/639ca4f9c639810f84f689ba84e86bbc/usatsi-22120755-1.jpg",
    //         "publishedAt": "2024-02-04T17:45:00Z",
    //         "content": "The Big Ten's biggest game so far this season is set for Sunday as No. 2 Purdue is on the road to face No. 6 Wisconsin, looking to extend its half-game lead over the Badgers. Both teams are coming of… [+2105 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "politico",
    //             "name": "Politico"
    //         },
    //         "author": null,
    //         "title": "New York jury verdict against Trump not valid, J.D. Vance says - POLITICO",
    //         "description": "The Ohio Republican referred to the jurors coming from \"extremely left-wing jurisdictions.\"",
    //         "url": "https://www.politico.com/news/2024/02/04/new-york-trump-jd-vance-00139504",
    //         "urlToImage": "https://static.politico.com/56/08/c508014b4d33975b5a02255f1c62/u-s-congress-05533.jpg",
    //         "publishedAt": "2024-02-04T17:44:48Z",
    //         "content": "George, if you look at all of these cases, the through line, two-fold. No. 1, theyre funded by Donald Trumps political opponents, and the goal here is not to help us actually have a real conversation… [+1473 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "cnn",
    //             "name": "CNN"
    //         },
    //         "author": "Tina Burnside, Nouran Salahieh",
    //         "title": "An intense atmospheric river moves into California, threatening to flood roads and trigger mudslides - CNN",
    //         "description": "An intense, long-lasting atmospheric river is moving into California, bringing the potential for “life-threatening” flooding, mud slides and widespread power outages as it dumps heavy rain and snow. Here’s the latest:",
    //         "url": "https://www.cnn.com/2024/02/04/us/california-atmospheric-river-flooding/index.html",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1976110646.jpg?c=16x9&q=w_800,c_fill",
    //         "publishedAt": "2024-02-04T17:35:00Z",
    //         "content": "An intense, long-lasting atmospheric river is moving into California Sunday, bringing the potential for life-threatening flooding, mudslides and widespread power outages as it dumps heavy rain and sn… [+5033 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": null,
    //         "title": "Chile forest fires: At least 64 dead in Valparaíso region - BBC.com",
    //         "description": "President Boric announced a state of emergency as forest fires scorched the Valparaíso region.",
    //         "url": "https://www.bbc.com/news/world-latin-america-68196048",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C052/production/_132543294_p0h8wyfx.jpg",
    //         "publishedAt": "2024-02-04T16:52:00Z",
    //         "content": "Watch: Deadly wildfire rips through Vina Del Mar, a coastal city\r\nAt least 64 people have been killed by forest fires in Chile's Valparaíso region, its president has said.\r\nGabriel Boric declared a s… [+2665 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": "",
    //         "title": "2024 Super Bowl odds, pick prediction: Patrick Mahomes, Chiefs get past 49ers for hard-fought repeat title - CBS Sports",
    //         "description": "Can San Francisco pull it off? Or is K.C. inevitable?",
    //         "url": "https://www.cbssports.com/nfl/news/2024-super-bowl-odds-pick-prediction-patrick-mahomes-chiefs-get-past-49ers-for-hard-fought-repeat-title/",
    //         "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/11/9693db2e-959d-4083-9159-7171ab331903/thumbnail/1200x675/938efe2208edad441a10ea4ae17b1e2d/mahomes-49ers-us.jpg",
    //         "publishedAt": "2024-02-04T16:45:00Z",
    //         "content": "It's showtime, baby. After 21 weeks of regular-season and postseason action, the 2023 NFL campaign will conclude with Super Bowl LVIII on Feb. 11, live from Las Vegas with the Kansas City Chiefs and … [+3990 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Florida Today"
    //         },
    //         "author": "Rick Neale",
    //         "title": "Will rain, wind scuttle NASA PACE spacecraft launch Tuesday morning? - Florida Today",
    //         "description": "NASA crews are targeting 1:33 a.m. EST Tuesday to launch the PACE observatory atop a SpaceX Falcon 9 rocket from Launch Complex 40.",
    //         "url": "https://www.floridatoday.com/story/tech/science/space/2024/02/03/will-rain-wind-scuttle-nasa-pace-spacecraft-launch-tuesday-morning-at-cape-canaveral-florida/72449585007/",
    //         "urlToImage": "https://www.floridatoday.com/gcdn/presto/2020/02/05/PBRE/3d4c2618-f6eb-4edf-84d2-36f38d352a12-PACE.jpg?crop=1019,574,x4,y0&width=1019&height=574&format=pjpg&auto=webp",
    //         "publishedAt": "2024-02-04T16:27:47Z",
    //         "content": "Will windy, rainy environmental conditions scrub NASA's PACE environmental-science spacecraft launch attempt early Tuesday morning from Cape Canaveral Space Force Station?\r\nKeep a keen eye on the wea… [+1702 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Www.cnn.co"
    //         },
    //         "author": "CNN",
    //         "title": "Where to watch 2024's solar eclipse - CNN",
    //         "description": "Enter your address to find out what you can expect to see in a city near you.",
    //         "url": "https://www.cnn.co/interactive/2024/02/world/solar-eclipse-2024-map-dg-scn/",
    //         "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240126131456-solar-eclipse-oregon-2017-file.jpg?c=original",
    //         "publishedAt": "2024-02-04T16:04:22Z",
    //         "content": "One of the years most anticipated celestial events a total solar eclipse will put on a dramatic show April 8 as it crosses over Mexico, the United States and Canada.\r\nA total solar eclipse occurs whe… [+1370 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "financial-times",
    //             "name": "Financial Times"
    //         },
    //         "author": "Stefania Palma, Andrew England, Najmeh Bozorgmehr, Felicia Schwartz",
    //         "title": "US says strikes against Iran-backed militias are 'beginning, not the end' - Financial Times",
    //         "description": "Jake Sullivan vows further action after Washington’s back-to-back waves of assaults on groups in Yemen, Iraq and Syria",
    //         "url": "https://www.ft.com/content/f0a8216d-3e5e-4cd6-835f-d325afa52f98",
    //         "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F7371b858-005b-4054-a5dd-482be3dc2b68.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
    //         "publishedAt": "2024-02-04T15:28:32Z",
    //         "content": "The US has warned it will keep targeting Iranian-aligned militants after it carried out two of its biggest waves of strikes since the Israel-Hamas war triggered hostilities across the Middle East. \r\n… [+5348 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "axios",
    //             "name": "Axios"
    //         },
    //         "author": "Axios",
    //         "title": "Jeffries swipes at House GOP's new Israel aid bill - Axios",
    //         "description": null,
    //         "url": "https://www.axios.com/2024/02/04/house-israel-aid-hakeem-jeffries",
    //         "urlToImage": null,
    //         "publishedAt": "2024-02-04T15:18:28Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "FARAI MUTSAKA Associated Press, SONJA SMITH Associated Press",
    //         "title": "Namibia president and anti-apartheid activist Hage Geingob dies. He pushed for Africa on world stage - ABC News",
    //         "description": "Namibia’s president and founding prime minister Hage Geingob has died at age 82 while receiving treatment for cancer",
    //         "url": "https://abcnews.go.com/International/wireStory/namibian-president-hage-geingob-dies-hospital-receiving-treatment-106929859",
    //         "urlToImage": "https://i.abcnewsfe.com/a/39c3b457-d4a1-42d2-9622-d9dfd9810ab6/wirestory_f01eb59f2ea02c9459ffa96b0c25e0e0_16x9.jpg?w=1600",
    //         "publishedAt": "2024-02-04T15:10:55Z",
    //         "content": "WINDHOEK, Namibia -- Namibia's president and founding prime minister Hage Geingob died Sunday at age 82 while receiving treatment for cancer, and the southern African nation quickly swore in his depu… [+4125 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "WPLG Local 10"
    //         },
    //         "author": "Brandon Orr, Andrea Torres",
    //         "title": "Line of storms, some with tornado potential, moves across Miami-Dade, Broward - WPLG Local 10",
    //         "description": "A line of heavy rain and isolated to scattered severe thunderstorms was moving through South Florida on Sunday morning.",
    //         "url": "https://www.local10.com/weather/2024/02/04/line-of-thunderstorms-with-tornado-potential-moves-through-monroe-heads-to-miami-dade-broward/",
    //         "urlToImage": "https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/HZRWYL6UTRD7BEYMQG7NOZMV6U.jpg?_a=ATAPphC0",
    //         "publishedAt": "2024-02-04T14:56:05Z",
    //         "content": "PEMBROKE PARK, Fla. A line of heavy rain and isolated to scattered severe thunderstorms was moving through South Florida on Sunday morning.\r\nThe quick-moving storms crossed out of the Florida Keys an… [+1482 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "TMZ"
    //         },
    //         "author": "TMZ Staff",
    //         "title": "Clive Hosts Star-Studded Pre-Grammys Party With Meg, Mariah and Meryl - TMZ",
    //         "description": "Clive Davis is reliable for sure ... it's Grammy night Sunday, and he threw his annual Pre-Grammy gala as promised Saturday night, and the stars showed up.",
    //         "url": "https://www.tmz.com/2024/02/04/clive-hosts-annual-pre-grammys-party-beverly-hills/",
    //         "urlToImage": "https://imagez.tmz.com/image/87/16by9/2024/02/04/877945b5272549b5974cca99480d5f40_xl.png",
    //         "publishedAt": "2024-02-04T14:38:00Z",
    //         "content": "Clive Davis is reliable for sure ... it's Grammy night Sunday, and he threw his annual Pre-Grammy gala as promised Saturday night, and the stars showed up.\r\nMegan Thee Stallion, Janelle Monáe, Paris … [+1039 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Ryan King",
    //         "title": "South Dakota governor Kristi Noem banished from tribal land over proposed border security maneuver - New York Post ",
    //         "description": "A tribe in South Dakota banished Gov. Kristi Noem from setting foot on its land in protest of her administration mulling plans to dispatch resources to Texas to bolster border security.",
    //         "url": "https://nypost.com/2024/02/04/news/kristi-noem-banished-from-south-dakota-reservation/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/02/75932185.jpg?quality=75&strip=all&w=1024",
    //         "publishedAt": "2024-02-04T14:24:00Z",
    //         "content": "A South Dakota Indigenous tribe banished Republican Gov. Kristi Noem from setting foot on its land in protest of her administration mulling plans to dispatch resources to Texas to bolster border secu… [+3248 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NBCSports.com"
    //         },
    //         "author": "Mike Florio",
    //         "title": "Bill Belichick thanks Patriots fans with full-page ad in Boston Globe - NBC Sports",
    //         "description": "Belichick closes the book on 24 years in New England.",
    //         "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/bill-belichick-thanks-patriots-fans-with-full-page-ad-in-boston-globe",
    //         "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/fa43b0e/2147483647/strip/true/crop/1920x1080+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fhdliveextra-a.akamaihd.net%2FHD%2Fimage_sports%2FNBCU_Sports_Group_-_nbcsports%2F520%2F939%2Fnbc_pft_billbelichick_240202.jpg",
    //         "publishedAt": "2024-02-04T14:21:19Z",
    //         "content": "More than three weeks ago, the Patriots and coach Bill Belichick parted ways. Today, the first Sunday without NFL football since the Sunday after Labor Day, Belichick issued an official thank you to … [+3143 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Amelia Lucas",
    //         "title": "McDonald's is promising its 'Best Burger.' Now the chain will see if diners buy more of them - CNBC",
    //         "description": "McDonald's restaurants in the U.S. are now serving improved versions of the chain's famous burgers, and the company hopes the move will unlock sales growth.",
    //         "url": "https://www.cnbc.com/2024/02/04/mcdonalds-launches-best-burger-ahead-of-earnings-report.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107364366-1706188632556-gettyimages-1950965622-fd-trend-doublebigmac.jpeg?v=1706188700&w=1920&h=1080",
    //         "publishedAt": "2024-02-04T13:00:01Z",
    //         "content": "McDonald's has upgraded its burgers but it's unclear if its sales will get the same boost.\r\nThe fast-food giant has outperformed its rivals in recent quarters, helped by price hikes across its menu a… [+4532 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CNBC"
    //         },
    //         "author": "Melissa Repko",
    //         "title": "New Macy's CEO Tony Spring looks to revive a 166-year-old retailer fighting for relevance - CNBC",
    //         "description": "As department store operator Macy's gets a new leader in Tony Spring, it's contending with slowing sales, activist investors and an aging customer base.",
    //         "url": "https://www.cnbc.com/2024/02/04/macys-ceo-tony-spring-takes-over-for-jeff-gennette.html",
    //         "urlToImage": "https://image.cnbcfm.com/api/v1/image/107367768-1706805684358-IMG_1365_2.jpg?v=1706976867&w=1920&h=1080",
    //         "publishedAt": "2024-02-04T12:00:01Z",
    //         "content": "Tony Spring speaks at an event unveiling the Macy's new women's apparel brand, On 34th, in July. Spring is former CEO of Bloomingdale's and begins as Macy's CEO in February 2024, succeeding longtime … [+12159 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "[Removed]"
    //         },
    //         "author": null,
    //         "title": "[Removed]",
    //         "description": "[Removed]",
    //         "url": "https://removed.com",
    //         "urlToImage": null,
    //         "publishedAt": "1970-01-01T00:00:00Z",
    //         "content": "[Removed]"
    //     },
    //     {
    //         "source": {
    //             "id": "business-insider",
    //             "name": "Business Insider"
    //         },
    //         "author": "Emily Stewart",
    //         "title": "The New Jobs Report Showed Employees Are Entering a so-so Era - Business Insider",
    //         "description": "The latest jobs report had lots of good news for the labor market. Workers are in a great spot, but not a perfect one.",
    //         "url": "https://www.businessinsider.com/january-jobs-report-labor-market-good-economy-inflation-wages-2024-2",
    //         "urlToImage": "https://i.insider.com/65bd4f3843bb77284ba33473?width=1200&format=jpeg",
    //         "publishedAt": "2024-02-04T10:56:00Z",
    //         "content": "For almost two years, many economists and observers have figured something has to give in the labor market. And then the labor market has turned around and said, \"Ha, actually, no.\"\r\nJanuary's jobs r… [+5254 chars]"
    //     }
    // ]
    static defaultProps={
      country:'in',
      pagesize:15,
      category:"general"
    }
    static propTypes={
      country:PropTypes.string,
      pagesize:PropTypes.number,
      category:PropTypes.string
    }
    constructor(props){
        super(props);
        console.log("i am a constructor from newscomp");
        this.state={
            articles:[],
            // articles:this.articles
            loading:true,
            page:1,
            totalResults:0
        }
        document.title=`${this.props.category}-Newszone`;
        }
    handleprev=async()=>{
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cf050527fff4b4884fb0299e2149015&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
      let urlPrev = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cf050527fff4b4884fb0299e2149015&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
      this.props.setprogress(10); 
      this.setState({loading:true});
      let response = await fetch(urlPrev);
      let data = await response.json();
      this.setState({ 
        page:this.state.page-1, 
        articles: data.articles, 
        loading: false});
        this.props.setprogress(100); 
    }
    fetchMoreData = async() => {
      this.setState({page:this.state.page+1});
      let urlPrev = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cf050527fff4b4884fb0299e2149015&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
      // this.setState({loading:true});
      let response = await fetch(urlPrev);
      let data = await response.json();
      this.setState({ 
        page:this.state.page-1, 
        articles: this.state.articles.concat(data.articles)});
    };
    handlenext=async()=>{
      if(!(this.state.page + 1>Math.ceil(this.state.totalresults/15))){
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cf050527fff4b4884fb0299e2149015&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
        let urlNext = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cf050527fff4b4884fb0299e2149015&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        this.props.setprogress(0); 
        this.setState({loading:true});
        let response = await fetch(urlNext);
        let data = await response.json();
        this.setState({ 
          page:this.state.page+1, 
          articles: data.articles, 
          loading: false});
        }
        this.props.setprogress(100); 
      }
    async componentDidMount(){
      // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6cf050527fff4b4884fb0299e2149015
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catogory}&apiKey=6cf050527fff4b4884fb0299e2149015&page=1&pageSize=${this.props.pagesize}`;
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6cf050527fff4b4884fb0299e2149015&page=1&pageSize=${this.props.pagesize}`;
        try { 
          this.props.setprogress(10); 
          let response = await fetch(url);
            let data = await response.json();
            this.setState({ articles: data.articles, loading: false,totalresults:data.totalResults });
            this.props.setprogress(100); 
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loading: false });
        }
    }
  render() {
    return (
      <div>
        <h1 className='text-center'>newszone ..</h1> 
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
                <Newsitem title={element.title?element.title.slice(0,45):''} desc={element.description?element.description.slice(0,85):''} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr; Previous</button>
          <button disabled={(this.state.page + 1)>Math.ceil(this.state.totalresults/this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr; </button>  
        </div> */}
      </div>
    )
  }
}

export default Newscomp
