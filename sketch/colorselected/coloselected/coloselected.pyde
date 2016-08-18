BOB = 0
def setup():
    frameRate(1000)
    size (400,400)
    background (255,255,255) #Background color
    smooth () # Improve edge smoothness
    fill(225,0,0)
    rect(100,0,100,100) 
    fill(0,0, 225)
    rect(0,0,100,100)
    fill(0,0,0)
    rect(200,0,100,100)
    fill(225,225,0)
    rect(300,0,100,100)

def draw():
    if mousePressed and mouseX < 100 and mouseY <=100:
        
            stroke(0,0,225)
            fill(0,0,225)
            #ellipse(mouseX,mouseY,5,5)
    elif mousePressed and mouseX < 200 and mouseY <=100:
            stroke(225, 0, 0)
            fill(225, 0, 0)
            #ellipse(mouseX,mouseY,5,5)
    elif mousePressed and mouseX < 300 and mouseY <=100:
        stroke(0,0,0)
        fill(0,0,0)
        #ellipse(mouseX,mouseY,5,5)
    elif mousePressed and mouseX < 400 and mouseY <=100:
        stroke(225,225,0)
        fill(225,225,0)
        #ellipse(mouseX,mouseY,5,5)
    elif mousePressed and mouseY > 100:
        ellipse(mouseX,mouseY,5,5)
        
#if mouseButton == RIGHT:
    
#elif mouseButton == LEFT:
    #ellipse(mouseX,mouseY,5,5)
    
    