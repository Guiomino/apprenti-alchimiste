// CharacterLevelComponent.tsx

import { useUser } from '@/Provider/UserContext';
import styles from "../marketModal.module.scss";
import React from 'react'


const CharacterLevelComponent = () => {

    const { character_level } = useUser();
  return (
    <span className={styles.lvl}>LV.{character_level} ⬆</span>
  )
}

export default CharacterLevelComponent