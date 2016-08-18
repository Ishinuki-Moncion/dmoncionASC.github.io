BOB = 0
def setup():
    
    size(400,400)
def draw():
    global BOB
    background(225,225,225)#cause traces to disapear
    BOB += 1#causes the square to move right on going
    rect(BOB,200,50,50)