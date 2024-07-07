public with sharing class DayAndTime {
    public static void DateOFToday() {

        DateTime TodayDateAndTime =  System.now();
        System.debug(TodayDateAndTime);

        Date TodayDateOnly = System.today();
        System.debug(TodayDateOnly);


        //System.now gives date and time and System.today gives date only
        DateTime now = System.now();

        Time OnlyTime = now.time();
        System.debug(OnlyTime);

        Date OnlyDate = now.date();
        System.debug(OnlyDate);

        //what we did is fetched time (onlytime) and date(onlydate) from the now variable declared at line 12 

        DateTime StartingTime = DateTime.NewInstance(2023,03,03,7,30,00);
        System.debug(StartingTime);


        //what we did is gave a new instance whcih takes both date and time 


    }
}