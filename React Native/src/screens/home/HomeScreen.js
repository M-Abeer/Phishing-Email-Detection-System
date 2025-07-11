// import React from 'react';
// import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
// import { Text, Card, Button } from 'react-native-paper';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { globalStyles } from '../../styles/globalStyles';
// import { theme } from '../../styles/theme';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <SafeAreaView style={globalStyles.container}>
//       <ScrollView style={globalStyles.screenContainer}>
//         <View style={styles.heroSection}>
//           <Text style={styles.heroTitle}>Protect Yourself From Phishing Attacks</Text>
//           <Text style={styles.heroSubtitle}>
//             Our advanced AI system analyzes emails to detect phishing attempts and keep you safe from cyber threats.
//           </Text>
          
//           <View style={styles.heroImageContainer}>
//             <View style={styles.heroImageGlow} />
//             <View style={styles.heroImage}>
//               <MaterialCommunityIcons name="shield-check" size={80} color={theme.colors.primary} />
//             </View>
//           </View>
          
//           <Button 
//             mode="contained" 
//             onPress={() => navigation.navigate('Analyze')}
//             style={styles.analyzeButton}
//             icon="magnify"
//           >
//             Analyze Email
//           </Button>
//         </View>

//         <Text style={[globalStyles.subtitle, styles.sectionTitle]}>How It Works</Text>
        
//         <View style={styles.featuresContainer}>
//           <Card style={styles.featureCard}>
//             <Card.Content style={styles.featureContent}>
//               <MaterialCommunityIcons name="email" size={40} color={theme.colors.primary} style={styles.featureIcon} />
//               <Text style={styles.featureTitle}>Submit Email</Text>
//               <Text style={styles.featureDescription}>
//                 Paste the suspicious email content into our analyzer
//               </Text>
//             </Card.Content>
//           </Card>

//           <Card style={styles.featureCard}>
//             <Card.Content style={styles.featureContent}>
//               <MaterialCommunityIcons name="alert-circle" size={40} color="#ffb142" style={styles.featureIcon} />
//               <Text style={styles.featureTitle}>Analyze Content</Text>
//               <Text style={styles.featureDescription}>
//                 Our AI scans for suspicious links, spoofed domains, and social engineering tactics
//               </Text>
//             </Card.Content>
//           </Card>

//           <Card style={styles.featureCard}>
//             <Card.Content style={styles.featureContent}>
//               <MaterialCommunityIcons name="check-circle" size={40} color={theme.colors.success} style={styles.featureIcon} />
//               <Text style={styles.featureTitle}>Get Results</Text>
//               <Text style={styles.featureDescription}>
//                 Receive a detailed report with risk assessment and security recommendations
//               </Text>
//             </Card.Content>
//           </Card>
//         </View>

//         <Card style={styles.statsCard}>
//           <Card.Content>
//             <Text style={styles.statsTitle}>PhishGuard Protection</Text>
            
//             <View style={styles.statsRow}>
//               <View style={styles.statItem}>
//                 <Text style={styles.statNumber}>10k+</Text>
//                 <Text style={styles.statLabel}>Emails Analyzed</Text>
//               </View>
              
//               <View style={styles.statDivider} />
              
//               <View style={styles.statItem}>
//                 <Text style={styles.statNumber}>95%</Text>
//                 <Text style={styles.statLabel}>Detection Rate</Text>
//               </View>
              
//               <View style={styles.statDivider} />
              
//               <View style={styles.statItem}>
//                 <Text style={styles.statNumber}>5k+</Text>
//                 <Text style={styles.statLabel}>Threats Blocked</Text>
//               </View>
//             </View>
//           </Card.Content>
//         </Card>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   heroSection: {
//     alignItems: 'center',
//     marginBottom: 32,
//   },
//   heroTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: theme.colors.text,
//     textAlign: 'center',
//     marginBottom: 12,
//   },
//   heroSubtitle: {
//     fontSize: 16,
//     color: 'rgba(255, 255, 255, 0.7)',
//     textAlign: 'center',
//     marginBottom: 24,
//     paddingHorizontal: 20,
//   },
//   heroImageContainer: {
//     position: 'relative',
//     width: 160,
//     height: 160,
//     marginBottom: 24,
//   },
//   heroImageGlow: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     borderRadius: 80,
//     backgroundColor: 'rgba(0, 184, 148, 0.2)',
//     opacity: 0.8,
//   },
//   heroImage: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 80,
//     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//     borderWidth: 1,
//     borderColor: 'rgba(255, 255, 255, 0.1)',
//   },
//   analyzeButton: {
//     backgroundColor: theme.colors.primary,
//     paddingHorizontal: 16,
//   },
//   sectionTitle: {
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   featuresContainer: {
//     marginBottom: 32,
//   },
//   featureCard: {
//     backgroundColor: theme.colors.card,
//     marginBottom: 16,
//   },
//   featureContent: {
//     alignItems: 'center',
//     padding: 8,
//   },
//   featureIcon: {
//     marginBottom: 12,
//   },
//   featureTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: theme.colors.text,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   featureDescription: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//     textAlign: 'center',
//   },
//   statsCard: {
//     backgroundColor: theme.colors.card,
//     marginBottom: 32,
//   },
//   statsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: theme.colors.text,
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   statsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statItem: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: theme.colors.primary,
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 12,
//     color: 'rgba(255, 255, 255, 0.7)',
//     textAlign: 'center',
//   },
//   statDivider: {
//     width: 1,
//     height: 40,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//   },
// });

// export default HomeScreen;



import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Alert, Button as RNButton } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in when the screen loads
  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem("token") // Remove the token from AsyncStorage
      setIsLoggedIn(false) // Update the state to reflect the logged-out status

      // Show a confirmation alert
      Alert.alert("Success", "You have been logged out", [
        {
          text: "OK",
          onPress: () => {
            // The Navigation component will handle the switch back to AuthStack
            // based on the absence of the token
          },
        },
      ])
    } catch (error) {
      console.error("Error logging out:", error)
      Alert.alert("Error", "Something went wrong. Please try again.")
    }
  }


  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={globalStyles.screenContainer}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Protect Yourself From Phishing Attacks</Text>
          <Text style={styles.heroSubtitle}>
            Our advanced AI system analyzes emails to detect phishing attempts and keep you safe from cyber threats.
          </Text>

          <View style={styles.heroImageContainer}>
            <View style={styles.heroImageGlow} />
            <View style={styles.heroImage}>
              <MaterialCommunityIcons name="shield-check" size={80} color={theme.colors.primary} />
            </View>
          </View>

          <RNButton 
            title="Analyze Email"
            onPress={() => navigation.navigate('Analyze')}
            color={theme.colors.primary}
          />

          {/* Log Out Button - Only visible when logged in */}
          {/* {isLoggedIn && (
            <RNButton 
              title="Log Out"
              onPress={handleLogOut}
              color={theme.colors.secondary}
            />
          )} */}
          {/* {isLoggedIn && (
             <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
              <Text style={styles.logoutButtonText}>Log Out</Text>
              </TouchableOpacity>
)} */}

        </View>

        <Text style={[globalStyles.subtitle, styles.sectionTitle]}>How It Works</Text>

        <View style={styles.featuresContainer}>
          <Card style={styles.featureCard}>
            <Card.Content style={styles.featureContent}>
              <MaterialCommunityIcons name="email" size={40} color={theme.colors.primary} style={styles.featureIcon} />
              <Text style={styles.featureTitle}>Submit Email</Text>
              <Text style={styles.featureDescription}>
                Paste the suspicious email content into our analyzer
              </Text>
            </Card.Content>
          </Card>

          <Card style={styles.featureCard}>
            <Card.Content style={styles.featureContent}>
              <MaterialCommunityIcons name="alert-circle" size={40} color="#ffb142" style={styles.featureIcon} />
              <Text style={styles.featureTitle}>Analyze Content</Text>
              <Text style={styles.featureDescription}>
                Our AI scans for suspicious links, spoofed domains, and social engineering tactics
              </Text>
            </Card.Content>
          </Card>

          <Card style={styles.featureCard}>
            <Card.Content style={styles.featureContent}>
              <MaterialCommunityIcons name="check-circle" size={40} color={theme.colors.success} style={styles.featureIcon} />
              <Text style={styles.featureTitle}>Get Results</Text>
              <Text style={styles.featureDescription}>
                Receive a detailed report with risk assessment and security recommendations
              </Text>
            </Card.Content>
          </Card>
        </View>

        <Card style={styles.statsCard}>
          <Card.Content>
            <Text style={styles.statsTitle}>PhishGuard Protection</Text>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>10k+</Text>
                <Text style={styles.statLabel}>Emails Analyzed</Text>
              </View>

              <View style={styles.statDivider} />

              <View style={styles.statItem}>
                <Text style={styles.statNumber}>95%</Text>
                <Text style={styles.statLabel}>Detection Rate</Text>
              </View>

              <View style={styles.statDivider} />

              <View style={styles.statItem}>
                <Text style={styles.statNumber}>5k+</Text>
                <Text style={styles.statLabel}>Threats Blocked</Text>
              </View>
              
            </View>
            
          </Card.Content>
          
          
        </Card>
        {isLoggedIn && (
  <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
    <Text style={styles.logoutButtonText}>Log Out</Text>
  </TouchableOpacity>
)}
       
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  heroImageContainer: {
    position: 'relative',
    width: 160,
    height: 160,
    marginBottom: 24,
  },
  heroImageGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 80,
    backgroundColor: 'rgba(0, 184, 148, 0.2)',
    opacity: 0.8,
  },
  heroImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  analyzeButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  featuresContainer: {
    marginBottom: 32,
  },
  featureCard: {
    backgroundColor: theme.colors.card,
    marginBottom: 16,
  },
  featureContent: {
    alignItems: 'center',
    padding: 8,
  },
  featureIcon: {
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
  statsCard: {
    backgroundColor: theme.colors.card,
    marginBottom: 32,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  logoutButton: {
    backgroundColor: theme.colors.secondary,  // Color for the button
    borderRadius: 30,  // Rounded corners
    paddingVertical: 14,  // Increased padding for better tap area
    paddingHorizontal: 40,  // Horizontal padding to make it wider
    // marginHorizontal: 80,
    marginBottom: 20,  // Bottom margin to keep it away from the screen's edge
    alignItems: 'center',  // Center text
    justifyContent: 'center',  // Vertically center text
    elevation: 5,  // Add shadow for better visibility on iOS/Android
  },
  logoutButtonText: {
    color: '#fff',  // White text to contrast with the button background
    fontWeight: 'bold',  // Make the text bold
    fontSize: 16,  // Larger font size for better readability
  },

});

export default HomeScreen;
