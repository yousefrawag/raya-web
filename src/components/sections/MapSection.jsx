"use client";
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

// إصلاح الأيقونات الافتراضية
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapSection = ({ properties, onPropertySelect }) => {
  const palestineCenter = [31.9466, 35.3027];

  // أيقونة مخصصة
  const customIcon = new Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // مناطق عليها رسوم
// مناطق عليها رسوم
const taxedAreas = [
  {
    name: "منطقة بين نابلس وغزة",
    coordinates: [
      [32.3, 35.4],   // شمال شرق (أعلى الضفة)
      [32.0, 35.3],   // شرق نابلس
      [31.9, 35.0],   // وسط الضفة
      [31.8, 34.8],   // شمال غزة
      [31.5, 34.47],  // غزة
      [31.2, 34.25],  // رفح
      [31.1, 34.6],   // جنوب غرب
      [32.1, 35.0],   // طولكرم
    ],
    tax: true,
  },
];

// مناطق معفاة
const freeAreas = [
  {
    name: "منطقة شمالية معفاة",
    coordinates: [
      [32.8, 35.6],   // شمال شرق
      [32.9, 35.3],   // أعلى نابلس
      [32.7, 35.0],   // شمال غرب
    ],
    tax: false,
  },
];


  return (
    <div className="h-full w-full overflow-hidden shadow-lg">
      <MapContainer
        center={palestineCenter}
        zoom={8}
        style={{ height: "100%", width: "100%" }}
        className="z-10"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* عرض الأراضي */}
        {properties.map((property) => (
          <div key={property.id}>
            {/* <Circle
              center={[property.lat, property.lng]}
              radius={1500}
              // pathOptions={{
              //   color: property.tax ? "red" : "green",
              //   fillColor: property.tax ? "red" : "green",
              //   fillOpacity: 0.3,
              // }}
            /> */}

            <Marker
              position={[property.lat, property.lng]}
              icon={customIcon}
              eventHandlers={{
                click: () => onPropertySelect(property),
              }}
            >
              <Popup>
                <div className="flex items-start w-64">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1 ml-2">
                    <Link
                      href={`/Propertyes/${property.id}`}
                      className="font-bold text-sm mb-1 underline"
                    >
                      {property.title}
                    </Link>
                    <p className="text-orange-600 font-bold text-xs">
                      {property.price}
                    </p>
                    <p className="text-gray-600 text-xs">{property.location}</p>
                    <p
                      className={`text-xs font-bold ${
                        property.tax ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {property.tax ? "عليه رسوم" : "معفى من الرسوم"}
                    </p>
                  </div>
                </div>
              </Popup>
            </Marker>
          </div>
        ))}


      </MapContainer>
    </div>
  );
};

export default MapSection;






        {/* عرض المناطق عليها رسوم */}
        {/* {taxedAreas.map((area, idx) => (
<Polygon
 key={`free-${idx}`}
  positions={area.coordinates}
  pathOptions={{
    color: "transparent",  // يخفي الحدود
    fillColor: "red",      // اللون الداخلي
    fillOpacity: 0.7,      // درجة التغطية
  }}
>

            <Popup>
              <p className="font-bold text-red-600">{area.name}</p>
              <p>🟥 هذه المنطقة عليها رسوم</p>
            </Popup>
          </Polygon>
        ))}

        {/* عرض المناطق المعفاة */}
        // {freeAreas.map((area, idx) => (
        //   <Polygon
        //     key={`free-${idx}`}
        //     positions={area.coordinates}
        //     pathOptions={{
        //      color: "transparent", 
        //       fillColor: "green",
        //       fillOpacity: 0.7,
        //     }}
        //   >
        //     <Popup>
        //       <p className="font-bold text-green-600">{area.name}</p>
        //       <p>🟩 هذه المنطقة معفاة من الرسوم</p>
        //     </Popup>
        //   </Polygon>
        // ))} */}*/
