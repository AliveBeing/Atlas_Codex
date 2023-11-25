import React from 'react';
import { useEffect,useState } from 'react';
import './LatestNews.css';
import Navbar from '../Navbar/Navbar';
const LatesNews = () => {
    const [myapp , setMyApp] =useState([]);

  const fetchData=async()=>{                                  //this is used to hit the api and render the data //await is used with async
    let response= await fetch("https://api.spaceflightnewsapi.net/v4/articles/?search=space&summary_contains=space&summary_contains_all=space&summary_contains_one=space&title_contains=space&title_contains_all=space&title_contains_one=space") //await used:  till the data is achied wait
    let data=await response.json();                          //data ko json file mai convert krne ka wait
    setMyApp(data.results)
  }

  useEffect(()=>{                                    //fetchData() is called using useEffect() ,, 
    fetchData();                                        //useEffect works when the bootstrap card data is rendered


  },[])                                              //empty bracket so that it works only one time,,,
  
  return(
    <div>
      <div className='main'></div>
      <Navbar />
      <h1 className="text-ceenter">Latest News</h1>

    {
      myapp.map((ele)=>{                             //map is used to loop the array data
      console.log(ele)
        
      return(
          <body class="i_body">
          <article class="art" >
            <div class="late">
                <div class="data">
                    <div class="i_image">
                    <div class="i_link ">
                            <img src={ele.image_url} alt="..."/>
                        </div>
                       
                    </div>
                    <div class="i_text">
                        <div class="EntryTitle">
                            <h4><b>{ele.title}</b></h4>
                            <br></br>
                        </div>
                        <div class="EntryMetadata EntryMetadata--magazine">
                            <div class="EntryMetadataBasic__source-info">
                                <span>{ele.news_site}</span>             
                                <span>   {ele.published_at}</span>
                                
                            </div>
                            
    </div>
    <div class="EntrySummary EntrySummary--magazine">
        <div> {ele.summary}
        </div>
    </div>
    <br></br>
    <a href={ele.url} target="_blank" class="btn btn-primary">Read More...</a>
</div>
</div>
</div>

<footer class="i_line"></footer>

</article>


          </body>

        );

      })
    }
    </div>
  );
  
}


export default LatesNews
