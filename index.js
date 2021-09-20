const d = document,
    $responseData = d.getElementById("response"),
    $form = d.querySelector('.form-contact'),
    $formInput = d.querySelectorAll("[placeholder]");

d.addEventListener("submit", (e)=>{
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/ja846699@gmail.com",{
        method:"POST",
        body:new FormData(e.target)
    })
    .then((res)=>{ 
        return res.ok?res.json():Promise.reject(res);
    })
    .then((data)=>{ 
        console.log(data);
        $formInput.forEach(el=> el.disabled=true);

        setTimeout(()=>{
            $responseData.classList.remove('none');
            $form.reset();
            $formInput.forEach(el=> el.disabled=false);

            setTimeout(()=>{
                $responseData.classList.add('none');
            },3000);
        },3000);
    })
    .catch((err)=>{
        console.log(err);
        let message = err.statusText || "Ocurrió un Error, prueba nuevamente";

        alert(`Error ${err.status}: ${message}`);
    });
})