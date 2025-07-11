// import React from 'react';
// import { View, StyleSheet, ScrollView } from 'react-native';
// import { Text, Card, Badge, Divider } from 'react-native-paper';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { globalStyles } from '../../styles/globalStyles';
// import { theme } from '../../styles/theme';

// const ResultScreen = () => {
//   // Mock result data
//   const result = {
//     score: 85,
//     verdict: "High Risk",
//     confidence: 92,
//     indicators: [
//       { type: "Suspicious Link", description: "Contains URL with misleading domain", severity: "high" },
//       {
//         type: "Spoofed Sender",
//         description: "Email claims to be from PayPal but sent from different domain",
//         severity: "high",
//       },
//       { type: "Urgency", description: "Creates false sense of urgency to act quickly", severity: "medium" },
//       { type: "Grammar", description: "Contains multiple grammatical errors", severity: "low" },
//     ],
//     details: {
//       links: [
//         {
//           url: "http://paypa1.com/secure",
//           status: "malicious",
//           description: "Typosquatting domain (paypa1 instead of paypal)",
//         },
//         {
//           url: "http://tracking.example.com/r?id=123",
//           status: "suspicious",
//           description: "Redirect link with tracking parameters",
//         },
//       ],
//       sender: {
//         claimed: "service@paypal.com",
//         actual: "noreply@mail-services.net",
//         mismatch: true,
//       },
//     },
//   };

//   const getScoreColor = (score) => {
//     if (score >= 75) return theme.colors.error;
//     if (score >= 40) return theme.colors.warning;
//     return theme.colors.success;
//   };

//   const getSeverityColor = (severity) => {
//     switch (severity) {
//       case 'high':
//         return theme.colors.error;
//       case 'medium':
//         return theme.colors.warning;
//       case 'low':
//         return theme.colors.primary;
//       default:
//         return theme.colors.text;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'malicious':
//         return theme.colors.error;
//       case 'suspicious':
//         return theme.colors.warning;
//       case 'safe':
//         return theme.colors.success;
//       default:
//         return theme.colors.text;
//     }
//   };

//   const getVerdictIcon = (score) => {
//     if (score >= 75) return 'alert-circle';
//     if (score >= 40) return 'alert';
//     return 'check-circle';
//   };

//   return (
//     <SafeAreaView style={globalStyles.container}>
//       <ScrollView style={globalStyles.screenContainer}>
//         <Card style={[globalStyles.card, { marginBottom: 16 }]}>
//           <Card.Content>
//             <View style={styles.resultHeader}>
//               <MaterialCommunityIcons 
//                 name={getVerdictIcon(result.score)} 
//                 size={32} 
//                 color={getScoreColor(result.score)} 
//               />
//               <View style={styles.resultHeaderText}>
//                 <Text style={styles.resultTitle}>
//                   {result.score >= 75
//                     ? 'High Risk - Likely Phishing'
//                     : result.score >= 40
//                       ? 'Medium Risk - Suspicious'
//                       : 'Low Risk - Probably Safe'}
//                 </Text>
//                 <Text style={styles.resultSubtitle}>
//                   {result.confidence}% confidence
//                 </Text>
//               </View>
//             </View>

//             <View style={styles.scoreContainer}>
//               <View style={styles.scoreHeader}>
//                 <Text style={styles.scoreLabel}>Risk Score</Text>
//                 <Text style={[styles.scoreValue, { color: getScoreColor(result.score) }]}>
//                   {result.score}/100
//                 </Text>
//               </View>
//               <View style={styles.progressBarContainer}>
//                 <View 
//                   style={[
//                     styles.progressBar, 
//                     { 
//                       width: `${result.score}%`,
//                       backgroundColor: getScoreColor(result.score)
//                     }
//                   ]} 
//                 />
//               </View>
//             </View>
//           </Card.Content>
//         </Card>

//         <Card style={globalStyles.card}>
//           <Card.Content>
//             <Text style={globalStyles.subtitle}>Phishing Indicators</Text>
            
//             {result.indicators.map((indicator, index) => (
//               <View key={index} style={styles.indicatorItem}>
//                 <Badge style={[styles.severityBadge, { backgroundColor: getSeverityColor(indicator.severity) }]}>
//                   {indicator.severity}
//                 </Badge>
//                 <View style={styles.indicatorContent}>
//                   <Text style={styles.indicatorTitle}>{indicator.type}</Text>
//                   <Text style={styles.indicatorDescription}>{indicator.description}</Text>
//                 </View>
//               </View>
//             ))}
//           </Card.Content>
//         </Card>

//         <Card style={[globalStyles.card, { marginTop: 16 }]}>
//           <Card.Content>
//             <Text style={globalStyles.subtitle}>Suspicious Links</Text>
            
//             {result.details.links.map((link, index) => (
//               <View key={index} style={styles.linkItem}>
//                 <MaterialCommunityIcons 
//                   name="link-variant" 
//                   size={20} 
//                   color={getStatusColor(link.status)} 
//                   style={styles.linkIcon}
//                 />
//                 <View style={styles.linkContent}>
//                   <Text style={styles.linkUrl}>{link.url}</Text>
//                   <Text style={styles.linkDescription}>{link.description}</Text>
//                   <Badge style={[styles.statusBadge, { backgroundColor: getStatusColor(link.status) }]}>
//                     {link.status}
//                   </Badge>
//                 </View>
//               </View>
//             ))}
//           </Card.Content>
//         </Card>

//         <Card style={[globalStyles.card, { marginTop: 16, marginBottom: 24 }]}>
//           <Card.Content>
//             <Text style={globalStyles.subtitle}>Security Recommendations</Text>
            
//             <View style={styles.recommendationItem}>
//               <View style={[styles.recommendationIcon, { backgroundColor: 'rgba(255, 59, 48, 0.1)' }]}>
//                 <MaterialCommunityIcons name="alert-circle" size={20} color={theme.colors.error} />
//               </View>
//               <View style={styles.recommendationContent}>
//                 <Text style={styles.recommendationTitle}>Do Not Click Links</Text>
//                 <Text style={styles.recommendationText}>
//                   Never click on links in suspicious emails. If you need to visit the website, manually type the address in your browser.
//                 </Text>
//               </View>
//             </View>

//             <Divider style={styles.divider} />

//             <View style={styles.recommendationItem}>
//               <View style={[styles.recommendationIcon, { backgroundColor: 'rgba(0, 122, 255, 0.1)' }]}>
//                 <MaterialCommunityIcons name="information" size={20} color={theme.colors.primary} />
//               </View>
//               <View style={styles.recommendationContent}>
//                 <Text style={styles.recommendationTitle}>Verify the Sender</Text>
//                 <Text style={styles.recommendationText}>
//                   Contact the organization directly using their official contact information, not the details provided in the email.
//                 </Text>
//               </View>
//             </View>

//             <Divider style={styles.divider} />

//             <View style={styles.recommendationItem}>
//               <View style={[styles.recommendationIcon, { backgroundColor: 'rgba(52, 199, 89, 0.1)' }]}>
//                 <MaterialCommunityIcons name="shield-check" size={20} color={theme.colors.success} />
//               </View>
//               <View style={styles.recommendationContent}>
//                 <Text style={styles.recommendationTitle}>Report Phishing</Text>
//                 <Text style={styles.recommendationText}>
//                   Forward suspicious emails to your IT department or to the organization being impersonated.
//                 </Text>
//               </View>
//             </View>
//           </Card.Content>
//         </Card>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   resultHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   resultHeaderText: {
//     marginLeft: 12,
//     flex: 1,
//   },
//   resultTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: theme.colors.text,
//   },
//   resultSubtitle: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   scoreContainer: {
//     marginTop: 8,
//   },
//   scoreHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   scoreLabel: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: theme.colors.text,
//   },
//   scoreValue: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   progressBarContainer: {
//     height: 8,
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     borderRadius: 4,
//     overflow: 'hidden',
//   },
//   progressBar: {
//     height: '100%',
//   },
//   indicatorItem: {
//     flexDirection: 'row',
//     marginTop: 12,
//     padding: 12,
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: theme.roundness,
//   },
//   severityBadge: {
//     alignSelf: 'flex-start',
//   },
//   indicatorContent: {
//     marginLeft: 12,
//     flex: 1,
//   },
//   indicatorTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: theme.colors.text,
//     marginBottom: 4,
//   },
//   indicatorDescription: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
//   linkItem: {
//     flexDirection: 'row',
//     marginTop: 12,
//     padding: 12,
//     backgroundColor: 'rgba(255, 255, 255, 0.05)',
//     borderRadius: theme.roundness,
//   },
//   linkIcon: {
//     marginTop: 2,
//   },
//   linkContent: {
//     marginLeft: 12,
//     flex: 1,
//   },
//   linkUrl: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: theme.colors.text,
//     marginBottom: 4,
//   },
//   linkDescription: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//     marginBottom: 8,
//   },
//   statusBadge: {
//     alignSelf: 'flex-start',
//   },
//   divider: {
//     backgroundColor: 'rgba(255, 255, 255, 0.1)',
//     marginVertical: 12,
//   },
//   recommendationItem: {
//     flexDirection: 'row',
//     marginVertical: 8,
//   },
//   recommendationIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   recommendationContent: {
//     marginLeft: 12,
//     flex: 1,
//   },
//   recommendationTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: theme.colors.text,
//     marginBottom: 4,
//   },
//   recommendationText: {
//     fontSize: 14,
//     color: 'rgba(255, 255, 255, 0.7)',
//   },
// });

// export default ResultScreen;



import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Card, Badge, Divider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { globalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

const ResultScreen = ({ route }) => {
  const { result } = route.params;  // Get result from AnalyzeScreen via navigation params

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'high':
        return theme.colors.error;
      case 'medium':
        return theme.colors.warning;
      case 'low':
        return theme.colors.success;
      default:
        return theme.colors.text;
    }
  };

  const getVerdictIcon = (risk) => {
    switch (risk) {
      case 'high':
        return 'alert-circle';
      case 'medium':
        return 'alert';
      case 'low':
        return 'check-circle';
      default:
        return 'help-circle';
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ScrollView style={globalStyles.screenContainer}>
        <Card style={[globalStyles.card, { marginBottom: 16 }]}>
          <Card.Content>
            <View style={styles.resultHeader}>
              <MaterialCommunityIcons name={getVerdictIcon(result.risk)} size={32} color={getRiskColor(result.risk)} />
              <View style={styles.resultHeaderText}>
                <Text style={styles.resultTitle}>
                  {result.risk === 'high'
                    ? 'High Risk - Likely Phishing'
                    : result.risk === 'medium'
                    ? 'Medium Risk - Suspicious'
                    : 'Low Risk - Probably Safe'}
                </Text>
                {/* <Text style={styles.resultSubtitle}>Score: {result.score}</Text> */}
              </View>
            </View>

            <View style={styles.riskContainer}>
              <Text style={[styles.riskLabel, { color: getRiskColor(result.risk), marginTop:-10 }]}>Risk Level</Text>
              <Badge style={[styles.riskBadge, { backgroundColor: getRiskColor(result.risk), paddingBottom:28 }]}>
                {result.risk}
              </Badge>
            </View>
          </Card.Content>
        </Card>

        <Card style={globalStyles.card}>
          <Card.Content>
            <Text style={globalStyles.subtitle}>Phishing Detection Result</Text>
            <Text style={styles.phishingLabel}>Label: {result.label}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.phishingScore}>Confidence Score: {result.score}</Text>
          </Card.Content>
        </Card>

        <Card style={globalStyles.card}>
          <Card.Content>
            <Text style={globalStyles.subtitle}>Security Recommendations</Text>
            <View style={styles.recommendationItem}>
              <View style={[styles.recommendationIcon, { backgroundColor: 'rgba(255, 59, 48, 0.1)' }]}>
                <MaterialCommunityIcons name="alert-circle" size={20} color={theme.colors.error} />
              </View>
              <View style={styles.recommendationContent}>
                <Text style={styles.recommendationTitle}>Do Not Click Links</Text>
                <Text style={styles.recommendationText}>
                  Never click on links in suspicious emails. If you need to visit the website, manually type the address in your browser.
                </Text>
              </View>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.recommendationItem}>
              <View style={[styles.recommendationIcon, { backgroundColor: 'rgba(0, 122, 255, 0.1)' }]}>
                <MaterialCommunityIcons name="information" size={20} color={theme.colors.primary} />
              </View>
              <View style={styles.recommendationContent}>
                <Text style={styles.recommendationTitle}>Verify the Sender</Text>
                <Text style={styles.recommendationText}>
                  Contact the organization directly using their official contact information, not the details provided in the email.
                </Text>
              </View>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.recommendationItem}>
              <View style={[styles.recommendationIcon, { backgroundColor: 'rgba(52, 199, 89, 0.1)' }]}>
                <MaterialCommunityIcons name="shield-check" size={20} color={theme.colors.success} />
              </View>
              <View style={styles.recommendationContent}>
                <Text style={styles.recommendationTitle}>Report Phishing</Text>
                <Text style={styles.recommendationText}>
                  Forward suspicious emails to your IT department or to the organization being impersonated.
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  resultHeaderText: {
    marginLeft: 12,
    flex: 1,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  resultSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  riskContainer: {
    flexDirection: 'row',       // This makes children align horizontally
    alignItems: 'center',       // This vertically centers children
    justifyContent: 'center',   // This horizontally centers children (optional)
    gap: 32,                     // Space between elements (React Native 0.71+)
    marginVertical: 10,         // Add some vertical spacing
  },
  riskLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    paddingTop:12,
  },
  riskBadge: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
  phishingLabel: {
    fontSize: 16,
    color: theme.colors.text,
  },
  phishingScore: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 12,
  },
  recommendationItem: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  recommendationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendationContent: {
    marginLeft: 12,
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
  },
  recommendationText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default ResultScreen;
