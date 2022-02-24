template = ".z$ { z-index: $; }"

#an array of numbers between -10 and 10
vals = [i for i in range(-10, 11)]
print(vals)

for e in vals:
    print(template.replace("$", str(e)))