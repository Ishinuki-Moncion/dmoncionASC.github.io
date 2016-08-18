// function playMyAudio(sound){ //this is the sound perameter under playmyaudio
// // document.getElementById(sound).play();
// soundelement = new Audio(sound+'.mp3'); // this is what generates another audio so the button can be spammed
// soundelement.play();// this play the audio when the button is pressed  
// } 
// alert("this javascript is linked");
// console.log("this javascript is linked");

var keystrokes = [[], [], [], [], []] // This creates the list of keystrokes and records them.
var listnum
var alley
var trap
var vocals
var carlos

function print(obj){ // I just did this because I don't like writing "console.log()" everytime I want something to print.
    console.log(obj)
}

function playMyAudio(sound){ // This is the sound parameter under playMyAudio.
    soundelement = new Audio(sound+'.wav'); // This is what generates another audio so the button can be spammed.
    soundelement.play();// This play the audio when the button is pressed.  
}

function setup(){
    createCanvas(1000, 1000) // Click in the white box on startup
    listnum = 0               // Sets the value for i
    alley = false
    trap = false
    vocals = false
    carlos = false
}

function draw(){
    background(255)

    // ----- Beginning of Key Mapping Code -----

        if (keyWentDown("1")){  // This piece of code puts you in ASC Soundboard.
            listnum = 0
            alley = true
            trap = false
            vocals = false
            carlos = false
            print("Currently Using the ASC Soundboard")
        }

        if (keyWentDown("2")){  // This piece of code puts you in Trap Soundboard.
            listnum = 1
            alley = false
            trap = true
            vocals = false
            carlos = false
            print("Currently Using the Trap Soundboard")
        }

        if (keyWentDown("3")){  // This piece of code puts you in Vocals Soundboard.
            listnum = 2
            alley = false
            trap = false
            vocals = true
            carlos = false
            print("Currently Using the Vocal Soundboard")
        }

        if (keyWentDown("4")){  // This piece of code puts you in carlos Soundboard.
            listnum = 3
            alley = true
            trap = false
            vocals = false
            carlos = true
            print("Currently Using the carlos Soundboard")
        }

        if (keyWentDown("0")){ // This piece of code just prints the keystrokes in the currennt Soundboard.
            print("This is Save Slot" + (listnum + 1))
            print(keystrokes[listnum])
        }

        if (keyWentDown(219)){ // This piece of code clears the keystrokes in the current Soundboard.
            keystrokes[listnum] = []

            if (alley){
              print("Cleared your keystrokes in the ASC Soundboard.")  
            }

            if (trap){
              print("Cleared your keystrokes in the Trap Soundboard.")  
            }

            if (vocals){
              print("Cleared your keystrokes in the Vocals Soundboard.")  
            }

            if (carlos){
              print("Cleared your keystrokes in the carlos Soundboard.")  
            }            
        }

        if (keyWentDown(221)){ // This piece of code deletes the last keystrokes in the current Soundboard.
            keystrokes[listnum].pop()
            

            if (alley){
              print("Cleared the last keystroke in the ASC Soundboard.")  
            }

            if (trap){
              print("Cleared the last keystroke in the Trap Soundboard.")  
            }

            if (vocals){
              print("Cleared the last keystroke in the Vocals Soundboard.")  
            }

            if (carlos){
              print("Cleared the last keystroke in the carlos Soundboard.")  
            }
        }

    // ----- End of Key Mapping Code -----

    // ----- Beginning of Soundboard Code -----

        // ----- Beginning of Alley Soundboard -----

        if (alley){ // This piece of code is used to toggle the keys to the Alley Soundboard.

            print("Currently Using the ASC and Piano Soundboard")

            if (keyIsDown(16)){
                if (keyWentDown("a")){
                    keystrokes[listnum].push("a#")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low C Sharp")
                }

                if (keyWentDown("s")){            
                    keystrokes[listnum].push("s#")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low D Sharp")
                }

                if (keyWentDown("f")){            
                    keystrokes[listnum].push("f#")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low F Sharp")
                }

                if (keyWentDown("g")){            
                    keystrokes[listnum].push("g#")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low G Sharp")
                }

                if (keyWentDown("h")){            
                    keystrokes[listnum].push("h#")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low A Sharp")
                }

                if (keyWentDown("z")){            
                    keystrokes[listnum].push("z#")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle C Sharp")
                }

                if (keyWentDown("x")){            
                    keystrokes[listnum].push("x#")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle D Sharp")
                }

                if (keyWentDown("v")){            
                    keystrokes[listnum].push("v#")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle F Sharp")
                }

                if (keyWentDown("b")){            
                    keystrokes[listnum].push("b#")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle G Sharp")
                }

                if (keyWentDown("n")){            
                    keystrokes[listnum].push("n#")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle A Sharp")
                }

                if (keyWentDown("k")){            
                    keystrokes[listnum].push("k#")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High C Sharp")
                }

                if (keyWentDown("l")){            
                    keystrokes[listnum].push("l#")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High D Sharp")
                }

                if (keyWentDown(222)){            
                    keystrokes[listnum].push("'#")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High F Sharp")
                }

                if (keyWentDown(188)){            
                    keystrokes[listnum].push(",#")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High G Sharp")
                }

                if (keyWentDown(190)){            
                    keystrokes[listnum].push(".#")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High A Sharp")
                } // This piece of code is used to make sharps by holding down Shift and the key you want to be sharped.
            } 

            else{
                if (keyWentDown("q")){
                    keystrokes[listnum].push("q")
                    print(keystrokes[listnum])
                    playMyAudio("ASC/Boolean")
                }

                if (keyWentDown("w")){            
                    keystrokes[listnum].push("w")
                    print(keystrokes[listnum])
                }

                if (keyWentDown("e")){            
                    keystrokes[listnum].push("e")
                    print(keystrokes[listnum])
                }

                if (keyWentDown("r")){            
                    keystrokes[listnum].push("r")
                    print(keystrokes[listnum])
                }

                if (keyWentDown("t")){            
                    keystrokes[listnum].push("t")
                    print(keystrokes[listnum])
                }

                if (keyWentDown("y")){            
                    keystrokes[listnum].push("y")
                    print(keystrokes[listnum])
                }

                if (keyWentDown("u")){            
                    keystrokes[listnum].push("u")
                    print(keystrokes[listnum])
                }

                if (keyWentDown("i")){            
                    keystrokes[listnum].push("i")
                    print(keystrokes[listnum])
                }

                if (keyWentDown("o")){            
                    keystrokes[listnum].push("o")
                    print(keystrokes[listnum])
                }

                if (keyWentDown("p")){            
                    keystrokes[listnum].push("p")
                    print(keystrokes[listnum])
                }

                if (keyWentDown("a")){            
                    keystrokes[listnum].push("a")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low C")
                }

                if (keyWentDown("s")){            
                    keystrokes[listnum].push("s")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low D")
                }

                if (keyWentDown("d")){            
                    keystrokes[listnum].push("d")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low E")
                }

                if (keyWentDown("f")){            
                    keystrokes[listnum].push("f")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low F")
                }

                if (keyWentDown("g")){            
                    keystrokes[listnum].push("g")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low G")
                }

                if (keyWentDown("h")){            
                    keystrokes[listnum].push("h")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low A")
                }

                if (keyWentDown("j")){            
                    keystrokes[listnum].push("j")
                    print(keystrokes[listnum])
                    playMyAudio("Low Octave/Low B")
                }

                if (keyWentDown("k")){            
                    keystrokes[listnum].push("k")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High C")
                }

                if (keyWentDown("l")){            
                    keystrokes[listnum].push("l")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High D")
                }

                if (keyWentDown(186)){            
                    keystrokes[listnum].push(";")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High E")
                }

                if (keyWentDown(222)){            
                    keystrokes[listnum].push("'")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High F")
                }

                if (keyWentDown("z")){            
                    keystrokes[listnum].push("z")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle C")
                }

                if (keyWentDown("x")){            
                    keystrokes[listnum].push("x")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle D")
                }

                if (keyWentDown("c")){            
                    keystrokes[listnum].push("c")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle E")
                }

                if (keyWentDown("v")){            
                    keystrokes[listnum].push("v")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle F")
                }

                if (keyWentDown("b")){            
                    keystrokes[listnum].push("b")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle G")
                }

                if (keyWentDown("n")){            
                    keystrokes[listnum].push("n")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle A")
                }

                if (keyWentDown("m")){            
                    keystrokes[listnum].push("m")
                    print(keystrokes[listnum])
                    playMyAudio("Middle Octave/Middle B")
                }

                if (keyWentDown(188)){            
                    keystrokes[listnum].push(",")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High G")
                }

                if (keyWentDown(190)){            
                    keystrokes[listnum].push(".")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High A")
                }

                if (keyWentDown(191)){            
                    keystrokes[listnum].push("/")
                    print(keystrokes[listnum])
                    playMyAudio("High Octave/High B")
                } // This piece of code is for every other key.
            }
        }

        // ----- End of Alley Soundboard -----

        // ----- Beginning of Trap Soundboard -----

        if (trap){ // This piece of code is used to toggle the keys to the Trap Soundboard.            
        }

        // ----- End of Trap Soundboard -----

        // ----- Beginning of Vocals Soundboard -----

        if (vocals){ // This piece of code is used to toggle the keys to the Vocals Soundboard. 
        }

        // ----- End of Vocals Soundboard -----

        // ----- Beginning of carlos Soundboard -----

        if (carlos){ // This piece of code is used to toggle the keys to the carlos Soundboard.
        }

        // ----- End of carlos Soundboard -----

    // ----- End of Soundboard Code -----
}