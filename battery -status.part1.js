console.log("Hey Iulia");
batteryCharge = 70; // %  <--variable
FULL_BATTERY = 100; // 100% - fully charged battery
chargePercentInMinutes = 10; // 1% ~ 10 minutes

etWorkInMinutes = batteryCharge * chargePercentInMinutes;

//HW2: print HOW MUCH Overflow in px?
//next Exercitiu
// unit px
childWidth = 100;
childPadding = 10;
childBorder = 1;
childMargin = 20;

parentWidth = 110;

childSize = childWidth + (childPadding + childBorder + childMargin) * 2;
overflow = childSize > parentWidth; // Boolean
overflow = childSize - parentWidth;

alert("Horizontal child size" + childSize + "px");
alert("child overflow?   " + overflow);
alert("child overflow>parent" + overflow);
