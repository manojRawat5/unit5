import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section id="about_us" className="about_us">
      <div className="container">
        <p className="sec2_title">About Weekend Trip Planner</p>
        <p className="about_desc1">
          Welcome to <span className="highlight">Weekend Trip Planner</span>, your ultimate companion for
          unforgettable weekend adventures! Whether you’re seeking a tranquil getaway or an adrenaline-packed escapade,
          we’ve got you covered.
        </p>
        <p className="about_desc1">
          Our platform simplifies the planning process by offering curated trip ideas, real-time travel suggestions, and
          customizable itineraries tailored to your preferences.
        </p>
        <p className="about_desc1">
          Founded by travel enthusiasts, Weekend Trip Planner combines our love for exploration with cutting-edge
          technology to help you discover incredible destinations. With us, planning your next weekend adventure has
          never been so easy and exciting!
        </p>
        <div className="team_sec">
          <p className="sec2_title">Meet Our Team</p>
          <div className="team">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="avatar_container">
                  <img
                    src={member.image}
                    alt={`Team Member ${index + 1}`}
                    className="team-img"
                  />
                </div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: "Manohar Varma",
    role: "Founder & CEO",
    description:
      "Manohar is the visionary behind Weekend Trip Planner, bringing years of travel and tech expertise to the platform.",
    image: "manohar.jpg",
  },
  {
    name: "Manoj Rawat",
    role: "Lead Developer",
    description:
      "Manoj spearheads the development team, ensuring a smooth user experience and top-notch features.",
    
    image: "manoj.jpg",
  },
  {
    name: "Mahes Tidgam",
    role: "UI/UX Designer",
    description:
      "Mahesh crafts intuitive designs that make trip planning not just easy but delightful.",
      image: "mahesh.jpg",
  },
  {
    name: "Shashank Sinha",
    role: "Content Strategist",
    description:
      "Shashank curates trip ideas and travel content to inspire weekend adventurers worldwide.",
    image: "shashank.jpg",
  },
];

export default AboutUs;
