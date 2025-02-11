import SeriesData from "../api/SeriesData.json";
import { SeriesCard } from "./SeriesCard";

export const NetflixSeries = () => {
    return (
        <ul>
            {SeriesData.map((curElem) => (
               <SeriesCard key={curElem.id} data={curElem}/>
            //    passing data throw curElem  props
            //  iff we are using single line of code no need to use return key word.
            ))}
        </ul>
    )
}

             // used return key word

// export const NetflixSeries = () => {
//     return (
//         <ul>
//             {SeriesData.map((curElem) => {
//              return  <SeriesCard key={curElem.id} curElem={curElem}/>
//
//             })}
//         </ul>
//     )
// }
  
  