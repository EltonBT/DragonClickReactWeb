import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import { Container, Card, CardContent } from '@mui/material'
import { apiBaseURL } from '@/requests/apiAxios'

export default function Home() {
  const [player, setPlayer] = React.useState({ name: "Nome do jogador", score: 0, media: 0, time: 0 })

  React.useEffect(() => {
      apiBaseURL.get('players/1/.json').then(
        response => {
          setPlayer(response.data)
        }
      ).catch(e => {})
  }, [])
  
  return (
    <>
      <Container fixed className={styles.content}>
        <div className={styles.header}>
          <img src={'logo.png'} width={200} height={140} />
        </div>

        <Card className={styles.cardPlayer}>
            <CardContent style={{width: '100%'}}>
              <div className={styles.playerData}>
                <div style={{fontSize: 18, textAlign: 'center', fontWeight: 'bold'}}>Melhor jogador:</div>
                <div style={{fontSize: 38, textAlign: 'center'}}>{player.name}</div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                  <div style={{fontSize: 18}}>Pontuação: {player.score}</div>
                  <div style={{fontSize: 18, marginRight: 20, marginLeft: 20}}>Média: {player.media}</div>
                  <div style={{fontSize: 18}}>Tempo: {player.time}</div>
                </div>
      
              </div>
            </CardContent>
            
          </Card>
      </Container>

      <div className={styles.footer}>
        <p>© Elton Ryan Bastos Tavares | 2023</p>
      </div>
    </>
  )
}
