class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = 0

    def computeDifference(self):
        maxElement = max(self.__elements)
        minElement = min(self.__elements)
        self.maximumDifference = maxElement - minElement


_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
    