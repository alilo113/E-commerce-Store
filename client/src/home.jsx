import React from "react";
import pic1 from "./assets/c-d-x-PDX_a_82obo-unsplash.jpg"; // Assuming the file is a .jpg
import pic2 from "./assets/domino-studio-164_6wVEHfI-unsplash.jpg"; // Assuming the file is a .jpg
import pic3 from "./assets/eniko-kis-KsLPTsYaqIQ-unsplash.jpg"; // Assuming the file is a .jpg
import pic4 from "./assets/giorgio-trovato-K62u25Jk6vo-unsplash.jpg"; // Assuming the file is a .jpg
import pic5 from "./assets/irene-kredenets-KStSiM1UvPw-unsplash.jpg"; // Assuming the file is a .jpg
import pic6 from "./assets/joan-tran-reEySFadyJQ-unsplash.jpg"; // Assuming the file is a .jpg
import pic7 from "./assets/kiran-ck-LSNJ-pltdu8-unsplash.jpg"; // Assuming the file is a .jpg
import pic8 from "./assets/rachit-tank-2cFZ_FB08UM-unsplash.jpg"; // Assuming the file is a .jpg

export function Home() {
  const pictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  return (
    <div>
      {pictures.map((pic, index) => (
        <img src={pic} alt={`Image ${index + 1}`} key={index} className="max-w-52"/>
      ))}
    </div>
  );
}