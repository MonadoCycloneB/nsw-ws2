import re


template = ".m$1$2$3 { margin$4: $5; }"
sizes = {
    "xs": 0,
    "sm": 576,
    "md": 768,
    "lg": 992,
    "xl": 1200
}
types = {
    "": "",
    "h": "inline",
    "v": "block",
    "t":"top",
    "b":"bottom",
    "l":"left",
    "r":"right",
}

# array that contains numbers -10 to 10 with a step of 2
numbers = [i for i in range(-20, 21, 2)]
numbers += ([i for i in range(-100, -24, 5)])
numbers += ([i for i in range(25, 101, 5)])
numbers.sort()
# convert number list to string list
numbers = [str(i) for i in numbers]
numbers += ["auto"]

def numClass(num):
    if(num == "auto"):
        return "a"
    return num
def proccessNum(num):
    if not num == "auto":
        return num + "px"
    else:
        return num
def processSize(size):
    if size == "xs":
        return ""
    else:
        return "-" + size
def getType(type):
    if type == "":
        return ""
    return "-" + type

output = ""

for size in sizes:
    output += "/* Size: " + size + " */\n"
    if not size == "xs":
        output += "@media (min-width: #px)".replace("#", str(sizes[size])) + " {\n"
    
    for type in types:
        for number in numbers:
            output += template.replace("$1", type).replace("$2", numClass(number)).replace("$3", processSize(size)).replace("$4", getType(types[type])).replace("$5", proccessNum(number)) + "\n"

    if not size == "xs":
        output +="}\n"
    output += "\n\n"

print(output)

# write output to file
with open("file.css", "w+") as f:
    f.write(output)
