### Question 5

Find the memory leak in this application http://codequiz.azurewebsites.net/memleak
When ever user open a dialog, and close it, a memory will keep increased around 25 MBs per round. Please identify what is causing the memory leak, and how to fix it and describe how you investigate it.

\*\* Please note that the big array in the code was added intentionally, to make it easier to see the leak.
This array should be cleared by browser GC when the dialog is closed, and element is removed from DOM, but it is not (why is it the case?)

### Solution is clear tmp property of closeBtn after click closeBtn
