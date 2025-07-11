
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Text, Card, TextInput, Button, ActivityIndicator, ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AnalyzeScreen = ({ navigation }) => {
  const [emailContent, setEmailContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAnalyze = async () => {
    if (!emailContent.trim()) return;

    setIsAnalyzing(true);
    setProgress(0);

    try {
      // Retrieve token from AsyncStorage
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Error', 'You must be logged in to analyze emails');
        return;
      }

      const response = await fetch('https://16d570584bac.ngrok-free.app/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,  // Send the token in the Authorization header
        },
        body: JSON.stringify({
          email_text: emailContent,
          user_id: 17,  // Replace with actual user_id if available
          threshold: 0.75,  // Example threshold value
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch prediction');
      }

      const data = await response.json();
      navigation.navigate('Result', { result: data });

    } catch (error) {
      console.error('Error analyzing email:', error);
      Alert.alert('Analysis Error', 'There was a problem analyzing the email. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.keyboardAvoidingView} keyboardVerticalOffset={80}>
        <ScrollView style={globalStyles.screenContainer}>
          <View style={styles.headerContainer}>
            <Text style={globalStyles.title}>Email Analyzer</Text>
            <Text style={globalStyles.textMuted}>Paste the suspicious email content below to analyze it for phishing attempts</Text>
          </View>

          <Card style={globalStyles.card}>
            <Card.Content>
              <TextInput
                label="Email Content"
                value={emailContent}
                onChangeText={setEmailContent}
                mode="outlined"
                multiline
                numberOfLines={10}
                style={styles.textInput}
                disabled={isAnalyzing}
                placeholder="Paste email content here..."
                theme={{ colors: { primary: theme.colors.primary , text: 'white', // Main text color
                  onSurface: 'white', // Text color when disabled
                  surface: 'transparent', // Background color
                  placeholder: 'rgba(255,255,255,0.5)', // Placeholder color
            } }}
              />
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button mode="contained" onPress={handleAnalyze} disabled={!emailContent.trim() || isAnalyzing} loading={isAnalyzing} style={styles.analyzeButton}>
                {isAnalyzing ? 'Analyzing...' : 'Analyze Email'}
              </Button>
            </Card.Actions>
          </Card>

          {isAnalyzing && (
            <Card style={[globalStyles.card, styles.progressCard]}>
              <Card.Content style={styles.progressContent}>
                <ActivityIndicator size="large" color={theme.colors.primary} style={styles.loader} />
                <Text style={styles.progressText}>Analyzing email content...</Text>
                <Text style={styles.progressSubtext}>Checking for phishing indicators</Text>
                <ProgressBar progress={progress} color={theme.colors.primary} style={styles.progressBar} />
              </Card.Content>
            </Card>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: { flex: 1 },
  headerContainer: { marginBottom: 20 },
  textInput: { backgroundColor: 'rgba(255, 255, 255, 0.05)', minHeight: 150 },
  cardActions: { justifyContent: 'flex-end', paddingTop: 20 },
  analyzeButton: { backgroundColor: theme.colors.primary },
  progressCard: { marginTop: 16 },
  progressContent: { alignItems: 'center', padding: 16 },
  loader: { marginBottom: 16 },
  progressText: { fontSize: 16, fontWeight: 'bold', color: theme.colors.text, marginBottom: 4 },
  progressSubtext: { fontSize: 14, color: 'rgba(255, 255, 255, 0.7)', marginBottom: 16 },
  progressBar: { height: 6, width: '100%', borderRadius: 3 },
});

export default AnalyzeScreen;
