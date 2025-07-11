

import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || password !== confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields and make sure passwords match');
      return;
    }
  
    setIsLoading(true);
  
    try {
      const response = await fetch('https://16d570584bac.ngrok-free.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
  
      const text = await response.text();  // Read the response as text (not JSON)
      console.log('Response:', text);  // Log the response to check its contents
  
      // Check if the response is valid JSON before trying to parse it
      const data = JSON.parse(text);
  
      if (data.message === 'User registered successfully') {
        Alert.alert('Success', 'You have been registered successfully!');
        navigation.navigate('LoginScreen');
      } else {
        Alert.alert('Registration Failed', data.error || 'Please try again');
      }
    } catch (error) {
      console.error('Registration error:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          <View style={styles.headerContainer}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <MaterialCommunityIcons name="arrow-left" size={24} color={theme.colors.text} />
            </TouchableOpacity>
            {/* <Text style={styles.headerTitle}>Create Account</Text> */}
          </View>
          <View style={styles.logoContainer}>
                      <MaterialCommunityIcons name="shield-check" size={60} color={theme.colors.primary} />
                      <Text style={styles.appName}>PhishGuard</Text>
                      <Text style={styles.tagline}>Protect yourself from phishing attacks</Text>
                    </View>

          <View style={styles.formContainer}>
            <TextInput
              // label="Full Name"
              value={name}
              onChangeText={setName}
              mode="outlined"
              style={styles.input}
              // theme={{ colors: { primary: theme.colors.primary } }}
              theme={{ colors: { primary: theme.colors.primary , text: 'white', // Main text color
                onSurface: 'white', // Text color when disabled
                surface: 'transparent', // Background color
                placeholder: 'rgba(255,255,255,0.5)', // Placeholder color
          } }}
              left={<TextInput.Icon icon="account" color={theme.colors.primary} />}
            />

            <TextInput
              // label="Email"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              // theme={{ colors: { primary: theme.colors.primary } }}
              theme={{ colors: { primary: theme.colors.primary , text: 'white', // Main text color
                onSurface: 'white', // Text color when disabled
                surface: 'transparent', // Background color
                placeholder: 'rgba(255,255,255,0.5)', // Placeholder color
          } }}
              left={<TextInput.Icon icon="email" color={theme.colors.primary} />}
            />

            <TextInput
              // label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              mode="outlined"
              style={styles.input}
              // theme={{ colors: { primary: theme.colors.primary } }}
              theme={{ colors: { primary: theme.colors.primary , text: 'white', // Main text color
                onSurface: 'white', // Text color when disabled
                surface: 'transparent', // Background color
                placeholder: 'rgba(255,255,255,0.5)', // Placeholder color
          } }}
              left={<TextInput.Icon icon="lock" color={theme.colors.primary} />}
            />

            <TextInput
              // label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
              mode="outlined"
              style={styles.input}
              // theme={{ colors: { primary: theme.colors.primary } }}
              theme={{ colors: { primary: theme.colors.primary , text: 'white', // Main text color
                onSurface: 'white', // Text color when disabled
                surface: 'transparent', // Background color
                placeholder: 'rgba(255,255,255,0.5)', // Placeholder color
          } }}
              left={<TextInput.Icon icon="lock-check" color={theme.colors.primary} />}
            />

            <Button
              mode="contained"
              onPress={handleRegister}
              style={styles.registerButton}
              loading={isLoading}
            >
              Create Account
            </Button>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.loginLink}>Log in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: { flex: 1 },
  scrollContainer: { flexGrow: 1, padding: 20 },
  headerContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  backButton: { padding: 8 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text },
  formContainer: { width: '100%' },
  input: { marginBottom: 16, backgroundColor: 'rgba(255, 255, 255, 0.05)' },
  registerButton: { marginTop: 8, paddingVertical: 8, backgroundColor: theme.colors.primary },
  loginContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  loginText: { color: 'rgba(255, 255, 255, 0.7)' },
  loginLink: { color: theme.colors.primary, fontWeight: 'bold' },
  logoContainer: { alignItems: "center", marginBottom: 40 },
  appName: { fontSize: 28, fontWeight: "bold", color: theme.colors.text, marginBottom: 8 },
  tagline: { fontSize: 16, color: "rgba(255, 255, 255, 0.7)", textAlign: "center" },
});

export default RegisterScreen;
