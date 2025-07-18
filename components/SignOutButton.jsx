import { styles } from '@/assets/styles/home.styles'
import { useClerk } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { Text, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from '@/constants/colors';
import { useRouter } from 'expo-router'


export const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();
  
  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { 
        text: "Logout", 
        style: "destructive", 
        onPress: async () => {
          await signOut();
          router.replace('/(auth)/sign-in')
        } 
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={COLORS.textColor} />
    </TouchableOpacity>
  )
}