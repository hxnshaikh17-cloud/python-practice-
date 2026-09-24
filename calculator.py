a = float(input("enter the first number :"))
b = float(input("enter the second number :"))
print("write add for addition:")
print("write sub for subtraction:")
print("write div for division:")
print("write multi for multiplication:")
c = input('')
if c == "add":
    print(a+b)
elif c == "sub":
    print(a-b)
elif c == "div":
    if b == 0 :
        print("invalid value")
    else:
        print(a/b)
elif c == "multi":
    print(a*b)
else: print("Invalid operation")
