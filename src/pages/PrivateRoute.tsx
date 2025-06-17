// components/PrivateRoute.tsx
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) return null; // Optional: loading spinner

  return <>{children}</>;
};

export default PrivateRoute;
