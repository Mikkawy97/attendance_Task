var modal=
{
    student:[
            {
                name:'Slappy1 the Frog',
                days_attended:[true,false,true,true,false,true,false,false,true,false,true,true],
            },
            {
                name:'Lilly the Lizard',
                days_attended:[true,false,true,true,false,true,false,false,true,false,true,true],
            },
            {
                name:'Paulrus the Walrus',
                days_attended:[true,false,true,true,false,true,false,false,true,false,true,true],
            },
            {
                name:'Gregory the Goat',
                days_attended:[true,false,true,true,false,true,false,false,true,false,true,true],
            },
            {
                name:'Adam the Anaconda',
                days_attended:[true,false,true,true,false,true,false,false,true,false,true,true],
            },
            ]

};
var controller={

init:function (){
     if (localStorage.getItem("attendance")==null) {
        localStorage.setItem("attendance",JSON.stringify(modal.student));

     
     }
    
    view.render();
},
check:function (x,y) {
     var s = JSON.parse(localStorage.getItem("attendance"));
    var flag=s[x].days_attended[y];
    modal.student[x].days_attended[y]=!flag;
    s[x].days_attended[y]=!flag;


   localStorage.setItem("attendance",JSON.stringify(s));
    view.render();
}


}
var view ={
 render:function () {
    var students = JSON.parse(localStorage.getItem("attendance"));
    var tbody=$('#tbody');
    tbody.empty();

    for (let index = 0; index < students.length; index++) {
        var tr=$('<tr></tr>');
        tr.addClass('student');
        var student_name=$('<td></td>');
        student_name.addClass('name-col');
        student_name.text(students[index].name);
        tr.append(student_name);
        var count=0;
        var daymissed=0;
        for (let i = 0; i < students[index].days_attended.length; i++) {
           var td=$('<td></td>');
           td.addClass('attend-col');
           var input=$('<input></input>');
           input.attr('type','checkbox');
           if(students[index].days_attended[i]){
            input.attr('checked',true);
            count++;
            }
         

           
             td.append(input);
            tr.append(td);
              input.click(function(){
                           
               controller.check(index,i);
            });
        }
        var daymissed=12-count;
        var lastcolum=$('<td></td>');
        lastcolum.addClass('missed-col');
        lastcolum.text(daymissed);
        tr.append(lastcolum);

        

        tbody.append(tr);
  
    }
 }


}
controller.init();