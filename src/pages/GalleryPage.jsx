import React from "react";
import GalleryGrid from "../components/GalleryGrid";
import "../Styles/GalleryPage.css";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <h2>Galería</h2>
      <GalleryGrid
        images={[
          "https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/551877514_18177881773353028_6659596073625041422_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZB1q2IDodWMQ7kNvwG0m_Ig&_nc_oc=AdkoSCUBCtYIK9xhLUxfN3BeQUeTXaKFrXUg9n3zAayfB7MLPuxhOZJyinSCRT7y6aU&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=twOSKoT04X30cdkjZmZc-w&oh=00_Afb9oP2fX7jHgOhrPNCIFEdfrvZu8372TcDdgXVdg3j5ng&oe=68D8F900",
          "https://scontent.ftuc1-1.fna.fbcdn.net/v/t51.82787-15/553382913_18177881737353028_3244630256135576643_n.webp?stp=dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kX5wS3dK5scQ7kNvwHFsi19&_nc_oc=Adlnl2rMnuLlUJeLziEYrariwpRN8PGkpNupIYmJ3I18hWBw-5hkdz8x9Nj2kq02vkI&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=6KGuiPq60eIfc-Xi4wriXQ&oh=00_AfbZnoZCpfFLKVSqHI976oRDvD5PoojNNWP8lQFEiWaTEA&oe=68D90DD9",
          "https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/537249437_18174779197353028_6171786108709528679_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nbmL9JmCVacQ7kNvwG1F1se&_nc_oc=AdkMg-BjONQf54S9hMPlw-Y1oTsBio9-jc9xkG99oAHkk77J9UhI3worjoS62KUzM1w&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=YSkgdJ2DyvnHVnYvx3FU2Q&oh=00_AfZ2sd9_A38WL0mDY7bIM7bkDFulvFEedizsGFb6k7cChA&oe=68D90128",
          "https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/537416234_18174779296353028_8964049376513969259_n.webp?stp=dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aqQgIj0XAVEQ7kNvwGQ-CXk&_nc_oc=AdnsrqDzgrlJC5gFXXURDpRd9W0pFx9F9SAYQPb-vPkzeOfrQ-B2QxqTnbBH71EQjOs&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=wWYA-bUS-K7XfoIoWxSIBQ&oh=00_AfYbHPGO2jJchtuNNhf-6KaEuT_MDE9SBjVmmCLVHgUiBQ&oe=68D91076",
          "https://scontent.ftuc1-2.fna.fbcdn.net/v/t51.82787-15/537029327_18174779239353028_1477435992178385366_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8oxUCnBogAYQ7kNvwEG2W75&_nc_oc=AdkjpfQ4oj_O8LbvBaB-Rp4f0j9zEVVGdmOE1rHZLzLJu05wuVCIXcLZyXkqBhkc_MA&_nc_zt=23&_nc_ht=scontent.ftuc1-2.fna&_nc_gid=XnSWPqwEVuseeJrwKtHqdw&oh=00_AfarIPE16Qr8xE6u2Q43i6JPQhNUfl1Z5cKYENG4t9NeYQ&oe=68D90B66",
          "https://scontent.ftuc1-1.fna.fbcdn.net/v/t51.82787-15/537063644_18174779344353028_1939707529602842530_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-H_PvPgKjncQ7kNvwEZWSAj&_nc_oc=AdlJynRvQIhq25S0R26AnBdlZrOUsRmgoENNDlO-QATOkr6IodzE39j3aGQ1dz_eHO0&_nc_zt=23&_nc_ht=scontent.ftuc1-1.fna&_nc_gid=2tYr2YN-Ml4zHRtIdIXfjA&oh=00_AfZT2scOCS6-KuTSGugPr3s4kaYLbaJhkXtsSlE3FSi3bQ&oe=68D8E84C"
        ]}
      />
    </div>
  );
};

export default GalleryPage;
