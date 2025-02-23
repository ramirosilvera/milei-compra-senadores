/* Fuente y fondo degradado */
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden; /* Sin scroll */
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
  color: #333;
}

/* Advertencia de orientación */
#orientation-warning {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #e65100;
  font-size: 2em;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  text-align: center;
  padding: 20px;
}

/* Estilo general para pantallas */
.screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
}

/* Pantalla de Inicio - Diseño dividido */
#startScreen {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.start-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 20px;
}

.start-left, .start-right {
  flex: 1;
  padding: 10px;
}

.start-left h1 {
  font-size: 3em;
  margin-bottom: 10px;
  color: #e65100;
}

.intro {
  font-size: 1.2em;
  line-height: 1.5;
}

.start-right h2 {
  font-size: 2em;
  margin-bottom: 10px;
  color: #0288d1;
}

.start-right p {
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 10px;
}

/* Botones generales */
button {
  padding: 15px 25px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: #0288d1;
  color: #fff;
  transition: background 0.3s ease;
  margin: 10px;
}

button:hover {
  background: #0277bd;
}

/* Panel de Información */
#infoPanel {
  width: 100%;
  max-width: 800px;
  background: #0288d1;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 1em;
}

/* Tablero Circular */
#boardContainer {
  position: relative;
  width: 90vw;
  height: 90vw;
  max-width: 500px;
  max-height: 500px;
  border: 2px solid #0288d1;
  border-radius: 50%;
  margin: 10px auto;
}

/* Cada casilla: tamaño reducido a 70px */
.board-square {
  width: 70px;
  height: 70px;
  position: absolute;
  background: #fff;
  border: 2px solid #0288d1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3px;
  box-sizing: border-box;
  font-size: 0.7em;
  transition: transform 0.3s ease;
}

.board-square:hover {
  transform: scale(1.05);
}

.board-square.start {
  background: #ffeb3b;
  font-weight: bold;
}

.board-square.event {
  background: #e1f5fe;
}

.board-square.tax,
.board-square.penalty {
  background: #ffcdd2;
}

.board-square.property {
  background: #c8e6c9;
}

/* Fichas de Jugador */
.token {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  bottom: 3px;
  right: 3px;
  border: 2px solid #fff;
}

.token.milei {
  background: #e65100;
}

.token.oposicion {
  background: #6a1b9a;
}

/* Controles */
#controls {
  margin-bottom: 20px;
}

#diceResult {
  font-size: 1.5em;
  margin-top: 10px;
}

/* Zona de mensajes llamativos */
#messageArea {
  background: #fff;
  color: #333;
  border: 2px solid #0277bd;
  border-radius: 8px;
  padding: 10px;
  max-width: 800px;
  margin: 10px auto;
  font-size: 1.2em;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
}

/* Pantalla de Fin */
#endScreen {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 800px;
}