#!/usr/bin/python
import time

#quick = "2 + 2 = 4 - 1 dats 3 quick maffs"

wait = 10

sum1 = 2 + 2
sum2 = sum1 - 1

sum1str = str(sum1)

sum2str = str(sum2)


while(wait > 1):
    time.sleep(1)
    print('2 + 2 ' + 'is ' + sum1str + ' - 1 dats ' + sum2str + ' quck maffs')
    wait = wait - 1