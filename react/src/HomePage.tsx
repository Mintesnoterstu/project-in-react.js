import React from 'react';
import styled from '@emotion/styled';
import { FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1535162172476-1aaf2ee730b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  border-radius: 15px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const DestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const DestinationCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const DestinationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DestinationInfo = styled.div`
  padding: 20px;
`;

const DestinationTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const DestinationDescription = styled.p`
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
`;

const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const HomePage = () => {
  const destinations = [
    {
      title: "Lalibela Rock Churches",
      image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A UNESCO World Heritage site featuring 11 medieval monolithic cave churches carved from rock.",
      location: "Amhara Region",
      bestTime: "October to May"
    },
    {
      title: "Simien Mountains",
      image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Home to dramatic landscapes and unique wildlife including the Gelada baboon and Walia ibex.",
      location: "Northern Ethiopia",
      bestTime: "September to April"
    },
    {
      title: "Aksum",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Ancient city known for its tall obelisks and historical significance as the heart of ancient Ethiopia.",
      location: "Tigray Region",
      bestTime: "November to March"
    }
  ];

  return (
    <Container>
      <Header>
        <Title>Discover Ethiopia</Title>
        <Subtitle>Experience the cradle of humanity and ancient civilizations</Subtitle>
      </Header>

      <DestinationsGrid>
        {destinations.map((dest, index) => (
          <DestinationCard key={index}>
            <DestinationImage src={dest.image} alt={dest.title} />
            <DestinationInfo>
              <DestinationTitle>{dest.title}</DestinationTitle>
              <DestinationDescription>{dest.description}</DestinationDescription>
              <IconText>
                <FaMapMarkerAlt /> {dest.location}
              </IconText>
              <IconText>
                <FaCalendarAlt /> Best time: {dest.bestTime}
              </IconText>
            </DestinationInfo>
          </DestinationCard>
        ))}
      </DestinationsGrid>
    </Container>
  );
};

export default HomePage; 