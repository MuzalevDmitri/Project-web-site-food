
alert('wefew')
const deadLine = "2020-05-11"

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60),
       
        
    
            return {
                "total" : t,
                'days' : days,
                "hours" : hours,
                "minutes" : minutes,
                'seconds' : seconds
            }
}

        function setClock(selector, endtime) {
            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setIntrval(updateClock, 1000)
                

            function updateClock() {
                const t = getTimeRemaining(endtime)

                days.innerHTML = t.days
                hours.innerHTML = t.hours
                minutes.innerHTML = t.minutes
                seconds.innerHTML = t.seconds

                if (t.total <= 0) {
                    clearInterval(timeInterval)
                }
            }
        }
    

    setClock('.timer', deadLine)


    const modalTrigger = document.querySelectorAll('[data-modal'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]')

          modalTrigger.addEventListener("click", ()=> {
              modal.classList.add('show')
              modal.classList.remove('hide')

        modalCloseBtn.addEventListener("click", ()=> {
                modal.classList.add('hide')
                modal.classList.remove('show')
          })