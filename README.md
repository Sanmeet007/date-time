# Dynamic Date Time 
It is a js class which helps to get current date and time ; also updates it accurately ! 

## Usage 

1. Create some markup ( example below ) 

```

 <div class="time">
    <span id="hours"></span>  :
    <span id="minutes"></span> :
    <span id="seconds"></span>
    <span id="type"></span>
    <br>
    <br>
    <span id="date"></span> -
    <span id="month"></span> -
    <span id="year"></span>
    <br>
    <br>
    <span id="day"></span>
  </div>

```
2. Link DynamicDT class 

3. Instantiate the class and some parameters 

```
    const time = new DynamicDT({
      format: 12,
      update: function (time , date) {

        document.querySelector('#hours').innerText = time.hours
        document.querySelector('#minutes').innerText = time.minutes
        document.querySelector('#seconds').innerText = time.seconds
        document.querySelector('#type').innerText = time.type

        document.querySelector('#day').innerText = date.day
        document.querySelector('#date').innerText = date.date
        document.querySelector('#month').innerText = date.month

        document.querySelector('#year').innerText = date.year;
      }
    });

```

## Parameters 

It takes 2 parameters 

1. Format : it can be 12 or 24 ( basically tells to use different formats 12 hours or 24 hours ) 
> With 12 hour format you have access to currentTime.type variable which helps you to check is it am or pm 

2. Update Function :
 It is function which is called after every 1 sec to update to the current time and date ( accurately) 
 Has 2 parameters  first one is time and other one is date 
 You can use time object to get access to hours , seconds and minutes ( also type if format is 12 ) .
 You can use date object to acces to date , day , month and year ! 

How cool is that !

For any queries contact me at ssanmeet123@gmail.com 
