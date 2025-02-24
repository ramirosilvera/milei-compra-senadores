// BootScene: carga de assets.
class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }
  
  preload() {
    // Imágenes
    this.load.image('menuBg', 'assets/images/menu_bg.jpg');
    this.load.image('congressBg', 'assets/images/congress_bg.jpg');
    this.load.image('milei', 'assets/images/milei.png');
    this.load.image('voteIcon', 'assets/images/vote_icon.png');
    // (opcional) iconos para botones de decisión
    this.load.image('boicotIcon', 'assets/images/boicot_icon.png');
    this.load.image('debateIcon', 'assets/images/debate_icon.png');
    this.load.image('successBg', 'assets/images/success_bg.jpg');
    this.load.image('failureBg', 'assets/images/failure_bg.jpg');
    
    // Sonidos
    this.load.audio('bgMusic', 'assets/sounds/background.mp3');
    this.load.audio('clickSound', 'assets/sounds/click.wav');
    this.load.audio('successSound', 'assets/sounds/success.wav');
    this.load.audio('failureSound', 'assets/sounds/failure.wav');
    this.load.audio('debateAmbience', 'assets/sounds/debate.mp3');
    this.load.audio('boicotSound', 'assets/sounds/boicot.wav');
  }
  
  create() {
    this.scene.start('MenuScene');
  }
}

// MenuScene: Menú principal con fondo, título y botón de inicio.
class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }
  
  create() {
    // Fondo del menú
    this.add.image(400, 300, 'menuBg').setDisplaySize(800,600);
    
    // Título del juego
    let title = this.add.text(400, 150, 'Boicot Cripto: El Escándalo de Milei', { fontSize: '32px', fill: '#fff' });
    title.setOrigin(0.5);
    
    // Botón "Iniciar Juego"
    let startButton = this.add.text(400, 300, 'Iniciar Juego', { fontSize: '28px', fill: '#0f0', backgroundColor: '#000', padding: {x: 10, y: 5} })
      .setInteractive({ useHandCursor: true })
      .on('pointerover', () => startButton.setStyle({ fill: '#ff0' }))
      .on('pointerout', () => startButton.setStyle({ fill: '#0f0' }))
      .on('pointerdown', () => {
          this.sound.play('clickSound');
          this.scene.start('StoryScene');
      });
    startButton.setOrigin(0.5);
    
    // Música de fondo en bucle
    let music = this.sound.add('bgMusic', { loop: true, volume: 0.5 });
    if (!music.isPlaying) {
      music.play();
    }
  }
}

// StoryScene: Narrativa que presenta el contexto.
class StoryScene extends Phaser.Scene {
  constructor() {
    super('StoryScene');
  }
  
  create() {
    // Fondo con imagen de congreso
    this.add.image(400, 300, 'congressBg').setDisplaySize(800,600);
    
    // Texto narrativo
    const storyText = "Milei se ve envuelto en un escándalo cripto tras la polémica promoción del token Libra. Con la comisión investigadora a punto de votar en el Congreso, decide boicotear la votación para evitar la investigación. ¿Será su jugada maestra o desencadenará mayores complicaciones?";
    this.add.text(50, 50, storyText, { fontSize: '20px', fill: '#fff', wordWrap: { width: 700 } });
    
    // Botón para continuar
    let continueButton = this.add.text(400, 520, 'Continuar', { fontSize: '26px', fill: '#0f0', backgroundColor: '#000', padding: {x: 10, y: 5} })
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
          this.sound.play('clickSound');
          this.scene.start('DecisionScene');
      });
    continueButton.setOrigin(0.5);
  }
}

// DecisionScene: Elección de estrategia de Milei.
class DecisionScene extends Phaser.Scene {
  constructor() {
    super('DecisionScene');
  }
  
  create() {
    // Fondo sencillo para resaltar las opciones
    this.cameras.main.setBackgroundColor('#333');
    
    this.add.text(400, 80, 'Elige la estrategia de Milei:', { fontSize: '28px', fill: '#fff' }).setOrigin(0.5);
    
    // Opción 1: Boicot Total
    let option1 = this.add.text(400, 180, '1. Boicot Total', { fontSize: '26px', fill: '#0f0', backgroundColor: '#000', padding: {x: 10, y: 5} })
      .setInteractive({ useHandCursor: true })
      .on('pointerover', () => option1.setStyle({ fill: '#ff0' }))
      .on('pointerout', () => option1.setStyle({ fill: '#0f0' }))
      .on('pointerdown', () => {
          this.sound.play('clickSound');
          this.registry.set('strategy', 'boicot');
          this.scene.start('MiniGameScene');
      });
    option1.setOrigin(0.5);
    
    // Opción 2: Influencia Sutil
    let option2 = this.add.text(400, 260, '2. Influencia Sutil', { fontSize: '26px', fill: '#0f0', backgroundColor: '#000', padding: {x: 10, y: 5} })
      .setInteractive({ useHandCursor: true })
      .on('pointerover', () => option2.setStyle({ fill: '#ff0' }))
      .on('pointerout', () => option2.setStyle({ fill: '#0f0' }))
      .on('pointerdown', () => {
          this.sound.play('clickSound');
          this.registry.set('strategy', 'sutil');
          this.scene.start('MiniGameScene');
      });
    option2.setOrigin(0.5);
  }
}

// MiniGameScene: Mini juego según la estrategia elegida.
class MiniGameScene extends Phaser.Scene {
  constructor() {
    super('MiniGameScene');
  }
  
  create() {
    const strategy = this.registry.get('strategy');
    let instruction = '';
    
    // Configuración del mini juego según estrategia
    if (strategy === 'boicot') {
      instruction = '¡Haz clic en los íconos de voto para bloquear la votación!';
    } else {
      instruction = '¡Haz clic en los íconos correctos para influir en el debate y evita distracciones!';
    }
    
    this.add.text(400, 30, instruction, { fontSize: '22px', fill: '#fff' }).setOrigin(0.5);
    
    // Puntaje y feedback visual
    this.score = 0;
    this.scoreText = this.add.text(20, 20, 'Puntos: 0', { fontSize: '24px', fill: '#fff' });
    
    // Grupo de íconos para el mini juego
    this.iconsGroup = this.add.group();
    
    // Temporizador de 10 segundos para el mini juego
    this.time.delayedCall(10000, () => {
      this.scene.start('EndScene', { score: this.score, strategy: strategy });
    });
    
    // Llama a la función para crear íconos en intervalos
    this.time.addEvent({
      delay: 800,
      callback: () => { this.spawnIcon(strategy); },
      loop: true
    });
  }
  
  spawnIcon(strategy) {
    let iconKey = strategy === 'boicot' ? 'voteIcon' : 'debateIcon';
    // Posición aleatoria
    let x = Phaser.Math.Between(50, 750);
    let y = Phaser.Math.Between(80, 550);
    let icon = this.add.sprite(x, y, iconKey).setInteractive();
    
    // Cuando se hace clic en el ícono
    icon.on('pointerdown', () => {
      this.sound.play('clickSound', { volume: 0.7 });
      // Para el modo "influencia sutil", se pueden penalizar clics en íconos erróneos (aquí se asume que solo aparecen los correctos)
      this.score++;
      this.scoreText.setText('Puntos: ' + this.score);
      icon.destroy();
    });
    
    // Animación simple: rotación o desvanecimiento
    this.tweens.add({
      targets: icon,
      angle: 360,
      duration: 1500,
      ease: 'Linear'
    });
    
    // Eliminar el icono tras 1.5 segundos para evitar saturación
    this.time.delayedCall(1500, () => {
      if (icon && icon.active) { icon.destroy(); }
    });
  }
}

// EndScene: Resultado final basado en el desempeño.
class EndScene extends Phaser.Scene {
  constructor() {
    super('EndScene');
  }
  
  init(data) {
    this.finalScore = data.score;
    this.strategy = data.strategy;
  }
  
  create() {
    // Selección del fondo según resultado (éxito o fracaso)
    let bgImage = (this.finalScore >= 20) ? 'successBg' : 'failureBg';
    this.add.image(400, 300, bgImage).setDisplaySize(800,600);
    
    let resultText = '';
    if (this.strategy === 'boicot') {
      resultText = (this.finalScore >= 20) ? 
        '¡Éxito total! El boicot de Milei detuvo la votación, generando euforia entre sus seguidores.' : 
        'El boicot falló. La votación siguió y las críticas se intensificaron.';
    } else {
      resultText = (this.finalScore >= 20) ? 
        'La influencia sutil alteró el debate. Aunque el resultado fue ambiguo, Milei se consolidó como estratega.' : 
        'La estrategia de influencia fracasó y el debate se volvió caótico.';
    }
    
    this.add.text(400, 280, resultText, { fontSize: '24px', fill: '#fff', wordWrap: { width: 700 } }).setOrigin(0.5);
    
    // Botón para reiniciar el juego
    let restartButton = this.add.text(400, 500, 'Reiniciar Juego', { fontSize: '26px', fill: '#0f0', backgroundColor: '#000', padding: {x: 10, y: 5} })
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
          this.sound.play('clickSound');
          this.scene.start('MenuScene');
      });
    restartButton.setOrigin(0.5);
    
    // Reproducir sonido acorde al resultado
    if (this.finalScore >= 20) {
      this.sound.play('successSound');
    } else {
      this.sound.play('failureSound');
    }
  }
}

// Configuración de Phaser y arranque del juego.
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  scene: [BootScene, MenuScene, StoryScene, DecisionScene, MiniGameScene, EndScene],
  audio: {
    disableWebAudio: false
  }
};

const game = new Phaser.Game(config);
