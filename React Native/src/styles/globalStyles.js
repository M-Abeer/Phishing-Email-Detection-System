import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  screenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: theme.colors.text,
  },
  textMuted: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  card: {
    backgroundColor: theme.colors.card,
    color:'white',
    borderRadius: theme.roundness,
    padding: 16,
    marginBottom: 16,
  },
});