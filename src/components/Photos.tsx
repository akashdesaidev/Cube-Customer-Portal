import React, { Suspense, useEffect, useState } from "react";

interface PhotosDetails {
  id: string;
  height: number;
  width: number;
  url: string;
}
const Photos = ({ customerId }: { customerId: number | null }) => {
  const [photos, setPhotos] = useState<PhotosDetails[] | null>(null);
  const [shouldUpdate, setShouldUpdate] = useState(true);
  const fetchPhotos = async () => {
    setShouldUpdate(false);
    const data = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10"
    );
    const res: PhotosDetails[] = await data.json();
    setPhotos(res.splice(0, 9));
  };
console.log("rerendering",shouldUpdate)
  
  useEffect(() => {
    if (shouldUpdate) {
      fetchPhotos();
      console.log("fetching new photos")
      setShouldUpdate(false);
    }
  }, [shouldUpdate]);

  

  useEffect(() => {
    const timer = setInterval(() => {
      setShouldUpdate(true);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  
 
  return (
    <>
      {photos &&
        photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={`Photo`} />
        ))}
    </>
  );
};

export default Photos;