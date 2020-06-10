console.log('Client side javascript file is loaded!')

const weatherForm=document.querySelector('form')
const val=document.querySelector('input')
const p1=document.getElementById('#Message-1')
const p2=document.getElementById('#Message-2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const finalVal=val.value
    p1.textContent('Loading')
    p2.textContent('')
    fetch('http://localhost:3000/weather?address='+finalVal).then((response) => {
        response.json().then((data)=>{
            if(data.error){
                p1.textContent(data.error)
            }
            else{
                p1.textContent(data.location)
                p2.textContent(data.forecast)
            }
        })
    })
    
})


