import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {
  news:string;
  lnews:string;
  movies:string;
  cast:string;
  games:string;
  NApiKey="4dab92bbbeb25ad0621b385be360c30d";  //
  MApiKey="fb510767ba2da19f1f9b8758e031f726";  //themoviedb api key username=vohraarsh993
  IMDBApiKey="k_46u68o04" //IMDB Api key username=vohraarsh993
  rawgApikey="a41f5ab42f3b430d8fcd28aac0089d28" //rawg.
  
  constructor(private http: HttpClient) {
    this.news=`https://gnews.io/api/v4/search?lang=en&country=in&sortby=relevance&token=${this.NApiKey}`
    this.lnews=`https://gnews.io/api/v4/top-headlines?lang=en&country=in&token=${this.NApiKey}`
    this.movies=`https://api.themoviedb.org/3/movie`
    this.cast=`https://imdb-api.com/en/API/FullCast/${this.IMDBApiKey}`
    this.games=`https://api.rawg.io/api/`
   }

   getLatestNews(): Observable<any>{
    return this.http.get<any>(this.lnews);}

    getLatestNewsByTopic(topic:string): Observable<any>{
      let url=`${this.lnews}&topic=${topic}`
      return this.http.get<any>(url);}
 
   getNews(query:string): Observable<any>{
      let url=`${this.news}&q=${query}`
      return this.http.get<any>(url);}
      
   getMovies(tag:string): Observable<any>{
        let url=`${this.movies}/${tag}?api_key=${this.MApiKey}&language=en-US&region=IN&page=1`
        return this.http.get<any>(url);}
        
   getMovie(id:string): Observable<any>{
          let url=`${this.movies}/${id}?api_key=${this.MApiKey}&language=en-US`
          return this.http.get<any>(url);}

    getCast(Iid:string): Observable<any>{
            let url=`${this.cast}/${Iid}`
            return this.http.get<any>(url);}

    getGamesInfo(tag:string): Observable<any>{
              let url=`${this.games}${tag}?key=${this.rawgApikey}`
              return this.http.get<any>(url);}

    getGamesbyDeveloper(id:string): Observable<any>{
                let url=`${this.games}games?developers=${id}&key=${this.rawgApikey}`
                return this.http.get<any>(url);}

    getGamesbyPublisher(id:string): Observable<any>{
                  let url=`${this.games}games?publishers=${id}&key=${this.rawgApikey}`
                  return this.http.get<any>(url);}
    getGamesbyGenre(id:string): Observable<any>{
                    let url=`${this.games}games?genres=${id}&key=${this.rawgApikey}`
                    return this.http.get<any>(url);}

    getGamesbyPlatform(id:string): Observable<any>{
                      let url=`${this.games}games?platforms=${id}&key=${this.rawgApikey}`
                      return this.http.get<any>(url);}

    getGame(id:string): Observable<any>{
                        let url=`${this.games}games/${id}?key=${this.rawgApikey}`
                        return this.http.get<any>(url);}
}

 
//header.html <-> header.ts <-> snews.ts <-> mservice api 
 