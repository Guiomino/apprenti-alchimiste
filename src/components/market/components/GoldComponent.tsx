"use client"

import React from 'react'
import styles from "../marketModal.module.scss";
import { useUser } from '@/Provider/UserContext';

const GoldComponent = () => {

    const { gold } = useUser();

    return (
        <span className={styles.gold}>🪙 { gold }</span>
    )
}

export default GoldComponent