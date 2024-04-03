import { Cedarville_Cursive} from "next/font/google";


const poppins = Cedarville_Cursive({
  weight:["400","400"],
  subsets:["latin"]
});

export const metadata = {
  title: "youtube route",
  description: "subroute checking",
  "keywords":"youtube next react"
};

export default function RootLayout({ children }) {
  return (
    <div className={poppins.className}>
         {children}
    </div>
     
      
  );
}
