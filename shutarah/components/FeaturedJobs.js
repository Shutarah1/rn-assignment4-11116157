import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import JobCard from './JobList';

const FeaturedJobs = () => {
  const jobCards = [
    { title: "Software Engineer", company: "Facebook", salary: "$180,000/y", location: "Accra, Ghana", logo: require('../assets/facebook.png') },
    { title: "Jr Developer", company: "Google", salary: "$160,000/y", location: "California, US", logo: require('../assets/google.png') },
    { title: "Product Manager", company: "BurgerKing", salary: "$120,000/y", location: "New York, US", logo: require('../assets/burgerking.png') },
    { title: "DevOps Engineer", company: "Netflix", salary: "$150,000/y", location: "Los Gatos, US", logo: require('../assets/Netflix.jpg') },
    { title: "Blockchain Developer", company: "Instagram", salary: "$150,000/y", location: "New York, US", logo: require('../assets/instagram.jpg') },
    { title: "Marketing Manager", company: "Beats", salary: "$150,000/y", location: "Palo Alto, US", logo: require('../assets/beats.png') },
    { title: "UX Designer", company: "Apple", salary: "$150,000/y", location: "Cupertino, US", logo: require('../assets/apple.png') },
    { title: "Data Scientist", company: "Amazon", salary: "$140,000/y", location: "Redmond, US", logo: require('../assets/amazon.jpg') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardList}>
        {jobCards.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  seeAll: {
    fontSize: 16,
    color: '#3498db',
  },
  cardList: {
    flexDirection: 'row',
  },
});

export default FeaturedJobs;
