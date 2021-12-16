let allButtons = document.querySelectorAll('.key')

allButtons.forEach(el=>{
    console.log(el)
    console.log(el.getAttribute('data-key'))
    //set action
    el.addEventListener('click',function(e){
        console.log('click')
        //play audio
        let notes = document.querySelectorAll('audio')
        let buttons = document.querySelectorAll('.key')

        function PlayAudio(keyNumber){
            notes.forEach(audio=>{
                let getKeyOfAudio = audio.getAttribute('data-key')
                //console.log(getKeyOfAudio)
                //audio.play()
                if(getKeyOfAudio == keyNumber) {
                    audio.play();
                }
            })

        }

        buttons.forEach(el=>{
            el.addEventListener('click',function(e){
                e.preventDefault()
                let getKey = el.getAttribute('data-key')
                PlayAudio(getKey)
            })
        })



        
        
        
    })
})