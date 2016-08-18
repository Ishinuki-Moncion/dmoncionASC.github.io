from random import *
def setup():
    frameRate(10)
    size (880,880)
    #background (255,255,255) #Background color
    smooth () # Improve edge smoothness

  

def draw():
    x = randrange(5,50)#random size
    fill (randint(0, 255), randint(0, 255), randint(0 , 255)) #Color of circle
    ellipse (mouseX - randint(0,255), mouseY - randint(0,255), 50, 50)
    ellipse (mouseX + randint(0,255), mouseY - randint(0,255), x, x)
    ellipse (mouseX, mouseY, x, x) #shaps where the mouse is
    

    