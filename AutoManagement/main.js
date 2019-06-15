$(document).ready(function Schedule() {
   
    $("#courseTable").append("<tr><th>順序</th><th>日期</th><th>鞋款</th></tr>");
    function workday()
    {
        var topicCount = topic.length;
    
        var secondUnit = 1000;
        var minuteUnit = secondUnit * 60;
        var hourUnit = minuteUnit * 60;
        var dayUnit = hourUnit * 24;

        for(var x=0; x<topicCount; x++)
        {
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append("<td>"+(new Date(startDate.getTime()+x*9*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            if(topic[x]=="No Release")
            {
                $("#courseTable").append("<td><font color=\"red\">"+topic[x]+"</td>");
            }
            else
            {
                $("#courseTable").append("<td><font color=\"black\">"+topic[x]+"</td>");       
            }
            $("#courseTable").append("<tr>");
        }
    }
    workday();

    $("#stB").click(function()
    {
        var sV = new Date(document.getElementById("stD").value);
        var D = sV.getDate();
        var M = sV.getMonth()+1;
        if(sV.length != 0)
        {
            setMonthAndDay(M, D);
            $("#courseTable").empty();
            $("#courseTable").append("<tr><th>順序</th><th>日期</th><th>鞋款</th></tr>");
            workday();
        }
        else
        {
            alert("Error Code 1000XX")
        }
    })

    $("#stE").click(function()
    {
        if($("#newEvent").val()!=0)
        {
            topic.push($("#newEvent").val());
            $("#courseTable").empty();
            $("#courseTable").append("<tr><th>順序</th><th>日期</th><th>鞋款</th></tr>");
            workday();
        }
        else
        {
            alert("母湯歐");
        }
    })
     //alert(typeof(topic));
    

    

});