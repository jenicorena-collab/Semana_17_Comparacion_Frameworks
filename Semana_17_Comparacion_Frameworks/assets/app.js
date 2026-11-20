const table=document.querySelector('#scoreTable');
function calculate(){
 const rows=[...table.tBodies[0].rows], weights=rows.map(r=>Number(r.querySelector('.weight').value)||0);
 const sum=weights.reduce((a,b)=>a+b,0);document.querySelector('#weightTotal').textContent=sum+' %';
 const totals=[0,1,2,3].map(col=>rows.reduce((acc,r,i)=>acc+weights[i]*(Number(r.querySelectorAll('.score')[col].value)||0),0)/100);
 totals.forEach((v,i)=>document.querySelector('#total'+i).textContent=v.toFixed(2));
 const msg=document.querySelector('#matrixMessage');
 if(sum!==100){msg.textContent='Atención: los pesos deben sumar exactamente 100 %. Total actual: '+sum+' %.';msg.classList.remove('success')}
 else{msg.textContent='Pesos correctos (100 %). Mejor resultado actual: '+['Laravel','Spring Boot','Django','Express'][totals.indexOf(Math.max(...totals))]+' ('+Math.max(...totals).toFixed(2)+').';msg.classList.add('success')}
}
table.addEventListener('input',calculate);
document.querySelector('#resetMatrix').addEventListener('click',()=>{
 const defaults=[[25,[5,2,2,3]],[20,[5,2,4,3]],[20,[5,5,4,3]],[15,[5,3,4,4]],[10,[3,5,3,4]],[10,[5,5,4,5]]];
 [...table.tBodies[0].rows].forEach((r,i)=>{r.querySelector('.weight').value=defaults[i][0];r.querySelectorAll('.score').forEach((s,j)=>s.value=defaults[i][1][j])});calculate();
});calculate();
