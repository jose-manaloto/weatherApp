import * as React from "react";
// THe purpose of the dumb component is to lift business logic up!!!!
// Functional stateless component

const Weather = ({
  city,
  country,
  description,
  error,
  humidity,
  temperature
}: any) => (
  <div>
    {temperature && (
      <p className="temp">
        {temperature}
        &#176;
      </p>
    )}
    {city &&
      country && (
        <p>
          {city},{country}
        </p>
      )}
    {humidity && <p>Humidity is {humidity}</p>}
    {description && <p>{description}</p>}
    {error && <p>{error}</p>}
  </div>
);

// class Weather extends React.Component {
//   render() {
//     return (
//       <div>
//         {}
//         {this.props.temperature && (
//           <p className="temp">
//             {this.props.temperature}
//             &#176;
//           </p>
//         )}
//         {this.props.city &&
//           this.props.country && (
//             <p>
//               {this.props.city},{this.props.country}
//             </p>
//           )}
//         {this.props.humidity && <p>Humidity is {this.props.humidity}</p>}
//         {this.props.description && <p>{this.props.description}</p>}
//         {this.props.error && <p>{this.props.error}</p>}
//       </div>
//     );
//   }
// }
export default Weather;
