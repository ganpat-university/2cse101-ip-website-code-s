function compute_age(e){today=(new Date).getTime();var a=e.year.value,t=e.month.value-1,n=e.day.value;birthdate=new Date(a,t,n).getTime(),age=(today-birthdate)/864e5,age>0&&(e.outputmrcday.value=int_zero(10*age/58.6)/10,e.outputmrcyear.value=int_zero(10*age/87.97)/10,age/87.97>1?nextmrcbday=new Date(today+87.97*(1-(age/87.97-parseInt(age/87.97)))*24*3600*1e3):nextmrcbday=new Date(today+87.97*(1-age/87.97)*24*3600*1e3),e.outputmrcbday.value=getLongDate(nextmrcbday),e.outputvnday.value=int_zero(10*age/243)/10,e.outputvnyear.value=int_zero(10*age/224.7)/10,age/224.7>1?nextvnbday=new Date(today+224.7*(1-(age/224.7-parseInt(age/224.7)))*24*3600*1e3):nextvnbday=new Date(today+224.7*(1-age/224.7)*24*3600*1e3),e.outputvnbday.value=getLongDate(nextvnbday),e.outputearthday.value=int_zero(10*age)/10,e.outputearthyear.value=int_zero(10*age/365.26)/10,age/365.26>1?nextearthbday=new Date(today+365.26*(1-(age/365.26-parseInt(age/365.26)))*24*3600*1e3):nextearthbday=new Date(today+365.26*(1-age/365.26)*24*3600*1e3),e.outputearthbday.value=getLongDate(nextearthbday),e.outputmarsday.value=int_zero(10*age/1.03)/10,e.outputmarsyear.value=int_zero(10*age/686.98)/10,age/686.98>1?nextmarsbday=new Date(today+686.98*(1-(age/686.98-parseInt(age/686.98)))*24*3600*1e3):nextmarsbday=new Date(today+686.98*(1-age/686.98)*24*3600*1e3),e.outputmarsbday.value=getLongDate(nextmarsbday),e.outputjupday.value=int_zero(10*age/.41)/10,e.outputjupyear.value=int_zero(100*age/4332.71)/100,age/4332.71>1?nextjupbday=new Date(today+4332.71*(1-(age/4332.71-parseInt(age/4332.71)))*24*3600*1e3):nextjupbday=new Date(today+4332.71*(1-age/4332.71)*24*3600*1e3),e.outputjupbday.value=getLongDate(nextjupbday),e.outputsatday.value=int_zero(10*age/.45)/10,e.outputsatyear.value=int_zero(100*age/10759.5)/100,age/10759.5>1?nextsatbday=new Date(today+10759.5*(1-(age/10759.5-parseInt(age/10759.5)))*24*3600*1e3):nextsatbday=new Date(today+10759.5*(1-age/10759.5)*24*3600*1e3),e.outputsatbday.value=getLongDate(nextsatbday),e.outputurday.value=int_zero(10*age/.72)/10,e.outputuryear.value=int_zero(100*age/30685)/100,age/30685>1?nexturbday=new Date(today+30685*(1-(age/30685-parseInt(age/30685)))*24*3600*1e3):nexturbday=new Date(today+30685*(1-age/30685)*24*3600*1e3),e.outputurbday.value=getLongDate(nexturbday),e.outputnepday.value=int_zero(10*age/.67)/10,e.outputnepyear.value=int_zero(100*age/60190)/100,age/60190>1?nextnepbday=new Date(today+60190*(1-(age/60190-parseInt(age/60190)))*24*3600*1e3):nextnepbday=new Date(today+60190*(1-age/60190)*24*3600*1e3),e.outputnepbday.value=getLongDate(nextnepbday),e.outputpltday.value=int_zero(10*age/6.39)/10,e.outputpltyear.value=int_zero(1e3*age/90800)/1e3,age/90800>1?nextpltbday=new Date(today+90800*(1-(age/90800-parseInt(age/90800)))*24*3600*1e3):nextpltbday=new Date(today+90800*(1-age/90800)*24*3600*1e3),e.outputpltbday.value=getLongDate(nextpltbday))}function getLongDate(e){return theDay=dayNames[e.getDay()+1],theMonth=monthNames[e.getMonth()+1],theDate=e.getDate(),theYear=e.getFullYear(),""+theDay+", "+theMonth+" "+theDate+", "+theYear}function int_zero(e){return 1>e?0:parseInt(e,10)}monthNames=new Array(13),monthNames[1]="Jan",monthNames[2]="Feb",monthNames[3]="Mar",monthNames[4]="Apr",monthNames[5]="May",monthNames[6]="Jun",monthNames[7]="Jul",monthNames[8]="Aug",monthNames[9]="Sep",monthNames[10]="Oct",monthNames[11]="Nov",monthNames[12]="Dec",dayNames=new Array(8),dayNames[1]="Sun",dayNames[2]="Mon",dayNames[3]="Tues",dayNames[4]="Wed",dayNames[5]="Thur",dayNames[6]="Fri",dayNames[7]="Sat";// JavaScript Document