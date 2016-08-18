from random import *
def setup():
    frameRate(2000)
    size (500,400)
    background (255,255,255) #Background color
    smooth () # Improve edge smoothness
    fill(0,0, 225)#blue
    rect(0,0,100,80)#1
    
    fill(225,0,0)#red
    rect(100,0,100,80)#2
    
    fill(0,0,0)#black
    rect(200,0,100,80)#3
    
    fill(225,225,0)#yellow
    rect(300,0,100,80)#4
    
    fill(randrange(0,255), randrange(0,255), randrange(0,255))#rand
    rect(400,0,100,80)#5

def draw():
    if mousePressed and mouseX >= 0 and mouseX < 100 and mouseY <=80:
            stroke(0,0,225)
            fill(0,0,225)
            #ellipse(mouseX,mouseY,5,5)
    elif mousePressed and mouseX >= 100 and mouseX < 200 and mouseY <=80:
            stroke(225, 0, 0)
            fill(225, 0, 0)
            #ellipse(mouseX,mouseY,5,5)
    elif mousePressed and mouseX >= 200 and mouseX < 300 and mouseY <=80:
        stroke(0,0,0)
        fill(0,0,0)
        #ellipse(mouseX,mouseY,5,5)
    elif mousePressed and mouseX >= 300 and mouseX < 400 and mouseY <=80:
        stroke(225,225,0)
        fill(225,225,0)
        #ellipse(mouseX,mouseY,5,5)
    elif mousePressed and mouseX >= 400 and  mouseX < 500 and mouseY <=80:
        stroke(randrange(0,255), randrange(0,255), randrange(0,255))
        fill(randrange(0,255), randrange(0,255), randrange(0,255))
    elif mousePressed and mouseY > 80:
        ellipse(mouseX,mouseY,10,10)
        
        
        
#if mouseButton == RIGHT:
    
#elif mouseButton == LEFT:
    #ellipse(mouseX,mouseY,5,5)
    
    