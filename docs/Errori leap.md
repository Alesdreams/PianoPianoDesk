PER FAR FUNZIONARE FIREFLY SU GRASSHOPPER DEVI:
## Selezionare NET Framework
 molti plugin di Grasshopper (come Firefly o quelli che usano librerie di Visual Basic per le porte seriali) sono stati scritti anni fa. Funzionano perfettamente con la tecnologia .NET Framework, ma "si rompono" con la nuova tecnologia .NET Core (v8) che Rhino 8 usa di default per essere più veloce.

 La procedura passo-passo
Digita il comando SetDotNetRuntime nella barra dei comandi di Rhino.
Quando compaiono le opzioni, clicca su NETFramework.
Chiudi completamente Rhino.
Riapri Rhino.
Avvia Grasshopper e prova a caricare il componente che ti dava l'errore.

## Controlla di avere installato C++ 2012 Redistributable a 64 bit

## Fai attenzione ai file .gha e .dll e controlla che siano posizionati nel giusto percorso di sistema.



## E SE NON FUNZIONA?
Nel dubbio, spegni e riaccendi il tutto più e più volte. A me ha funzionato.
