"use client";
import React from 'react';
import styles from "./page.module.css";
import { TemaProvider } from "./Ejercicio1";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio3, { LanguageProvider } from './Ejercicio3';
import Ejercicio2, { AuthProvider } from './Ejercicio2';

export default function Home() {
  return (
    <div className={styles.page}>
    <TemaProvider>
      <Ejercicio1 />
    </TemaProvider>
    <AuthProvider>
      <Ejercicio2/>
    </AuthProvider>
    <LanguageProvider>
      <Ejercicio3/>
    </LanguageProvider>
    </div>
  );
}
