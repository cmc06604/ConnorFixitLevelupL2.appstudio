// Gives the correct output based on the given information using a switch case
switch (true) {
case State == "NE" && temp < 32 :
  NSB.MsgBox(messages[0])
  break;
case State == "NE" && temp > 32 && temp < 50 :
  NSB.MsgBox(messages[1])
  break;
case State == "FL" && temp > 32 && temp < 50 :
  NSB.MsgBox(messages[2])
  break;
case State == "FL" && temp > 50 && temp < 70 :
  NSB.MsgBox(messages[3])
  break;
default:
  NSB.MsgBox("Try again with inputting the information")
  break;
}