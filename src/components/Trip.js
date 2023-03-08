import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/mech engineer.jpg";
import Trip2 from "../assets/instrumentation.jpg";
import Trip3 from "../assets/electrical.jpg";
import Trip4 from "../assets/civil.jpg";
import Trip5 from "../assets/procurement.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Our Services</h1>
      {/* <p>You can discover unique destinations using Google Maps.</p> */}
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Mechanical Engineering"
          text="Engineering solutions for oil & gas."
        />
        <TripData
          image={Trip2}
          heading="Instrumentation Engineering"
          text="Engineering that focuses on the design, development, and implementation of devices, systems, and processes for measuring and controlling variables in various fields."
        />
        <TripData
          image={Trip5}
          heading="Procurement of Equipment"
          text="Procurement Of Chemical, H.S.E Equipment And Materials, Valves, Bearing, Pressure Gauges, Pipes, Steel, Tools, Stationaries, Laboratory Equipment, And Electrical Materials"
        />
        <TripData
          image={Trip3}
          heading="Electrical Engineering"
          text="Electrical engineering is a field of engineering that generally deals with the study and application of electricity, electronics, and electromagnetism."
        />
        <TripData
          image={Trip4}
          heading="Civil Engineering"
          text="Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including works like roads, bridges, canals, dams, and buildings."
        />
      </div>
    </div>
  );
}

export default Trip;
