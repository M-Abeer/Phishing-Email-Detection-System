
"use client"

import { useState } from "react"
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Alert, TouchableOpacity } from "react-native"
import { TextInput, Button, Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { globalStyles } from "../../styles/globalStyles"
import { theme } from "../../styles/theme"
import AsyncStorage from "@react-native-async-storage/async-storage"

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("https://16d570584bac.ngrok-free.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

      if (data.message === "Login successful") {
        // Store the JWT token in AsyncStorage
        await AsyncStorage.setItem("token", data.token)

        // Simply show success message - no navigation needed
        Alert.alert("Success", "Login successful")

        // The Navigation component will automatically detect the token
        // and switch to the appropriate stack
      } else {
        Alert.alert("Login Failed", data.message || "Please try again")
      }
    } catch (error) {
      console.error("Login error:", error)
      Alert.alert("Error", "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.keyboardAvoidingView}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoContainer}>
            <MaterialCommunityIcons name="shield-check" size={60} color={theme.colors.primary} />
            <Text style={styles.appName}>PhishGuard</Text>
            <Text style={styles.tagline}>Protect yourself from phishing attacks</Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              label=""
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              // theme={{ colors: { primary: theme.colors.primary  } }}
              theme={{ colors: { primary: theme.colors.primary , text: 'white', // Main text color
                                onSurface: 'white', // Text color when disabled
                                surface: 'transparent', // Background color
                                placeholder: 'rgba(255,255,255,0.5)', // Placeholder color
                          } }}
              left={<TextInput.Icon icon="email" color={theme.colors.primary} />}
            />

            <TextInput
              label=""
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
              mode="outlined"
              style={styles.input}
              // theme={{ colors: { primary: theme.colors.primary } }}
              theme={{ colors: { primary: theme.colors.primary , text: 'white', // Main text color
                                onSurface: 'white', // Text color when disabled
                                surface: 'transparent', // Background color
                                placeholder: 'rgba(255,255,255,0.5)', // Placeholder color
                          } }}
              left={<TextInput.Icon icon="lock" color={theme.colors.primary} />}
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? "eye" : "eye-off"}
                  color={theme.colors.primary}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
              }
            />

            <Button mode="contained" onPress={handleLogin} style={styles.loginButton} loading={isLoading}>
              Login
            </Button>

            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.registerLink}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  keyboardAvoidingView: { flex: 1 },
  scrollContainer: { flexGrow: 1, justifyContent: "center", padding: 20 },
  logoContainer: { alignItems: "center", marginBottom: 40 },
  appName: { fontSize: 28, fontWeight: "bold", color: theme.colors.text, marginBottom: 8 },
  tagline: { fontSize: 16, color: "rgba(255, 255, 255, 0.7)", textAlign: "center" },
  formContainer: { width: "100%" },
  input: { marginBottom: 16, backgroundColor: "rgba(255, 255, 255, 0.05)" },
  loginButton: { marginTop: 8, paddingVertical: 8, backgroundColor: theme.colors.primary, fontWeight: 'bold' },
  registerContainer: { flexDirection: "row", justifyContent: "center", marginTop: 24 },
  registerText: { color: "rgba(255, 255, 255, 0.7)" },
  registerLink: { color: theme.colors.primary, fontWeight: "bold" },
})

export default LoginScreen
