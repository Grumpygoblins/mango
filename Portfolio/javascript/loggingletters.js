<!DOCTYPE html>
<html>
<head>
  <title>Debugging Exercises</title>
  <script type="text/javascript">
  function printEvenNumbers(){
    for (var i=0; i >= 10; i++){
        if (i % 2 == 0){
          document.getElementById("EvenNumbers").innerText += (i+"\n");
        }
    }
  }
  </script>
</head>
<body>
<div id="EvenNumbers"></div>
  <button onclick="printEvenNumbers();" name="btnPrintEvenNumbers">Print Even Numbers</button>
</body>
</html>




