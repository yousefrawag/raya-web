"use client";
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

const MapSection = ({data}) => {
  const palestineCenter = [31.9466, 35.3027];
  //  const [properties , setProperties] = useState(  [
  //     {
  //       id: 1,
  //       city:"المصايف",
  //           lat: 31.9466,
  //   lng: 35.3027,
  //       propertyType:"فيلا",
  //       title: 'فيلا فاخرة في الرياض',
  //       location: 'المصايف,  القدس',
  //       price: '2,500,000',
  //       image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //       bedrooms: "5",
  //       bathrooms: 4,
  //       area: "450",
  //       opeartion: 'بيع'
  //     },
  //     {
  //       id: 2,
  //       city:"ام طوبا",
  //       propertyType:"شقة",
  //       title: 'شقة عصرية في دبي',
  //       location: 'ام طوبا,  القدس',
  //       price: '8,500',
  //       image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //       bedrooms: "2",
  //       bathrooms: 2,
  //       area: "120",
  //           lat: 31.8,
  //   lng: 35.2,
  //       opeartion: 'ايجار'
  //     },
  //     {
  //       id: 3,
  //         propertyType:"فيلا",
  //       city:"جبل المكبر",
  //       title: 'بنتهاوس مطل على البحر',
  //       location: 'جبل المكبر, القدس',
  //       price: '4,200,000',
  //       image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //       bedrooms: "4",
  //       bathrooms: 3,
  //          lat: 32.1,
  //   lng: 35.1,
  //       area: "300",
  //       opeartion: 'بيع'
  //     },
  //     {
  //       id: 4,
  //       propertyType:"مكتب",
  //       city:"كفر عقرب",
  //       title: 'مكتب استثمارية',
  //       location: ' كفر عقرب, رام الله',
  //       price: '1,200',
  //       image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //       bedrooms: "1",
  //       bathrooms: 1,
  //       area: "80",
  //           lat: 31.7,
  //   lng: 35.4,
  //       opeartion: 'ايجار'
  //     },
  //     {
  //       id: 5,
  //         propertyType:"مستودع",
  //       city:"شعفاط السهل",
  //       title: 'مستودع مع حديقة',
  //       location: ' شعفاط السهل, القدس',
  //       price: '1,800,000',
  //       image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //       bedrooms: "4",
  //       bathrooms: 3,
  //       area: "350",
  //        lat: 31.5326,
  //   lng: 35.0998,
  //       opeartion: 'بيع'
  //     },
  //     {
  //       id: 6,
  //       city:"صور باهر",
  //         propertyType:"استوديو",
  //       title: 'استوديو حديث',
  //       location: ' صور باهر,  القدس',
  //       price: '4,500',
  //       image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //       bedrooms: "1",
  //       bathrooms: 1,
  //       area: "60",
  //          lat: 31.7683,
  //   lng: 35.2137,
  //       opeartion: 'بيع'
  //     } ,
  //       {
  //       id: 12,
  //         propertyType:"فيلا",
  //       title: 'فيلا فاخرة في الرياض',
  //       city:"القدس",
  //       location: ' القدس,  القدس',
  //       price: '2,500,000',
  //       image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //       bedrooms: "5",
  //       bathrooms: 4,
  //       area: "450",
  //           lat: 31.7054,
  //   lng: 35.2024,
  //       opeartion: 'ايجار'
  //     }, 
  //       {
  //       id: 11,
  //         propertyType:"استوديو",
  //         city:"صور باهر",
  //       title: 'فيلا فاخرة في الرياض',
  //       location: 'حي الملقا، الرياض',
  //       price: '2,500,000',
  //       image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  //       bedrooms: "5",
  //       bathrooms: 4,
  //       area: "450",
  //           lat: 31.7054,
  //   lng: 35.2024,
  //       opeartion: 'ايجار'
  //     },
  //   ]) 
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



  return (
    <div className="h-full mt-10 lg:mt-0 w-full overflow-hidden shadow-lg">
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
        {data.map((property) => (
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
              position={[property?.lat?.lat, property?.lat.lon]}
              icon={customIcon}
              eventHandlers={{
                click: () => console.log("property")
                ,
              }}
            >
              <Popup>
                <div className="flex items-start w-64">
                  <Image
                  width={200}
                  height={200}
                    src={property.seriesimagesCutmez[0]?.url}
                    alt={property.title}
                      loading="lazy"
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1 ml-2">
                    <Link
                      href={`/Propertyes/${property.id}`}
                      className="font-bold text-sm mb-1 underline"
                    >
                      {property.title}
                    </Link>
                    <p className="  text-orange-600 font-bold text-xs">
                     
                     <span>
                      {property.typeOfproject}
                      </span> 
                    </p>
                    <p className="text-gray-600 text-xs">
                    
                      {property.city}</p>
               
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
