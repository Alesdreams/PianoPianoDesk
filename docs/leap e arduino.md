# Progetto Rhinoceros/Grasshopper-Square Grid interattiva con Leap e Arduino
Il progetto si compone di una Square Grid interattiva, le cui celle delimitate eseguono movimenti rotatori e d'innalzamento/abbassamento paralleli alla loro base di appartenenza.

Il sensore "Leap Motion" consente di simulare un criterio di rotazione basato sull'altezza del palmo della mano rispetto al sensore;

il sistema Arduino consente alle celle (sviluppate in seguito sotto forma di parallelepipedi) di innalzarsi ed abbassarsi seguendo i valori minimi,massimi ed intermedi, stabiliti mediante la rotazione della manopola di un potenziometro installato su Breadboard.

Da qui seguono i comandi eseguiti su Grasshopper, implementati dal Firefly Plugin per l'utilizzo corretto di LeapMotion e ArduinoUno.

![Diapositiva Rhino 1](immagini\Des1.png "Des1.png")
# Diapositiva 1: Costruzione della Square Grid ed estrazione delle Cells


![Diapositiva Rhino 2](immagini\Des2.png "Des2.png")
# Diapositiva 2: Remap dei valori sviluppati dall'altezza del palmo (secondo il sensore Leap)


![Diapositiva Rhino 3](immagini\Des3.png "Des3.png")
# Diapositiva 3: Impostazione dei dati analogici e digitali di Arduino con annessa attivazione e correlazione al Port Number


![Diapositiva Rhino 4](immagini\Des4.png "Des4.png")
# Diapositiva 4: Definizione delle superfici e personalizzazione basata sul criterio d'altezza dei parallelepipedi

![G1](immagini\g1.jpeg "g1.jpeg")
![G2](immagini\g2.jpeg "g2.jpeg")
# SCHEMA ARDUINOUNO

<figure>
  <video controls width="720">
   <source src="../video/video-leap.mp4" type="video/mp4">
  </video>
  <figcaption>Risultato finale</figcaption>
</figure>

## N.B. Sulle diapositive i dispositivi Leap e Arduino risultano scollegati, pertanto alcuni comandi in post-produzione risultano non reagenti.


##Sulla breadboard si intravede un led che funge da interruttore che si attiva con il passaggio della mano sul Leap. Ogni tanto vuole funzionare, ogni tanto no. Nessuno è perfetto dopotutto!