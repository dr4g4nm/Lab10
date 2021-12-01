var results = new Array();
var subjects = prompt("Enter number of subjects");
	subjects = parseInt(subjects);
var i = 0, total = 0;
    for(i = 0; i <= subjects - 1; i++)
    {
        results[i] = parseInt(prompt("Enter grade: "));
        total += results[i];
        document.write("Grade: " + results[i] + "<br />");
    }
var average = total / subjects;
    document.write("Average Grade: " + average + "<br />");