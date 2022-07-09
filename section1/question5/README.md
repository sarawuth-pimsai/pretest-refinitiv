### Question 5

Find the memory leak in this application http://codequiz.azurewebsites.net/memleak
When ever user open a dialog, and close it, a memory will keep increased around 25 MBs per round. Please identify what is causing the memory leak, and how to fix it and describe how you investigate it.

\*\* Please note that the big array in the code was added intentionally, to make it easier to see the leak.
This array should be cleared by browser GC when the dialog is closed, and element is removed from DOM, but it is not (why is it the case?)

### Solution is clear tmp property of closeBtn after click closeBtn

```
<script>
      function showDialog() {
        const newDialog = document.createElement("div");
        newDialog.style.border = "solid 1px black";
        newDialog.style.position = "absolute";
        newDialog.style.width = "100%";
        newDialog.style.height = "100%";
        newDialog.style.top = "0px";
        newDialog.style.background = "white";

        const closeBtn = document.createElement("button");
        const dialogText = document.createElement("div");
        newDialog.appendChild(closeBtn);
        newDialog.appendChild(dialogText);
        dialogText.innerText = "This is a dialog";
        closeBtn.innerText = "Close";
        document.addEventListener("click", function (e) {
          if (e.target === closeBtn) {
            closeBtn.tmp = null; // <- add this line to the code
            newDialog.parentElement.removeChild(newDialog);
          }
        });

        //do not remove this part, it is for the ease of leak identification
        const tmp = [];
        for (let i = 1; i < 5000000; i++) {
          tmp.push(i);
        }
        closeBtn.tmp = tmp;
        //end

        document.body.appendChild(newDialog);
      }
    </script>
```
