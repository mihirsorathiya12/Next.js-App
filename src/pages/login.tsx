"use client";
import { GridLegacy as Grid } from '@mui/material';
import React, { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import { Card, TextField, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const memoizedError = useMemo(() => error, [error]);

  const handleLogin = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");

      if (!storedUser) {
        setError("No user found. Please register first.");
        return;
      }

      if (storedUser.email !== email || storedUser.password !== password) {
        setError("Invalid email or password.");
        return;
      }

      // Login successful
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", storedUser.username);
      router.push("/CommonForm"); // navigate to CommonForm only after login success
    },
    [email, password, router]
  );

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card sx={{ p: 4, width: 400, boxShadow: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            {memoizedError && (
              <Grid item xs={12}>
                <Typography color="error">{memoizedError}</Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button variant="contained" type="submit" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                Don't have an account?{" "}
                <Link href="/register" style={{ color: "#1976d2" }}>
                  Register
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Grid>
  );
}
