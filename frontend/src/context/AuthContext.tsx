import { createContext, useContext, ReactNode } from "react";
import { db } from "../db/index";
import { insertUserZ } from "../db/schema/users";
import { userT } from "../db/schema/users";

interface AuthContextType {
  handleLogin: (username: string, password: string) => void;
  handleRegister: (username: string, password: string, email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const handleLogin = (username: string, password: string) => {
    console.log("Logged in with", username, password);
  };

  // TO-DO: Add checks for correct user registration
  const handleRegister = async (
    username: string,
    password: string,
    email: string
  ) => {
    try {
      const newUser: userT = {
        id: 0,
        email: email,
        username: username,
        role: "guest",
      };
      insertUserZ.parse(newUser);
      console.log("Registered with", username, password, email);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogin, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
