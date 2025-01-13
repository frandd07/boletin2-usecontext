"use client";
import React from 'react';
import styles from "./page.module.css";
import { TemaProvider } from "./Ejercicio1";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio3, { LanguageProvider } from './Ejercicio3';
import Ejercicio2, { AuthProvider } from './Ejercicio2';
import Ejercicio4, {CartProvider} from './Ejercicio4';
import Ejercicio5, {PermissionsProvider} from './Ejercicio5';
import Ejercicio6 , {NotificationProvider} from './Ejercicio6';
import Ejercicio7, {SettingsProvider} from './Ejercicio7';
import Ejercicio8 from './Ejercicio8';


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

    <CartProvider> 
        <Ejercicio4/> 
    </CartProvider>

    <PermissionsProvider>
      <Ejercicio5/>
    </PermissionsProvider>

    <NotificationProvider>
      <Ejercicio6/>
    </NotificationProvider>


    <Ejercicio7/>
    <Ejercicio8/>
  
    

    
    </div>
  );
}
