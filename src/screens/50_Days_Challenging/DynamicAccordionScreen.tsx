import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Accordion} from 'components/Accordion';
import Header from 'components/Header';
import {faqs} from '../../constants/index';

const DynamicAccordionScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header />

        {/* FAQs */}
        {faqs.map(item => {
          return (
            <Accordion
              key={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DynamicAccordionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    backgroundColor: '#151515',
  },
  contentContainer: {
    paddingTop: 80,
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTitle: {
    color: '#585c5c',
  },
});
