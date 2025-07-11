import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

const AboutScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={globalStyles.screenContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>About PhishGuard</Text>
          <Text style={styles.headerSubtitle}>
            Protecting users from phishing attacks with advanced AI technology
          </Text>
        </View>

        <View style={styles.featuresGrid}>
          <Card style={styles.featureCard}>
            <Card.Content style={styles.featureContent}>
              <View style={[styles.iconCircle, { backgroundColor: 'rgba(255, 59, 48, 0.1)' }]}>
                <MaterialCommunityIcons name="alert-circle" size={24} color={theme.colors.error} />
              </View>
              <Text style={styles.featureTitle}>Phishing Detection</Text>
              <Text style={styles.featureDescription}>
                Advanced algorithms to identify phishing attempts
              </Text>
            </Card.Content>
          </Card>

          <Card style={styles.featureCard}>
            <Card.Content style={styles.featureContent}>
              <View style={[styles.iconCircle, { backgroundColor: 'rgba(0, 122, 255, 0.1)' }]}>
                <MaterialCommunityIcons name="eye" size={24} color={theme.colors.primary} />
              </View>
              <Text style={styles.featureTitle}>Threat Intelligence</Text>
              <Text style={styles.featureDescription}>
                Real-time updates on emerging threats
              </Text>
            </Card.Content>
          </Card>

          <Card style={styles.featureCard}>
            <Card.Content style={styles.featureContent}>
              <View style={[styles.iconCircle, { backgroundColor: 'rgba(52, 199, 89, 0.1)' }]}>
                <MaterialCommunityIcons name="shield-check" size={24} color={theme.colors.success} />
              </View>
              <Text style={styles.featureTitle}>User Education</Text>
              <Text style={styles.featureDescription}>
                Learn to identify and avoid phishing attempts
              </Text>
            </Card.Content>
          </Card>
        </View>

        <Card style={[globalStyles.card, styles.missionCard]}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Our Mission</Text>
            <Text style={styles.missionText}>
              At PhishGuard, we're committed to making the internet safer by protecting users from increasingly
              sophisticated phishing attacks.
            </Text>
            <Text style={styles.missionDescription}>
              Phishing attacks remain one of the most common and effective cyber threats, with millions of attempts daily.
              Our mission is to provide accessible, powerful tools that help individuals and organizations identify and
              avoid these threats, reducing successful attacks and protecting sensitive information.
            </Text>
          </Card.Content>
        </Card>

        <Text style={[globalStyles.subtitle, styles.faqTitle]}>Frequently Asked Questions</Text>

        <Card style={globalStyles.card}>
          <Card.Content>
            <Text style={styles.questionTitle}>What is phishing?</Text>
            <Text style={styles.questionAnswer}>
              Phishing is a type of cyber attack where attackers disguise themselves as trustworthy entities to trick
              victims into revealing sensitive information such as passwords, credit card numbers, or personal data.
            </Text>
          </Card.Content>
        </Card>

        <Card style={globalStyles.card}>
          <Card.Content>
            <Text style={styles.questionTitle}>How accurate is the detection?</Text>
            <Text style={styles.questionAnswer}>
              Our system achieves over 97% accuracy in detecting phishing attempts. We continuously improve our
              algorithms based on new threats and user feedback to maintain high detection rates.
            </Text>
          </Card.Content>
        </Card>

        <Card style={[globalStyles.card, { marginBottom: 24 }]}>
          <Card.Content>
            <Text style={styles.questionTitle}>Is my email content secure?</Text>
            <Text style={styles.questionAnswer}>
              Yes. We prioritize your privacy and security. Email content is encrypted during transmission and
              analysis, and we don't store the full content of emails after analysis is complete.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  featuresGrid: {
    marginBottom: 24,
  },
  featureCard: {
    backgroundColor: theme.colors.card,
    marginBottom: 16,
  },
  featureContent: {
    alignItems: 'center',
    padding: 16,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  missionCard: {
    backgroundColor: 'rgba(0, 184, 148, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 184, 148, 0.2)',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 12,
    textAlign: 'center',
  },
  missionText: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: 12,
  },
  missionDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  faqTitle: {
    marginBottom: 16,
  },
  questionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  questionAnswer: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default AboutScreen;