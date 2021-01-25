import React from "react";
import "./../style/Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__sections">
        <Card
          src="https://pix10.agoda.net/hotelImages/620/6206755/6206755_18120621090070141580.jpg?s=1024x768"
          title="living stays"
          description="Your Hotel stock images are ready. Download all free or royalty-free photos and vectors. Use them in commercial designs under lifetime, perpetual & worldwide"
        />
        <Card
          src="https://images.all-free-download.com/images/graphicthumb/ornate_hotel_lobby_picture_1_167663.jpg"
          title="living stays"
          description="Your Hotel stock images are ready. Download all free or royalty-free photos and vectors. Use them in commercial designs under lifetime, perpetual & worldwide"
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8S2nWLJU5Wp6hQ0sBG1_7KXUWkq6YaWtAGw&usqp=CAU"
          title="living stays"
          description="Your Hotel stock images are ready. Download all free or royalty-free photos and vectors. Use them in commercial designs under lifetime, perpetual & worldwide"
        />
      </div>
      <div className="home__sections">
        <Card
          src="https://pix10.agoda.net/hotelImages/4592284/-1/335c860ca8309428e83853c37dd6ab5a.jpg?s=1024x768v"
          title="living stays"
          description="Your Hotel stock images are ready. Download all free or royalty-free photos and vectors. Use them in commercial designs under lifetime, perpetual & worldwide"
        />
        <Card
          src="https://pix10.agoda.net/hotelImages/620/6206755/6206755_18120621090070141580.jpg?s=1024x768"
          title="living stays"
          description="Your Hotel stock images are ready. Download all free or royalty-free photos and vectors. Use them in commercial designs under lifetime, perpetual & worldwide"
        />
        <Card
          src="https://pix10.agoda.net/hotelImages/620/6206755/6206755_18120621090070141580.jpg?s=1024x768"
          title="living stays"
          description="Your Hotel stock images are ready. Download all free or royalty-free photos and vectors. Use them in commercial designs under lifetime, perpetual & worldwide"
        />
      </div>
    </div>
  );
}

export default Home;
