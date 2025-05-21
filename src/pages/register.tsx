
"use client";
import { GridLegacy as Grid } from '@mui/material';
import Link from 'next/link';

import React, { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  
  Card,
  TextField,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
;

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const memoizedError = useMemo(() => error, [error]);

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUpperCase && hasLowerCase && hasSpecialChar;
  };

  const handleRegister = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!username || !email || !password || !confirmPassword) {
        setError("All fields are required.");
        return;
      }

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      if (!validatePassword(password)) {
        setError(
          "Password must contain uppercase, lowercase, and a special character."
        );
        return;
      }

      const user = { username, email, password };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", "false");

      alert("Registration successful. Please log in.");
      router.push("/login");
    },
    [username, email, password, confirmPassword, router]
  );

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      className="register-container"
    >
      <Card sx={{ p: 4, width: 400, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleRegister}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} position="relative">
              <TextField
                label="Password"
                type={passwordVisible ? "text" : "password"}
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <IconButton
                onClick={() => setPasswordVisible(!passwordVisible)}
                sx={{ position: "absolute", top: 30, right: 10 }}
              >
                {passwordVisible}
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
            {memoizedError && (
              <Grid item xs={12}>
                <Typography color="error">{memoizedError}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Register
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                Already have an account?{" "}
                <Link href="/login" style={{ color: "#1976d2" }}>
                  Login
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Grid>
  );
}
