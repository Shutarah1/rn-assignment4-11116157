import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import JobCard from './JobCard';

const PopularJobs = () => {
  const jobCards = [
    { title: "Jr Executive", company: "Burger King", salary: "$96,000/y", location: "Los Angeles, US", logo: require('../assets/burgerking.png') },
    { title: "Product Manager", company: "Beats", salary: "$84,000/y", location: "Florida, US", logo: require('../assets/beats.png') },
    { title: "Account Manager", company: "Adobe", salary: "$90,000/y", location: "San Francisco, US", logo: require('../assets/adobe.jpg') },
    { title: "Business Analyst", company: "Shopify", salary: "$101,000/y", location: "Chicago, US", logo: require('../assets/shopify.jpg') },
    { title: "Systems Engineer", company: "Cisco", salary: "$86,000/y", location: "San Jose, US", logo: require('../assets/facebook.png') },
    { title: "Graphic Designer", company: "TikTok", salary: "$86,000/y", location: "San Francisco, US", logo: require('../assets/tiktok.jpg') },
    { title: "Customer Manager", company: "HubSpot", salary: "$50,000/y", location: "Boston, US", logo: require('../assets/hubspot.jpg') },
    { title: "Network Engineer", company: "AT&T", salary: "$105,000/y", location: "Dallas, US", logo: require('../assets/AT.jpg') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView style={styles.cardList}>
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
    flex: 1,
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
    flexDirection: 'column',
  },
});

export default PopularJobs;
