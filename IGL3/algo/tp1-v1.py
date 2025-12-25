r = "R"
v ="V"

t = [v,v,v,v," ",r,r,r,r] # v -vr r   # v vrvr- r # v -vrvrvr r # v vrvrvrvr- r
N = len(t)

def move_v(start,end):
    if start>-1 and end <N:
        for i in range(end-3,start,-2):
            t[i],t[i+2]=t[i+2],t[i]
            print(*t)
        t[start],t[start+1]=t[start+1],t[start]
        print(*t)
        move_r(start-1,end+1)
def move_vv(start,end):
    if start!=end:
        for i in range(end-2,start-1,-2):
            t[i],t[i+2]=t[i+2],t[i]
            print(*t)
        t[start],t[start+1]=t[start+1],t[start]
        print(*t)
        move_rr(start+1,end-1)
def move_rr(start,end):
    if start!=end: 
        for i in range(start+2,end+1,2):
            t[i],t[i-2]=t[i-2],t[i]
            print(*t)
        t[end],t[end-1]=t[end-1],t[end]
        print(*t)
        move_vv(start+1,end-1)
def move_r(start,end):
    if start>-1 and end <N: 
        for i in range(start+3,end,2):
            t[i],t[i-2]=t[i-2],t[i]
            print(*t)
        t[end],t[end-1]=t[end-1],t[end]
        print(*t)
        move_v(start-1,end+1)


def croiser(start,end):
    if (N-1)//2 % 2 !=0 :
        t[start],t[start+1]=t[start+1],t[start]
        print(*t)
        move_r(start-1,end+1)
    else :
        t[end],t[end-1]=t[end-1],t[end]
        print(*t)
        move_v(start-1,end+1)

def reigner(start,end):
    move_rr(start,end)

###########################################
print(*t)
croiser(N//2-1,N//2+1)
print("-----------------------------------")
reigner(0,N-1)    
        