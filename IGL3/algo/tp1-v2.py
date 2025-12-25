r = "R"
v ="V"

t = [v,v,v," ",r,r,r] # v -vr r   # v vrvr- r # v -vrvrvr r # v vrvrvrvr- r
N = len(t)
index=N//2


def moveV(i):
    global N , index
    if i<50 : 
        if index>0 and t[index-1]==v and not (index+1<N and t[index+1]==v ) :
            t[index],t[index-1]=t[index-1],t[index]
            print(*t)
            index-=1
            moveV(i+1)
        if index>1 and t[index-1]==r and t[index-2]==v :
            t[index],t[index-2]=t[index-2],t[index]
            print(*t)
            index-=2
            moveV(i+1)
        moveR(i+1)
def moveR(i):
    global N,index
    if i < 50 :
        if index<N-1 and t[index+1]==r and not (index>0 and t[index-1]==r ) :
            t[index],t[index+1]=t[index+1],t[index]
            print(*t)
            index+=1
            moveR(i+1)
        if index<N-2 and t[index+1]==v and t[index+2]==r :
            t[index],t[index+2]=t[index+2],t[index]
            print(*t)
            index+=2
            moveR(i+1)
        moveV(i+1)

###########################################
print(*t)
moveV(0)
        