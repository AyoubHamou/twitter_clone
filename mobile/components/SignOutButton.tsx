import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSignOut } from "@/hooks/useSignOut";

const SignOutButton = () => {
  const { handleSignOut } = useSignOut();
  return (
    <TouchableOpacity onPress={handleSignOut}>
      <MaterialIcons name="logout" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default SignOutButton;
