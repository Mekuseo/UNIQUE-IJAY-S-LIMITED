import React from "react";
import Mountain1 from "../assets/oil engineer.avif";
import Mountain2 from "../assets/oil engineer2.jpg";
import Mountain3 from "../assets/female customer service.jpg";
import Mountain4 from "../assets/cs handshake.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>About Us</h1>
        {/* <p>Tours give you the opportunity to see a lot, within a time frame.</p> */}
        <DestinationData
          className="first-des"
          heading="UNIQUE IJAY'S LIMITED"
          text="Unique Ijay's limited was founded primarily on a desire to effectively provide the needs of companies operating in the oil and gas sector.
  her activities are predicated on an untiring resolve to offer the very best engineering services to her clients. This for all purposes has remained the motivation of the company, perhaps, this is what is responsible for the predictable level of engineering pedigree the company has attained. The unique Ijay's limited terms have remained unwavering in its original resolve, leaving its peculiar unique Ijay's limited signature of existence on all projects undertaken.
"
          img1={Mountain1}
          img2={Mountain2}
        />

        <DestinationData
          className="first-des-reverse"
          heading="In Unique Ijay's LImited,"
          text="We are committed to leveraging its Global Strategic alliances, dedicated people, outstanding customer service, market knowledge and value added service to become the preferred channel for all technical support service and solutions."
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </>
  );
};

export default Destination;

// function Destination() {
//   return (
//     <>
//       <div className="destination">
//         <h1>Popular Destinations</h1>
//         <p>Tours give you the opportunity to see a lot, within a time frame.</p>
//         <div className="first-des">
//           <div className="des-text">
//             <h2>Taal Volcano, Batangas</h2>
//             <p>
//               One of the most iconic views in Luzon, Mt. Taal boasts a volcano
//               inside a lake inside an island. If you fancy a closer look, the
//               hike up to the crater is a mere 45 minutes, and is easy enough for
//               beginners. Guides will assist you most of the way, and you’ll see
//               the peculiar environment found on an active volcano, including
//               volcanic rocks and steam vents. The hike can be dusty and hot, so
//               plan for an early morning trip, and then unwind with some bulalo
//               before heading back home!
//             </p>
//           </div>
//           <div className="image">
//             <img src={Mountain1} alt="img" />
//             <img src={Mountain2} alt="img" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Destination;
